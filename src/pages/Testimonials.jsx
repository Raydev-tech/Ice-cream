'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  Quote,
  Star,
  Heart,
  Sparkles,
} from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah',
    title: 'Ice Cream Lover',
    image: 'https://i.pinimg.com/736x/25/04/b9/2504b9c68730524263de00e4995e87d0.jpg',
    review:
      'The best ice cream experience I have ever had. Premium quality, amazing flavors, and wonderful service. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mike',
    title: 'Regular Customer',
    image: 'https://i.pinimg.com/736x/57/23/35/5723351908c4b7b8647361c6c28dbc45.jpg',
    review:
      'I keep coming back because the flavors are incredible. The chocolate and strawberry options are absolutely delicious.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma',
    title: 'Sweet Tooth',
    image: 'https://i.pinimg.com/736x/3a/9f/8c/3a9f8c8e2b4d4c1e1e1e1e1e1e1e1e1e.jpg',
    review:
      'Everything tastes fresh and delicious. You can really tell that they care about the quality of their ingredients.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James',
    title: 'Dessert Fan',
    image: 'https://i.pinimg.com/736x/4b/0f/9d/4b0f9d8e2b4d4c1e1e1e1e1e1e1e1e1e.jpg',
    review:
      'Amazing flavors, beautiful presentation, and friendly service. This is easily my favorite place for ice cream.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa',
    title: 'Mom',
    image: 'https://i.pinimg.com/736x/6c/1e/0f/6c1e0f8e2b4d4c1e1e1e1e1e1e1e1e1e.jpg',
    review:
      'My kids absolutely love coming here. There are so many flavors to choose from, and everything tastes amazing.',
    rating: 5,
  },
  {
    id: 6,
    name: 'David',
    title: 'Food Critic',
    image: 'https://i.pinimg.com/736x/7d/2f/1g/7d2f1g8e2b4d4c1e1e1e1e1e1e1e1e1e.jpg',
    review:
      'A truly impressive ice cream experience. The balance of flavor and texture is outstanding. Definitely worth visiting.',
    rating: 5,
  },
]

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-pink-50/50 via-white to-pink-50/30 px-4 py-20 md:py-28"
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
          {/* Label */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2">
            <Heart
              size={15}
              className="fill-pink-600 text-pink-600"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              Customer Love
            </span>
          </div>

          {/* Heading */}

          <h2 className="font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Hear from Our{' '}
            <span className="text-pink-600">
              Happy
            </span>

            <br />

            Ice Cream Lovers
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            See why thousands of customers keep coming back
            for another delicious scoop.
          </p>
        </div>

        {/* ================= FEATURED QUOTE ================= */}

        <div
          data-aos="zoom-in"
          className="relative mx-auto mb-16 max-w-4xl overflow-hidden rounded-[2rem] border border-pink-100 bg-white p-8 text-center shadow-xl shadow-pink-500/5 md:p-12"
        >
          {/* Quote Icon */}

          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-100">
            <Quote
              size={25}
              className="text-pink-600"
            />
          </div>

          {/* Quote */}

          <blockquote className="font-serif text-xl font-medium leading-9 text-gray-800 md:text-2xl md:leading-10">
            "The best ice cream experience I've ever had.
            Premium quality, amazing flavors, and wonderful service.
            Highly recommended!"
          </blockquote>

          {/* Stars */}

          <div className="mt-6 flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={17}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Decorative Sparkles */}

          <Sparkles
            size={25}
            className="absolute left-8 top-8 text-pink-200"
          />

          <Sparkles
            size={20}
            className="absolute bottom-8 right-8 text-purple-200"
          />
        </div>

        {/* ================= TESTIMONIAL CARDS ================= */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((person, index) => (
            <div
              key={person.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10"
            >

              {/* Quote Icon */}

              <div className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-pink-50">
                <Quote
                  size={15}
                  className="text-pink-500"
                />
              </div>

              {/* Customer Info */}

              <div className="flex items-center gap-4">

                {/* Avatar */}

                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-4 border-pink-100">
                  <img
                    src={person.image}
                    alt={`${person.name} profile`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Name */}

                <div>
                  <h3 className="font-bold text-gray-900">
                    {person.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {person.title}
                  </p>

                  {/* Rating */}

                  <div className="mt-2 flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={12}
                        className={
                          star <= person.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review */}

              <p className="mt-6 text-sm leading-7 text-gray-600">
                "{person.review}"
              </p>

              {/* Bottom Accent */}

              <div className="mt-6 h-1 w-10 rounded-full bg-pink-500 transition-all duration-500 group-hover:w-20" />

            </div>
          ))}

        </div>

        {/* ================= BOTTOM RATING ================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <div className="flex items-center gap-2">

            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <span className="font-bold text-gray-900">
              4.9/5
            </span>

          </div>

          <div className="hidden h-5 w-px bg-gray-300 sm:block" />

          <p className="text-sm text-gray-500">
            Loved by thousands of happy customers
          </p>
        </div>

      </div>
    </section>
  )
}