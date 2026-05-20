const tags = ['BDT', 'EMDR', 'Kaygı Bozuklukları', 'İlişki Danışmanlığı', 'Travma Sonrası Stres']

export default function ProfileTags() {
  return (
    <div className="mt-4 flex flex-wrap gap-1.5 justify-center sm:justify-start">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-white border border-ink-200 text-ink-700"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}