import { Flag } from '@/components/svg/flag'

interface OptionCardPromotionBannerProps {
  content: string
}


export default function OptionCardPromotionBanner({ content }: OptionCardPromotionBannerProps) {
  return (
    <div className="pt-1 relative">
      <Flag className='text-[#133A6F] w-full h-auto' />
      <p className='font-semibold text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-full ps-2 pt-1'>
        {content}
      </p>
    </div>
  )
}
