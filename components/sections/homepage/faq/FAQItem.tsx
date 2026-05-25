'use client'

import { ChevronDown } from 'lucide-react'
import type { FAQItem } from './types'

interface Props {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

export default function FAQItem({ item, isOpen, onToggle }: Props) {
  return (
    <div className="bg-white rounded-xl border border-ink-100 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left cursor-pointer"
      >
        <span className="text-sm sm:text-base font-semibold text-ink-900 flex-1">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-ink-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          strokeWidth={2}
        />
      </button>

      {isOpen && (
        <div className="px-4 sm:px-5 pb-5 text-sm text-ink-600 leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  )
}
