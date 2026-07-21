'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  ShoppingCart,
  Star,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Strawberry Bliss',
    price: '$4.99',
    image: 'https://i.pinimg.com/736x/17/98/08/17980899f632f84daa91b253a2fe6d52.jpg',
    description: 'A sweet and creamy strawberry delight.',
    rating: '4.9',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Chocolate Dream',
    price: '$5.49',
    image: 'https://i.pinimg.com/736x/8c/71/71/8c717169f865ff2d53678db88a35b715.jpg',
    description: 'Rich chocolate flavor in every delicious scoop.',
    rating: '4.8',
    badge: 'Popular',
  },
  {
    id: 3,
    name: 'Mint Chocolate',
    price: '$5.49',
    image: 'https://i.pinimg.com/236x/0d/80/44/0d80440936f9a32113c10779fd33f9c1.jpg',
    description: 'Cool mint blended with rich chocolate pieces.',
    rating: '4.9',
    badge: 'Favorite',
  },
  {
    id: 4,
    name: 'Vanilla Classic',
    price: '$4.99',
    image: 'https://i.pinimg.com/736x/17/98/08/17980899f632f84daa91b253a2fe6d52.jpg',
    description: 'A timeless classic with smooth vanilla flavor.',
    rating: '4.7',
    badge: 'Classic',
  },
]

export default function ClassicFavorites() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-gradient-to-b from-pink-50/50 to-white px-4 py-20 md:py-28"
    >
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-pink-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-rose-100/60 blur-3xl" />

      <div className="mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
        >
          {/* Small Label */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2">
            <Sparkles
              size={15}
              className="text-pink-600"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              Our Signature Flavors
            </span>
          </div>

          {/* Heading */}

          <h2 className="font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Our{' '}
            <span className="text-pink-600">
              Classic
            </span>{' '}
            Favorites
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Handpicked flavors that have stood the test of time,
            loved by generations and crafted to make every moment sweeter.
          </p>
        </div>

        {/* ================= PRODUCT GRID ================= */}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10"
            >

              {/* ================= PRODUCT IMAGE ================= */}

              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">

                {/* Product Image */}

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Product Badge */}

                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-pink-600">
                    {product.badge}
                  </span>
                </div>

                {/* Quick Add Button */}

                <button
                  aria-label={`Add ${product.name} to cart`}
                  className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-pink-600 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-pink-600 hover:text-white"
                >
                  <ShoppingCart size={18} />
                </button>
              </div>

              {/* ================= PRODUCT INFO ================= */}

              <div className="p-6">

                {/* Rating */}

                <div className="mb-3 flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={12}
                        className="fill-pink-500 text-pink-500"
                      />
                    ))}
                  </div>

                  <span className="text-xs font-medium text-gray-500">
                    {product.rating}
                  </span>
                </div>

                {/* Product Name */}

                <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-pink-600">
                  {product.name}
                </h3>

                {/* Description */}

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                  {product.description}
                </p>

                {/* Bottom Row */}

                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">

                  {/* Price */}

                  <div>
                    <span className="text-xl font-bold text-pink-600">
                      {product.price}
                    </span>
                  </div>

                  {/* Add to Cart */}

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

        {/* ================= VIEW ALL BUTTON ================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-12 text-center"
        >
          <a
            href="#menu"
            className="group inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white px-7 py-3.5 text-sm font-semibold text-pink-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:text-white hover:shadow-lg hover:shadow-pink-500/20"
          >
            View All Flavors

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