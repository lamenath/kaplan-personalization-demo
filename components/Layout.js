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
      <Header menu={menu} categories={categories}/>
      <main>{children}</main>
      <Footer footer={footer}/>
      <ExitPreviewButton />
    </div>
  )
};

export default Layout;