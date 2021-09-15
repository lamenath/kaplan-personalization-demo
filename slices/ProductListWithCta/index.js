import React from 'react'
import { RichText } from 'prismic-reactjs'
import SliceResolver from '../../sm-resolver'

const products = [
  {
    id: 1,
    name: 'SmartPic 2000',
    color: 'Black',
    price: '$7500',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'SmartPic 2000',
  },
  {
    id: 2,
    name: 'Artman 500',
    color: 'Black',
    price: '$5000',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    imageAlt: 'Artman 500',
  },
  {
    id: 3,
    name: 'Quicky v2',
    color: 'Black',
    price: '$2000',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1516962126636-27ad087061cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGNhbWVyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    imageAlt: 'Quicky v2',
  },
  {
    id: 4,
    name: 'PicBoy Pocket',
    color: 'Black',
    price: '$950',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1566863244489-a5e7946f46f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGNhbWVyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    imageAlt: 'PocketPicBoy',
  },
  // More products...
]

const ProductListWithCta = ({ slice }) => (
  <section>
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">{RichText.asText(slice.primary.title)}</h2>
          <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
            {RichText.asText(slice.primary.description)}<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {slice.items.map((product) => (
            <div key={product.topProduct.id} className="group relative">
              <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  src={product.topProduct.imageSrc}
                  alt={product.topProduct.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.topProduct.href}>
                  <span className="absolute inset-0" />
                  {product.topProduct.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.topProduct.color}</p>
              <p className="mt-1 text-sm font-medium text-gray-900">{product.topProduct.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
  </section>
)

export default ProductListWithCta