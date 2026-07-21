'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  ArrowRight,
  Gift,
  Sparkles,
  Sun,
} from 'lucide-react'

export default function SummerSpecial() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section
      id="special"
      className="relative overflow-hidden bg-white px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= MAIN BANNER ================= */}

        <div className="relative min-h-[500px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-600 via-rose-600 to-purple-700 shadow-2xl shadow-pink-500/20 md:min-h-[480px]">

          {/* ================= BACKGROUND DECORATIONS ================= */}

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl" />

          <div className="absolute right-[30%] top-10 h-4 w-4 rounded-full bg-yellow-300/70" />

          <div className="absolute bottom-16 left-[45%] h-3 w-3 rounded-full bg-white/40" />

          <div className="absolute right-20 top-16 h-20 w-20 rounded-full border border-white/10" />

          <div className="absolute bottom-10 right-40 h-12 w-12 rounded-full bg-yellow-300/20" />

          {/* ================= CONTENT GRID ================= */}

          <div className="relative z-10 grid h-full min-h-[500px] items-center gap-10 px-7 py-14 sm:px-12 md:min-h-[480px] md:grid-cols-2 md:px-16 lg:px-20">

            {/* ================= LEFT CONTENT ================= */}

            <div
              data-aos="fade-right"
              className="text-center md:text-left"
            >

              {/* Label */}

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <Sun
                  size={16}
                  className="text-yellow-300"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  Limited Time Offer
                </span>
              </div>

              {/* Heading */}

              <h2 className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-6xl lg:text-7xl">
                Summer
                <br />

                <span className="text-yellow-300">
                  Special!
                </span>
              </h2>

              {/* Description */}

              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-5 max-w-md text-base leading-7 text-white/85 sm:text-lg md:text-left"
              >
                Make your summer extra sweet with our delicious
                handcrafted ice cream flavors.
              </p>

              {/* Offer */}

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="mt-5 flex items-center justify-center gap-3 md:justify-start"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <Gift
                    size={20}
                    className="text-yellow-300"
                  />
                </div>

                <div>
                  <p className="text-lg font-bold text-white">
                    Buy One, Get One 50% Off
                  </p>

                  <p className="text-xs text-white/70">
                    Available for a limited time
                  </p>
                </div>
              </div>

              {/* CTA */}

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="mt-7"
              >
                <a
                  href="#products"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-pink-600 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:text-gray-900 hover:shadow-2xl"
                >
                  Shop Summer Flavors

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}

            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="relative hidden h-full min-h-[400px] items-center justify-center md:flex"
            >

              {/* Large Background Circle */}

              <div className="absolute h-[320px] w-[320px] rounded-full bg-white/10 blur-sm lg:h-[380px] lg:w-[380px]" />

              {/* Decorative Ring */}

              <div className="absolute h-[280px] w-[280px] rounded-full border border-white/20 lg:h-[340px] lg:w-[340px]" />

              {/* Image */}

              <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-[8px] border-white/30 shadow-2xl shadow-black/20 transition-transform duration-700 hover:scale-105 lg:h-80 lg:w-80">

                <img
                  src="https://i.pinimg.com/736x/e2/ae/69/e2ae697b5df58be541dad5c19f8b88d7.jpg"
                  alt="Colorful summer ice cream special"
                  className="h-full w-full object-cover"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Sparkle */}

              <div
                data-aos="zoom-in"
                data-aos-delay="600"
                className="absolute right-10 top-10 flex h-14 w-14 rotate-12 items-center justify-center rounded-2xl bg-yellow-300 text-pink-700 shadow-xl"
              >
                <Sparkles size={24} />
              </div>

              {/* Floating Offer Card */}

              <div
                data-aos="fade-up"
                data-aos-delay="700"
                className="absolute bottom-12 left-4 rounded-2xl border border-white/20 bg-white/15 px-5 py-4 shadow-xl backdrop-blur-md"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                  Today's Treat
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  50% Off
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ================= BOTTOM FEATURES ================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >

          <div className="flex items-center justify-center gap-3 rounded-2xl bg-pink-50 px-4 py-4">
            <Sun
              size={20}
              className="text-pink-600"
            />

            <span className="text-sm font-semibold text-gray-700">
              Perfect for Summer
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 rounded-2xl bg-rose-50 px-4 py-4">
            <Gift
              size={20}
              className="text-rose-600"
            />

            <span className="text-sm font-semibold text-gray-700">
              Special Offers
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 rounded-2xl bg-purple-50 px-4 py-4">
            <Sparkles
              size={20}
              className="text-purple-600"
            />

            <span className="text-sm font-semibold text-gray-700">
              Fresh Flavors
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}