'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  Heart,
  MessageCircle,
  Instagram,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

const instagramPosts = [
  {
    id: 1,
    image: '/images/instagram-1.jpg',
    likes: '245',
    comments: '28',
  },
  {
    id: 2,
    image: '/images/instagram-2.jpg',
    likes: '312',
    comments: '34',
  },
  {
    id: 3,
    image: '/images/instagram-3.jpg',
    likes: '189',
    comments: '21',
  },
  {
    id: 4,
    image: '/images/instagram-4.jpg',
    likes: '421',
    comments: '46',
  },
]

export default function InstagramFeed() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section
      id="instagram"
      className="relative overflow-hidden bg-white px-4 py-20 md:py-28"
    >
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-pink-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
        >
          {/* Instagram Badge */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2">
            <Instagram
              size={15}
              className="text-pink-600"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              Join Our Community
            </span>
          </div>

          {/* Heading */}

          <h2 className="font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Follow Us on{' '}
            <span className="text-pink-600">
              Instagram
            </span>
          </h2>

          {/* Instagram Username */}

          <a
            href="https://instagram.com/sorahicecream"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-gray-600 transition-colors hover:text-pink-600"
          >
            <Instagram size={18} />

            @sorahicecream

            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* ================= INSTAGRAM GRID ================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href="https://instagram.com/sorahicecream"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative block h-72 overflow-hidden rounded-3xl bg-pink-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20"
            >

              {/* ================= IMAGE ================= */}

              <img
                src={post.image}
                alt={`SoraH Ice Cream Instagram post ${post.id}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* ================= TOP INSTAGRAM ICON ================= */}

              <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-[-8px] items-center justify-center rounded-full bg-white/90 text-pink-600 opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Instagram size={18} />
              </div>

              {/* ================= HOVER CONTENT ================= */}

              <div className="absolute inset-x-0 bottom-0 flex translate-y-4 items-center justify-center gap-6 p-6 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                {/* Likes */}

                <div className="flex items-center gap-2">
                  <Heart
                    size={20}
                    className="fill-white"
                  />

                  <span className="text-sm font-semibold">
                    {post.likes}
                  </span>
                </div>

                {/* Comments */}

                <div className="flex items-center gap-2">
                  <MessageCircle size={20} />

                  <span className="text-sm font-semibold">
                    {post.comments}
                  </span>
                </div>

              </div>

            </a>
          ))}

        </div>

        {/* ================= CTA ================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-12 text-center"
        >
          <a
            href="https://instagram.com/sorahicecream"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/30"
          >
            <Instagram size={18} />

            Follow @sorahicecream

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* ================= COMMUNITY MESSAGE ================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-gray-500"
        >
          <Sparkles
            size={16}
            className="text-pink-500"
          />

          <span>
            Tag us in your sweetest moments for a chance to be featured!
          </span>

          <Sparkles
            size={16}
            className="text-purple-500"
          />
        </div>

      </div>
    </section>
  )
}