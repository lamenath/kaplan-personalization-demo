import "../styles/globals.css";
import React from 'react'
import NextApp from 'next/app'
import { Client } from "../prismic-configuration";

export default class MyApp extends NextApp {
  static async getInitialProps(appCtx) {
    const client = Client();
    const menu = (await client.getSingle("menu")) || {};
    const footer = (await client.getSingle("footer")) || {};
    let categoriesId = [];
    if(menu.data){
      categoriesId = menu.data.menu_tabs.map(function(tab) {
        return tab.tab.id
      }) 
    }
    const categories = (await client.getByIDs(categoriesId)) || {};
    const categoriesClean = categories.results.map(function(category) {
      return {
        id: category.data.id,
        name: category.data.name,
        featured: category.data.featured,
        sections: category.data.slices,
      }
    }) || [];
    
    return {
      props: {
        menu: menu,
        footer: footer,
        categories: categoriesClean
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props
    return (
      <Component {...pageProps} menu={props.menu} footer={props.footer} categories={props.categories} />
    )
  }
}