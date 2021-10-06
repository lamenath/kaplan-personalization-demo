import React from "react";
import Head from "next/head";
import HeaderMarketing from './HeaderMarketing';
import FooterMarketing from './FooterMarketing';
import ExitPreviewButton from './ExitPreviewButton'

const LayoutMarketing = ({ children, menuMarketing, footerMarketing }) => {
  return (
    <div>
      <Head>
        <title> Prismic E-commerce Demo </title>
      </Head>
      { menuMarketing.data ?
        <HeaderMarketing menu={menuMarketing}/>
        : <span/>
      }
      <main>{children}</main>
      { footerMarketing.data ?
        <FooterMarketing footer={footerMarketing}/>
        : <span/>
      }
    </div>
  )
};

export default LayoutMarketing;