import React from "react";
import Head from "next/head";
import Header from './Header'

const Layout = ({ children, menu, categories }) => {
  return (
    <div>
      <Head>
        <title> Prismic E-commerce Demo </title>
      </Head>
      <Header menu={menu} categories={categories}/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;