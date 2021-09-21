import MyComponent from '../../../../slices/ProductListWithCta';

export default {
  title: 'slices/ProductListWithCta'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"http://google.com"}},{"productLink":{"link_type":"Web","url":"http://google.com"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"title":[{"type":"heading1","text":"Synthesize global metrics","spans":[]}],"description":[{"type":"paragraph","text":"Amet qui ipsum nostrud laborum minim. Et sunt commodo ullamco ut Lorem ullamco minim reprehenderit enim sit tempor magna consequat.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'
