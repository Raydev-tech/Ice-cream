'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  ArrowRight,
  Heart,
  Sparkles,
  Star,
} from 'lucide-react'

export default function Memory() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-4 py-20 md:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-pink-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* ================= LEFT IMAGE ================= */}

          <div
            data-aos="fade-right"
            className="order-2 flex justify-center lg:order-1"
          >
            <div className="relative">

              {/* Decorative Circle */}
              <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full border-[12px] border-pink-100" />

              {/* Decorative Dots */}
              <div className="absolute -bottom-8 -right-8 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, index) => (
                  <div
                    key={index}
                    className="h-2 w-2 rounded-full bg-pink-300"
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className="relative h-[420px] w-[300px] overflow-hidden rounded-[8rem] border-8 border-white bg-pink-100 shadow-2xl shadow-pink-500/10 sm:h-[500px] sm:w-[360px]">

                <img
                  src="https://i.pinimg.com/1200x/69/90/dd/6990dd5e6b915aa4eb35463defa84fb5.jpg"
                  alt="Happy girl enjoying ice cream"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating Rating Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="absolute -bottom-6 -left-8 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:-left-12"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                  <Heart
                    size={21}
                    className="fill-pink-600 text-pink-600"
                  />
                </div>

                <div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={12}
                        className="fill-pink-500 text-pink-500"
                      />
                    ))}
                  </div>

                  <p className="mt-1 text-xs font-semibold text-gray-700">
                    Made with love
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div
            data-aos="fade-left"
            className="order-1 text-center lg:order-2 lg:text-left"
          >

            {/* Small Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2">
              <Sparkles
                size={15}
                className="text-pink-600"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
                A Taste of Nostalgia
              </span>
            </div>

            {/* Heading */}
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl"
            >
              Relive the Sweet
              <br />

              <span className="text-pink-600">
                Memories
              </span>

              <br />

              of Classic Ice Creams
            </h2>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0"
            >
              Experience the joy and nostalgia of classic ice cream flavors
              that have been perfected over generations. Every scoop brings
              back cherished memories and creates new moments worth sharing.
            </p>

            {/* Features */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              <div className="flex items-center gap-3 rounded-2xl bg-pink-50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <Heart
                    size={18}
                    className="text-pink-600"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Made with Love
                  </p>

                  <p className="text-xs text-gray-500">
                    Crafted with care
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-rose-50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <Sparkles
                    size={18}
                    className="text-rose-600"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Premium Flavors
                  </p>

                  <p className="text-xs text-gray-500">
                    Quality ingredients
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-8"
            >
              <a
                href="#products"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/30"
              >
                Discover Our Story

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Small Bottom Text */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
            >
              <div className="h-px w-10 bg-pink-300" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Since 1998
              </p>

              <div className="h-px w-10 bg-pink-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}