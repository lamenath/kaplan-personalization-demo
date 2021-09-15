import "../styles/globals.css";
import React from 'react'
import NextApp from 'next/app'
import { Client } from "../prismic-configuration";

export default class MyApp extends NextApp {
  static async getInitialProps(appCtx) {
    const client = Client();
    const menu = (await client.getSingle("menu")) || {};
    const categoriesId = menu.data.menu_tabs.map(function(tab) {
      return tab.tab.id
    })
    const categories = (await client.getByIDs(categoriesId)) || {};
    const categoriesClean = categories.results.map(function(category) {
      return {
        id: category.data.id,
        name: category.data.name,
        featured: category.data.featured,
          // {
          //   name: category.data.featured.title,
          //   href: category.data.featured.href,
          //   imageSrc: category.data.featured.image.url,
          //   imageAlt: category.data.featured.image.alt
          // },
        // [
        //   {
        //     name: 'New Arrivals',
        //     href: '#',
        //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
        //     imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        //   },
        //   {
        //     name: 'Artwork Tees',
        //     href: '#',
        //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
        //     imageAlt:
        //       'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        //   },
        // ],
        sections: category.data.body,
      }
    })
    console.log(categories.results[0].data)
    return {
      props: {
        menu: menu,
        categories: categoriesClean
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props
    return (
      <Component {...pageProps} menu={props.menu} categories={props.categories} />
    )
  }
}