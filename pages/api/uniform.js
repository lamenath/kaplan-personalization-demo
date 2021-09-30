export default async (req, res) => {
    
    try {
        const response = await fetch(
            "https://uniform.app/api/v1/manifest?projectId=cbbfbe77-7a2b-4e5a-82bc-b256e6fb1153",
            {
            method: "post",
            headers: {
                "x-api-key":
                "uf1fpfqxs5cgrfq04h6x6p6umgg2d0l7uw872ta9n2j8508n64t4c7l2lw99z9up0m7xpa3306sxklnethwr2lvjs9hn2vj08",
            },
            }
        );
        const data = await response.json()

        const responsePrismic = await fetch(
            "https://if-api.prismic.io/if/write/demo-sm-next-ecom--intents",
            {
            method: "post",
            headers: {
                "Authorization":
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwcmlzbWljLmlvIiwiaWF0IjoxNjMyOTM4NzU3Mzk2LCJjYXRhbG9nSWQiOiJkZW1vLXNtLW5leHQtZWNvbS0taW50ZW50cyJ9.RYsHoE5kXV5yFb_vP_5MBtC5uyzegV8l_o2k5ZJBV-w",
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
            image_url:'https://pbs.twimg.com/profile_images/1235674864649830400/kd3pN6iU_400x400.jpg',
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