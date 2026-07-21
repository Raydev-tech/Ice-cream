'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  ArrowRight,
  ShoppingBag,
  Sparkles,
  Star,
} from 'lucide-react'
import Memory from './Memory'
import ClassicFavorites from './ClassicFavorites'
import Categories from './Categories'
import SummerSpecial from './SummerSpecial'
import BestSellers from './BestSellers'
import Testimonials from './Testimonials'

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <>
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-28 pb-16 md:pt-32 md:pb-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl" />

      <div className="pointer-events-none absolute right-[15%] top-24 h-3 w-3 rounded-full bg-pink-400" />

      <div className="pointer-events-none absolute left-[10%] top-[35%] h-2 w-2 rounded-full bg-rose-400" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}

          <div className="relative z-10 text-center lg:text-left">

            {/* Badge */}
            <div
              data-aos="fade-down"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm"
            >
              <Sparkles
                size={16}
                className="text-pink-600"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
                Handcrafted with Love
              </span>
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl"
            >
              Discover
              <br />

              <span className="text-pink-600">
                Sweet
              </span>{' '}
              Delights
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0"
            >
              Indulge in our delicious handcrafted ice cream, made with
              premium ingredients and bursting with irresistible flavors.
              Every scoop is a moment worth savoring.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a
                href="#products"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-pink-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/30 sm:w-auto"
              >
                Explore Flavors

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#about"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600 sm:w-auto"
              >
                Our Story
              </a>
            </div>

            {/* Rating */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-10 flex items-center justify-center gap-6 lg:justify-start"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                  <Star
                    size={18}
                    className="fill-pink-600 text-pink-600"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-gray-900">
                      4.9
                    </span>

                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={12}
                          className="fill-pink-500 text-pink-500"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-500">
                    Loved by our customers
                  </p>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-gray-200 sm:block" />

              <div className="hidden sm:block">
                <p className="font-bold text-gray-900">
                  10K+
                </p>

                <p className="text-xs text-gray-500">
                  Happy customers
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative flex min-h-[500px] items-center justify-center lg:min-h-[650px]"
          >

            {/* Background Circle */}
            <div className="absolute h-[340px] w-[340px] rounded-full bg-gradient-to-br from-pink-200 to-rose-300 opacity-70 blur-sm sm:h-[450px] sm:w-[450px] lg:h-[520px] lg:w-[520px]" />

            {/* Decorative Circle */}
            <div className="absolute h-[280px] w-[280px] rounded-full border border-white/80 sm:h-[390px] sm:w-[390px] lg:h-[460px] lg:w-[460px]" />

            {/* Hero Image */}
            <div className="relative z-10 h-[480px] w-[300px] overflow-hidden rounded-[10rem] border-[8px] border-white bg-pink-100 shadow-2xl shadow-pink-500/20 sm:h-[570px] sm:w-[370px] lg:h-[620px] lg:w-[400px]">

              <img
                src="https://i.pinimg.com/1200x/65/69/3f/65693f5ebb2553e2114e24907c835328.jpg"
                alt="Colorful handcrafted ice cream cone"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="absolute bottom-8 left-0 z-20 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:bottom-12 sm:left-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                <ShoppingBag
                  size={21}
                  className="text-pink-600"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">
                  Freshly Made
                </p>

                <p className="text-xs text-gray-500">
                  Just for you
                </p>
              </div>
            </div>

            {/* Flavor Card */}
            <div
              data-aos="fade-down"
              data-aos-delay="700"
              className="absolute right-0 top-10 z-20 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md sm:right-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-pink-300" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-purple-300" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-yellow-200" />
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-900">
                    20+ Flavors
                  </p>

                  <p className="text-[10px] text-gray-500">
                    Explore our menu
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="900"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-400">
          Scroll to explore
        </span>

        <div className="h-8 w-[1px] animate-pulse bg-pink-400" />
      </div>
    </section>
    <Memory />
    <ClassicFavorites />
    <Categories />
    <SummerSpecial />
    <BestSellers />
    <Testimonials />
    </>
  )
}