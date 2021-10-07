export default async (req, res) => {
    
    try {
        const response = await fetch(
            "https://uniform.app/api/v1/manifest?projectId=224a28b5-68e5-467f-b74a-72afea9e3f0b",
            {
            method: "post",
            headers: {
                "x-api-key":
                "uf13ge4dz5a4xp5aremuzp2ja8wc3hraf5mxf3sha0xj4xerd56pn2gr0c7sjpww8y9lvy890wlwsunqgucahu7uh45cg3x0m"
            }
            }
        );
        const data = await response.json()

        const responseResetPrismic = await fetch(
            "https://if-api.prismic.io/if/write/kaplan-uniform-demo--intents/reset",
            {
            method: "post",
            headers: {
                "Authorization":
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwcmlzbWljLmlvIiwiaWF0IjoxNjMzNTMzMjYyMzk1LCJjYXRhbG9nSWQiOiJrYXBsYW4tdW5pZm9ybS1kZW1vLS1pbnRlbnRzIn0.tNniWNYcqHXRy91qhN1rUZGaXkKDfjXKhIB5x02vcRU",
                "Content-Type": "application/json"
            }
            }
        );

        const responsePrismic = await fetch(
            "https://if-api.prismic.io/if/write/kaplan-uniform-demo--intents",
            {
            method: "post",
            headers: {
                "Authorization":
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwcmlzbWljLmlvIiwiaWF0IjoxNjMzNTMzMjYyMzk1LCJjYXRhbG9nSWQiOiJrYXBsYW4tdW5pZm9ybS1kZW1vLS1pbnRlbnRzIn0.tNniWNYcqHXRy91qhN1rUZGaXkKDfjXKhIB5x02vcRU",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(functionmapIntents(data.site.intents))
            }
        );

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end()
        //res.end(JSON.stringify(functionmapIntents(data.site.intents)));
    }
    
    catch (error) {
        res.json(error);
        res.status(405).end();
    }
};

function functionmapIntents(intents){
    return intents.map((intent)=>{
        return{
            id:intent.id,
            title:intent.id || "",
            description:intent.id || "",
            image_url:'https://pbs.twimg.com/profile_images/1127885847364345859/BOkP7M2k_400x400.jpg',
            last_update:Date.now(),
            blob:{
                [intent.id]:{
                    str:intent.signals[0].str,
                },
            },
        }
    })
}

//https://if-api.prismic.io/if/write/demo-sm-next-ecom--intents