import { Client } from "../../prismic-configuration";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import Layout from "../../components/Layout";
import SliceZone from "next-slicezone";

import resolver from "../../sm-resolver.js";
import UniformSliceZone from "../../components/UniformSliceZone";

const Page = (props) => {
  return(
  <Layout menu={props.menu} footer={props.footer} categories={props.categories}>
    <UniformSliceZone {...props} resolver={resolver} />
  </Layout>
  )
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: "uniform-page",
  queryType: "repeat",
  apiParams({ params }) {
    return {
      uid: params.uid
    }
  }
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'uniform-page',
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid
      }
    }
  }
});

export default Page;