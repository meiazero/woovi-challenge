import Link from 'next/link'
import { WooviLogo } from '../svg/woovi'

export function Header() {
  return (
    <div className="py-9">
      <Link href="/" >
        <WooviLogo className="h-9 w-auto text-primary mx-auto" />
      </Link>
    </div>
  )
}
