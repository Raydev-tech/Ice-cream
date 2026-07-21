'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  ArrowUp,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Send,
  IceCreamBowl,
  Globe,
} from 'lucide-react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-pink-700 via-pink-600 to-purple-700 text-white">

      {/* ================= BACKGROUND DECORATIONS ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">

        {/* ================= NEWSLETTER ================= */}

        <div
          data-aos="fade-up"
          className="border-b border-white/20 py-16 md:py-20"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">

            {/* Newsletter Content */}

            <div>
              <div className="mb-4 flex items-center gap-2">
                <IceCreamBowl
                  size={22}
                  className="text-pink-200"
                />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-100">
                  Stay Sweet
                </span>
              </div>

              <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">
                Get the Scoop
                <br />
                <span className="text-pink-200">
                  Delivered to You
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/75 md:text-base">
                Subscribe to our newsletter for exclusive flavors,
                special offers, and delicious updates delivered straight
                to your inbox.
              </p>
            </div>

            {/* Newsletter Form */}

            <div className="lg:justify-self-end">
              <form className="flex max-w-xl flex-col gap-3 sm:flex-row">

                <div className="relative flex-1">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-14 w-full rounded-full border border-white/20 bg-white px-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-white focus:ring-2 focus:ring-white/30"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex h-14 items-center justify-center gap-2 rounded-full bg-gray-900 px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-black hover:shadow-xl"
                >
                  Subscribe

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </form>

              <p className="mt-3 text-xs text-white/50">
                No spam. Just sweet updates and exclusive offers.
              </p>
            </div>

          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}

          <div data-aos="fade-up">

            <a
              href="#"
              className="mb-5 inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-pink-600 shadow-lg">
                <IceCreamBowl size={22} />
              </div>

              <span className="font-serif text-2xl font-bold">
                So&apos;Rah
              </span>
            </a>

            <p className="max-w-xs text-sm leading-7 text-white/70">
              Crafting delicious moments, one scoop at a time.
              Fresh ingredients, unforgettable flavors, and a whole
              lot of sweetness since 2020.
            </p>

            {/* Social Icons */}

            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-pink-600"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-pink-600"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-pink-600"
              >
                <FaTwitter size={18} />
              </a>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}

          <div data-aos="fade-up" data-aos-delay="100">

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-white/70">

              <li>
                <a
                  href="#home"
                  className="transition-colors hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="transition-colors hover:text-white"
                >
                  Our Menu
                </a>
              </li>

              <li>
                <a
                  href="#categories"
                  className="transition-colors hover:text-white"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="transition-colors hover:text-white"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#instagram"
                  className="transition-colors hover:text-white"
                >
                  Instagram
                </a>
              </li>

            </ul>
          </div>

          {/* ================= CUSTOMER SERVICE ================= */}

          <div data-aos="fade-up" data-aos-delay="200">

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
              Customer Service
            </h3>

            <ul className="space-y-3 text-sm text-white/70">

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Shipping Information
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Frequently Asked Questions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Terms & Conditions
                </a>
              </li>

            </ul>
          </div>

          {/* ================= CONTACT ================= */}

          <div data-aos="fade-up" data-aos-delay="300">

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
              Get In Touch
            </h3>

            <div className="space-y-5 text-sm text-white/70">

              {/* Phone */}

              <a
                href="tel:+15551234567"
                className="group flex items-start gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white group-hover:text-pink-600">
                  <Phone size={16} />
                </div>

                <span className="pt-2 transition-colors group-hover:text-white">
                  (555) 123-4567
                </span>
              </a>

              {/* Email */}

              <a
                href="mailto:hello@sorahcream.com"
                className="group flex items-start gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white group-hover:text-pink-600">
                  <Mail size={16} />
                </div>

                <span className="pt-2 transition-colors group-hover:text-white">
                  hello@sorahcream.com
                </span>
              </a>

              {/* Location */}

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={16} />
                </div>

                <span className="pt-2 leading-6">
                  123 Sweet Street,
                  <br />
                  Dessert City, SC 12345
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM FOOTER ================= */}

        <div className="border-t border-white/20 py-7">

          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

            {/* Copyright */}

            <p className="text-center text-xs text-white/50 md:text-left">
              © {new Date().getFullYear()} So&apos;Rah Ice Cream.
              All rights reserved.
            </p>

            {/* Bottom Links */}

            <div className="flex items-center gap-6 text-xs text-white/50">

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Privacy
              </a>

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Terms
              </a>

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Cookies
              </a>

            </div>

            {/* Back To Top */}

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-pink-600"
            >
              <ArrowUp
                size={18}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            </button>

          </div>

        </div>

      </div>
    </footer>
  )
}