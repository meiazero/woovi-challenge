import { ShieldCheckIcon } from 'lucide-react'
import { WooviLogo } from '../svg/woovi'

export function Footer() {
  return (
    <footer className="py-6">
      <p className="flex items-center justify-center font-medium text-sm [line-height:18px] text-zinc-400">
        <ShieldCheckIcon className="h-5 w-auto me-1" />
        Pagamento 100% seguro via:
        <WooviLogo className="h-4 w-auto ms-1" />
      </p>
    </footer>
  )
}
