interface Props {
    password: string
  }
  
  function getScore(pw: string): number {
    let score = 0
    if (pw.length >= 6) score++
    if (pw.length >= 10) score++
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++
    if (/[0-9]/.test(pw)) score++
    if (/[^A-Za-z0-9]/.test(pw)) score++
    return Math.min(score, 4)
  }
  
  const barColors: Record<number, string> = {
    1: 'bg-rose-400',
    2: 'bg-amber-400',
    3: 'bg-lime-500',
    4: 'bg-emerald-500',
  }
  
  const labels: Record<number, { text: string; color: string }> = {
    0: { text: 'En az 6 karakter, büyük harf ve rakam önerilir', color: 'text-ink-500' },
    1: { text: 'Çok zayıf — daha fazla karakter ekleyin', color: 'text-rose-600' },
    2: { text: 'Zayıf — büyük harf veya rakam ekleyin', color: 'text-amber-600' },
    3: { text: 'İyi — özel karakter eklerseniz daha güçlü', color: 'text-lime-600' },
    4: { text: 'Güçlü şifre ✓', color: 'text-emerald-600' },
  }
  
  export default function PasswordStrength({ password }: Props) {
    const score = password.length === 0 ? 0 : getScore(password)
    const { text, color } = labels[score]
    const fillColor = barColors[score] ?? 'bg-ink-100'
  
    return (
      <div className="mt-2">
        <div className="flex gap-1">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i < score ? fillColor : 'bg-ink-100'
              }`}
            />
          ))}
        </div>
        <p className={`text-[11px] mt-1 transition-colors ${color}`}>{text}</p>
      </div>
    )
  }