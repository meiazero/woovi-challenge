"use client";

import { Chip } from "@mui/material";
import { useState } from "react";
import { ConfirmOptionCardModal } from "./ConfirmOptionCard";
import { OptionCard } from "./OptionCard";


interface InformationCard {
  parcela: string,
  valor: string,
  discount?: string,
  total: string,
  banner: boolean
  content?: string
}

const pixAVista: InformationCard = {
  parcela: "1x",
  valor: "30.500,00",
  total: "30.500,00",
  discount: "Ganhe 3% de cashback",
  banner: true,
  content: "🤑 300,00 de volta no seu Pix na hora"
}

const pixParcelado: Array<InformationCard> = [
  {
    parcela: "2x",
    valor: "15.300,00",
    total: "30.600,00",
    banner: false
  },
  {
    parcela: "3x",
    valor: "10.196,66",
    total: "30.620,00",
    banner: false
  },
  {
    parcela: "4x",
    valor: "7.725,00",
    total: "30.900,00",
    banner: true,
    content: "-3% de juros: Melhor opção de parcelamento"
  },
  {
    parcela: "5x",
    valor: "6.300,00",
    total: "31.500,00",
    banner: false
  },
  {
    parcela: "6x",
    valor: "5.283,33",
    total: "31699,98",
    banner: false
  },
  {
    parcela: "7x",
    valor: "4.542,85",
    total: "31.800,00",
    banner: false
  }
]

export function OptionFields() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelect = (parcela: string) => {
    setSelectedOption(parcela);
  }

  return (
    <div className='space-y-8'>
      <ConfirmOptionCardModal open={selectedOption !== ""} handleClose={() => setSelectedOption("")}  selectedOption={selectedOption} />
      <div className="relative">
        <Chip label="Pix" className="text-lg font-extrabold absolute left-5 -top-3 bg-zinc-200" />
        <OptionCard
          card={pixAVista}
          checked={selectedOption === pixAVista.parcela}
          onSelect={() => handleSelect(pixAVista.parcela)}
        />
      </div>

      <div className="relative">
      <Chip label="Pix parcelado" className="text-lg font-extrabold absolute left-5 -top-3 bg-zinc-200" />

        <div className="">
          {pixParcelado.map((pix, index) => (
            <OptionCard
              key={index}
              card={pix}
              checked={selectedOption === pix.parcela}
              onSelect={() => handleSelect(pix.parcela)}
              className='group-card'
            />
          ))}
        </div>
      </div>
    </div>
  )
};