import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0 ">
      <Image
        src="/rezervio-logo.png"
        alt="Rezervio"
        width={160}
        height={48}
        priority
      />
    </Link>
  )
}
