interface Props {
    label: string
    selected: boolean
    onClick: () => void
  }
  
  export default function SpecChip({ label, selected, onClick }: Props) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`inline-flex items-center justify-center px-3 py-2 rounded-xl text-xs font-medium border transition cursor-pointer ${
          selected
            ? 'bg-brand-600 text-white border-brand-600 shadow-[0_6px_14px_-4px_rgba(79,70,229,0.45)]'
            : 'border-ink-200 bg-white hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700'
        }`}
      >
        {label}
      </button>
    )
  }