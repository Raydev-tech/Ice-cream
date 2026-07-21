'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  Menu,
  Search,
  ShoppingBag,
  X,
  ChevronDown,
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ]

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header
      data-aos="fade-down"
      className="fixed top-0 left-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* ================= LOGO ================= */}
          <a
            href="#home"
            className="group flex items-center gap-2"
            onClick={closeMenu}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-700 text-white shadow-lg shadow-pink-500/20 transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif text-xl font-bold">
                S
              </span>
            </div>

            <div className="leading-none">
              <h1 className="font-serif text-2xl font-bold tracking-tight text-gray-900">
                So<span className="text-pink-600">'Rah</span>
              </h1>

              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-gray-400">
                Beauty & Lifestyle
              </p>
            </div>
          </a>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                data-aos="fade-down"
                data-aos-delay={index * 100}
                className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                  index === 0
                    ? 'text-pink-600'
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-pink-600 transition-all duration-300 ${
                    index === 0
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* ================= RIGHT ACTIONS ================= */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Search */}
            <button
              aria-label="Search"
              className="group flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-all duration-300 hover:bg-pink-50 hover:text-pink-600"
            >
              <Search
                size={20}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </button>

            {/* Shopping Bag */}
            <button
              aria-label="Shopping bag"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-all duration-300 hover:bg-pink-50 hover:text-pink-600"
            >
              <ShoppingBag
                size={20}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              {/* Cart Count */}
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-pink-600 px-1 text-[9px] font-bold text-white">
                0
              </span>
            </button>

            {/* Order Button */}
            <a
              href="#products"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/30 sm:flex"
            >
              Order Now
              <ChevronDown
                size={16}
                className="-rotate-90"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-all duration-300 hover:bg-pink-50 hover:text-pink-600 md:hidden"
            >
              {isOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
            isOpen
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="border-t border-gray-100 py-5">

            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-pink-50 text-pink-600'
                      : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Order Button */}
            <a
              href="#products"
              onClick={closeMenu}
              className="mt-4 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:shadow-xl"
            >
              Order Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}