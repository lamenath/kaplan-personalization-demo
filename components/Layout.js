import React from "react";
import Head from "next/head";
import Header from './Header';
import Footer from './Footer';
import ExitPreviewButton from './ExitPreviewButton'

const Layout = ({ children, menu, footer, categories }) => {
  return (
    <div>
      <Head>
        <title> Prismic E-commerce Demo </title>
      </Head>
      { menu.data ?
        <Header menu={menu} categories={categories}/>
        : <span/>
      }
      <main>{children}</main>
      { footer.data ?
        <Footer footer={footer}/>
        : <span/>
      }
    </div>
  )
};

export default Layout;