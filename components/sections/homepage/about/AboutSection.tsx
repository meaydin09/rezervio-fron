'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { aboutContent } from './about-content'

const COLLAPSED_HEIGHT = 220

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [maxHeight, setMaxHeight] = useState(COLLAPSED_HEIGHT)
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = contentRef.current
    if (!el) return

    if (isExpanded) {
      setMaxHeight(el.scrollHeight)
    } else {
      setMaxHeight(COLLAPSED_HEIGHT)
    }
  }, [isExpanded])

  const toggleSeo = () => {
    if (isExpanded) {
      setIsExpanded(false)
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      setIsExpanded(true)
    }
  }

  return (
    <section id="about" className="bg-white border-t border-ink-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-600">
              Hakkımızda
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-ink-900">
              {aboutContent.title}
            </h2>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-ink-100 text-ink-600">
            {aboutContent.readTime}
          </span>
        </div>

        <div className="relative mt-6">
          <div
            ref={contentRef}
            style={{ maxHeight }}
            className={`prose-seo text-sm text-ink-600 leading-relaxed overflow-hidden ${
              isExpanded
                ? 'transition-[max-height] duration-500 ease-out'
                : 'transition-none'
            }`}
          >
            {aboutContent.paragraphs.map((p, i) => (
              <div key={i}>
                {p.heading && (
                  <h3 className="text-base font-semibold text-ink-900 pt-4 first:pt-0">{p.heading}</h3>
                )}
                <p>{p.text}</p>
              </div>
            ))}
            <p className="pt-4 text-ink-400 text-xs">{aboutContent.footer}</p>
          </div>

          <div
            className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none transition-opacity duration-500 ${
              isExpanded ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={toggleSeo}
            className="group cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-ink-200 hover:border-brand-300 hover:bg-brand-50 text-ink-700 hover:text-brand-700 font-semibold text-sm rounded-xl shadow-[0_2px_8px_-2px_rgba(15,23,42,0.08)] transition"
          >
            {isExpanded ? 'Daha Az Göster' : 'Tamamını Oku'}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              strokeWidth={2.2}
            />
          </button>
        </div>

      </div>
    </section>
  )
}
