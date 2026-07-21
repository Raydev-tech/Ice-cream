'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  ShoppingCart,
  Star,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

const bestsellers = [
  {
    id: 1,
    name: 'Cookie Crumble',
    price: '$5.99',
    rating: 5,
    image: 'https://i.pinimg.com/736x/86/96/ed/8696edbf5595b63d72a78f22d784af77.jpg',
    description: 'Creamy vanilla ice cream packed with crunchy cookies.',
  },
  {
    id: 2,
    name: 'Choco Brownie',
    price: '$6.49',
    rating: 5,
    image: 'https://i.pinimg.com/736x/18/39/b5/1839b51798c581c9219f3d7ccd62cbda.jpg',
    description: 'Rich chocolate ice cream with delicious brownie bites.',
  },
  {
    id: 3,
    name: 'Honey Swirl',
    price: '$5.49',
    rating: 4.5,
    image: 'https://i.pinimg.com/736x/7f/fa/9a/7ffa9a4008557fcaa09d1efcf63f6836.jpg',
    description: 'Smooth vanilla ice cream with a sweet honey swirl.',
  },
  {
    id: 4,
    name: 'Berry Mix',
    price: '$5.99',
    rating: 5,
    image: 'https://i.pinimg.com/1200x/8e/6f/3b/8e6f3b34a942b0fbf3173ce5da4e18dc.jpg',
    description: 'A refreshing blend of delicious berries and cream.',
  },
]

export default function BestSellers() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section
      id="bestsellers"
      className="relative overflow-hidden bg-gradient-to-b from-white to-pink-50/50 px-4 py-20 md:py-28"
    >
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-pink-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
        >
          {/* Label */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2">
            <Sparkles
              size={15}
              className="text-pink-600"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              Customer Favorites
            </span>
          </div>

          {/* Heading */}

          <h2 className="font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Our{' '}
            <span className="text-pink-600">
              Best
            </span>{' '}
            Sellers
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover the flavors our customers love most.
            These delicious treats keep everyone coming back for another scoop.
          </p>
        </div>

        {/* ================= PRODUCTS ================= */}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 to-purple-50 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10"
            >

              {/* ================= IMAGE ================= */}

              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">

                {/* Product Image */}

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Bestseller Badge */}

                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-md">
                  <Sparkles
                    size={12}
                    className="text-pink-600"
                  />

                  <span className="text-[10px] font-bold uppercase tracking-wider text-pink-600">
                    Bestseller
                  </span>
                </div>

                {/* Quick Cart Button */}

                <button
                  aria-label={`Add ${product.name} to cart`}
                  className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-pink-600 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-pink-600 hover:text-white"
                >
                  <ShoppingCart size={18} />
                </button>
              </div>

              {/* ================= PRODUCT INFO ================= */}

              <div className="p-6">

                {/* Product Name */}

                <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-pink-600">
                  {product.name}
                </h3>

                {/* Description */}

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                  {product.description}
                </p>

                {/* Rating */}

                <div className="mt-4 flex items-center gap-2">

                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>

                  <span className="text-xs font-medium text-gray-500">
                    {product.rating}
                  </span>

                </div>

                {/* Bottom Row */}

                <div className="mt-5 flex items-center justify-between border-t border-pink-100 pt-5">

                  {/* Price */}

                  <span className="text-xl font-bold text-pink-600">
                    {product.price}
                  </span>

                  {/* Cart Button */}

                  <button
                    aria-label={`Add ${product.name} to cart`}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/30 active:scale-95"
                  >
                    <ShoppingCart size={18} />
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* ================= CTA ================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-12 text-center"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white px-7 py-3.5 text-sm font-semibold text-pink-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:text-white hover:shadow-lg hover:shadow-pink-500/20"
          >
            Explore All Flavors

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  )
}