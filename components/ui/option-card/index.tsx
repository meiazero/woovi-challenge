"use client";

import { cn } from "@/utils/cn";
import { useState } from "react";
import { OptionCardHeader } from "./card-header";
import OptionCardPromotionBanner from "./promotion-banner";

interface OptionCardProps {
  card: {
    parcela: string,
    valor: string,
    discount?: string,
    total: string,
    banner: boolean
    content?: string
  },
  className?: string
}

export function OptionCard({ card, className }: OptionCardProps) {
  const [selected, setSelected] = useState<boolean>(false);

  const toogleSelected = () => {
    setSelected(!selected);
  }

  return (
    <div className={cn("rounded-[10px] border-2 border-zinc-200", selected && "selected", className)} onClick={toogleSelected}>
      <div className='p-5'>
        <OptionCardHeader parcela={card.parcela} valor={card.valor} selected={selected} />

        {card.discount ?
          <p className="text-[#03D69D] text-base">
            {card.discount}
          </p>
          : <p className="text-zinc-400 text-base font-semibold">
            Total: {card.total}
          </p>
        }

        {card.banner && (
          <OptionCardPromotionBanner content={card.content!} />
        )}
      </div>
    </div>
  )
};