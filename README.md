Running this project on your laptop

1. Download and extract the zip/tar file in the folder you want the project in
2. type in terminal (in your folder) : npm install
3. type in terminal (in your folder) : npm update
4. add you repo name to the prismic in sm.json in your folder
5. Launch slice machine (in your folder) : prismic sm --develop
6. Push all custom types to prismic in the slice machine localhost:9999
7. Add your content through the prismic UI
8. Launch your website with (in your folder) : npm run dev

To enable Integration Fields

Change this line of code in this file your project : Slices/ProductListWithCta/model.json
"catalog": "demo-sm-next-ecom--products",
Replace "demo-sm-next-ecom" by your repo and "products" by your integration fields name


# Prismic Slice Machine & Next.js Boilerplate
> [Next.js](https://nextjs.org/) & Slice Machine boilerplate project with content managed in [Prismic](https://prismic.io) and components built with Slice Machine

## Check out the dedicated article to get this project up and running
> [Learn how to use this boilerplate to build a project from scratch](https://prismic.io/docs/technologies/tutorial-series-introduction-nextjs)

### Learn more about using Prismic with Next.js

[Prismic + Next.js documentation](https://prismic.io/docs/technologies/home-prismic-and-nextjs).

### License

This software is licensed under the Apache 2 license, quoted below.

Copyright 2021 [Prismic](http://prismic.io/).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
