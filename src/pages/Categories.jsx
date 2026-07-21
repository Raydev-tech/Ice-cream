'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

const categories = [
  {
    id: 1,
    name: 'Fruity Delights',
    description: 'Fresh, fruity and naturally delicious',
    image: 'https://i.pinimg.com/736x/b1/86/d0/b186d01691e0f66ffc7fb32a37a81991.jpg',
  },
  {
    id: 2,
    name: 'Chocolate Heaven',
    description: 'Rich, creamy chocolate goodness',
    image: 'https://i.pinimg.com/736x/8c/71/71/8c717169f865ff2d53678db88a35b715.jpg',
  },
  {
    id: 3,
    name: 'Refreshing Sorbet',
    description: 'Light, refreshing and bursting with flavor',
    image: 'https://i.pinimg.com/736x/17/98/08/17980899f632f84daa91b253a2fe6d52.jpg',
  },
  {
    id: 4,
    name: 'Seasonal Flavors',
    description: 'Limited flavors made for every season',
    image: 'https://i.pinimg.com/1200x/22/a7/d0/22a7d0ce7700f7169b5990609f5d458f.jpg',
  },
]

export default function Categories() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-white px-4 py-20 md:py-28"
    >
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-pink-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-rose-100/60 blur-3xl" />

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
              Find Your Favorite
            </span>
          </div>

          {/* Heading */}

          <h2 className="font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Explore Our{' '}
            <span className="text-pink-600">
              Categories
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover a world of frozen delights, carefully crafted
            to bring a little more sweetness to your day.
          </p>
        </div>

        {/* ================= CATEGORY GRID ================= */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category, index) => (
            <div
              key={category.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative h-[360px] cursor-pointer overflow-hidden rounded-[2rem] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20"
            >

              {/* ================= BACKGROUND IMAGE ================= */}

              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition-all duration-500 group-hover:from-black/90 group-hover:via-black/40" />

              {/* ================= TOP BADGE ================= */}

              <div className="absolute left-5 top-5 z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-12 group-hover:bg-pink-600">
                  <Sparkles size={17} />
                </div>
              </div>

              {/* ================= ARROW ================= */}

              <div className="absolute right-5 top-5 z-10 flex h-10 w-10 translate-x-2 -translate-y-2 items-center justify-center rounded-full bg-white text-gray-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight size={19} />
              </div>

              {/* ================= CONTENT ================= */}

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white">

                {/* Small Line */}

                <div className="mb-4 h-1 w-10 rounded-full bg-pink-500 transition-all duration-500 group-hover:w-16" />

                {/* Category Name */}

                <h3 className="font-serif text-2xl font-bold sm:text-3xl">
                  {category.name}
                </h3>

                {/* Description */}

                <p className="mt-2 max-w-[220px] text-sm leading-6 text-white/75">
                  {category.description}
                </p>

                {/* Explore Link */}

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white">
                  <span>
                    Explore Collection
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-12 text-center"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-3 rounded-full border border-pink-200 bg-pink-50 px-7 py-3.5 text-sm font-semibold text-pink-600 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:text-white hover:shadow-lg hover:shadow-pink-500/20"
          >
            View All Flavors

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

      </div>
    </section>
  )
}