import { professions } from './profession-list'
import ProfessionCard from './ProfessionCard'
import MoreSectorsCard from './MoreSectorsCard'

export default function WhoUsesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-600">
          Kimler kullanıyor
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight text-ink-900">
          Her uzmanlık için.
        </h2>
        <p className="mt-3 text-ink-600">
          Hangi sektörde olursan ol, bireysel ya da kurumsal — paketini ihtiyacına göre seç.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {professions.map((profession) => (
          <ProfessionCard key={profession.title} profession={profession} />
        ))}
        <MoreSectorsCard />
      </div>
    </section>
  )
}