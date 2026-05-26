'use client'

import { useState, useRef, useEffect } from 'react'
import { Eye, Pencil, MoreVertical, ExternalLink, UserX, UserCheck, Trash2 } from 'lucide-react'
import type { Specialist } from '../types'
import SpecialistViewModal from './SpecialistViewModal'

interface Props {
  specialist: Specialist
  onEdit: (specialist: Specialist) => void
  onDelete: (id: string) => void
  onStatusChange: (id: string, status: Specialist['status']) => void
}

const statusColors: Record<Specialist['status'], string> = {
  Aktif: 'bg-emerald-50 text-emerald-700',
  İzinli: 'bg-amber-50 text-amber-700',
  Pasif: 'bg-ink-100 text-ink-600',
}

export default function SpecialistRow({ specialist: s, onEdit, onDelete, onStatusChange }: Props) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const fillColor = s.fillRate > 80 ? 'bg-emerald-500' : s.fillRate > 60 ? 'bg-brand-500' : 'bg-amber-500'

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <tr className="hover:bg-ink-50/40 transition">
        <td className="px-4 py-3">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg ${s.bgColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
              {s.initials}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold truncate text-ink-900">{s.name}</div>
              <div className="text-xs text-ink-500 truncate">rezervio.com/novapsy-klinik/{s.initials.toLowerCase()}</div>
            </div>
          </div>
        </td>
        <td className="px-4 py-3 text-xs text-ink-700">{s.specialty}</td>
        <td className="px-4 py-3 text-sm font-semibold text-ink-900">{s.todayCount}</td>
        <td className="px-4 py-3 text-sm font-bold text-brand-700">{s.mrr}</td>
        <td className="px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-ink-100 rounded-full overflow-hidden min-w-[60px]">
              <div className={`h-full ${fillColor} rounded-full`} style={{ width: `${s.fillRate}%` }} />
            </div>
            <span className="text-xs font-semibold text-ink-900">{s.fillRate}%</span>
          </div>
        </td>
        <td className="px-4 py-3">
          <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${statusColors[s.status]}`}>
            {s.status}
          </span>
        </td>
        <td className="px-4 py-3 text-right">
          <div className="flex items-center justify-end gap-1">

            <button
              onClick={() => setShowViewModal(true)}
              className="w-7 h-7 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 cursor-pointer transition"
              title="Profili gör"
            >
              <Eye className="w-3.5 h-3.5" strokeWidth={2} />
            </button>

            <button
              onClick={() => onEdit(s)}
              className="w-7 h-7 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 cursor-pointer transition"
              title="Düzenle"
            >
              <Pencil className="w-3.5 h-3.5" strokeWidth={2} />
            </button>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown((p) => !p)}
                className="w-7 h-7 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 cursor-pointer transition"
                title="Daha fazla"
              >
                <MoreVertical className="w-3.5 h-3.5" strokeWidth={2} />
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-8 w-48 bg-white rounded-xl border border-ink-100 shadow-[0_8px_30px_-4px_rgba(15,23,42,0.15)] z-50 overflow-hidden py-1">
                 

                  {s.status !== 'İzinli' ? (
                    <button
                      onClick={() => { onStatusChange(s.initials, 'İzinli'); setShowDropdown(false) }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-ink-700 hover:bg-ink-50 transition cursor-pointer text-left"
                    >
                      <UserX className="w-3.5 h-3.5 text-amber-500" strokeWidth={2} />
                      İzne Gönder
                    </button>
                  ) : (
                    <button
                      onClick={() => { onStatusChange(s.initials, 'Aktif'); setShowDropdown(false) }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-ink-700 hover:bg-ink-50 transition cursor-pointer text-left"
                    >
                      <UserCheck className="w-3.5 h-3.5 text-emerald-500" strokeWidth={2} />
                      İzinden Çıkar
                    </button>
                  )}

                  {s.status !== 'Pasif' ? (
                    <button
                      onClick={() => { onStatusChange(s.initials, 'Pasif'); setShowDropdown(false) }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-ink-700 hover:bg-ink-50 transition cursor-pointer text-left"
                    >
                      <UserX className="w-3.5 h-3.5 text-ink-400" strokeWidth={2} />
                      Pasif Yap
                    </button>
                  ) : (
                    <button
                      onClick={() => { onStatusChange(s.initials, 'Aktif'); setShowDropdown(false) }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-ink-700 hover:bg-ink-50 transition cursor-pointer text-left"
                    >
                      <UserCheck className="w-3.5 h-3.5 text-emerald-500" strokeWidth={2} />
                      Aktif Yap
                    </button>
                  )}

                  <div className="border-t border-ink-100 mt-1 pt-1">
                    <button
                      onClick={() => { onDelete(s.initials); setShowDropdown(false) }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 transition cursor-pointer text-left"
                    >
                      <Trash2 className="w-3.5 h-3.5" strokeWidth={2} />
                      Uzmandan Çıkar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </td>
      </tr>

      {showViewModal && (
        <SpecialistViewModal
          specialist={s}
          onClose={() => setShowViewModal(false)}
          onEdit={() => { setShowViewModal(false); onEdit(s) }}
        />
      )}
    </>
  )
}