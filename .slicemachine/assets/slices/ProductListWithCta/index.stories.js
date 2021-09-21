import MyComponent from '../../../../slices/ProductListWithCta';

export default {
  title: 'slices/ProductListWithCta'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"http://google.com"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"http://google.com"}}],"primary":{"title":[{"type":"heading1","text":"Repurpose collaborative architectures","spans":[]}],"description":[{"type":"paragraph","text":"Et officia adipisicing do occaecat laborum est irure laborum id eiusmod proident.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'
