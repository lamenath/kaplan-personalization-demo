import React from "react";
import Head from "next/head";
import Header from './Header'

const Layout = ({ children, menu }) => {
  return (
    <div>
      <Head>
        <title> Prismic E-commerce Demo </title>
      </Head>
      <Header menu={menu} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;