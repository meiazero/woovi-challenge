
import { Accordion, AccordionDetails, AccordionSummary, Divider, MenuItem, OutlinedInput, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { CheckCircle2Icon, ChevronUpIcon, CircleIcon } from 'lucide-react';

export default function CreditPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-extrabold text-center">João, pague o restante em 1x no cartão</h1>
      <div className="space-y-6">
        <form className='flex flex-col gap-4' autoComplete='off'>
          <FormControl variant='outlined'>
            <InputLabel htmlFor="component-outlined">
              Nome Completo
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Nome Completo"
              fullWidth

            />
          </FormControl>

          <FormControl variant='outlined'>
            <InputLabel htmlFor="component-outlined">
              CPF
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="CPF"
              fullWidth

            />
          </FormControl>

          <FormControl variant='outlined'>
            <InputLabel htmlFor="component-outlined">
              Número do cartão
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Número do cartão"
              fullWidth

            />
          </FormControl>

          <div className="flex flex-row w-full items-center justify-center gap-4">
          <FormControl variant='outlined'>
            <InputLabel htmlFor="component-outlined">
              Vencimento
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Vencimento"
              fullWidth

            />
          </FormControl>
          <FormControl variant='outlined'>
            <InputLabel htmlFor="component-outlined">
              CVV
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="CVV"
              fullWidth

            />
          </FormControl>
          </div>



          <FormControl variant="outlined" className='w-full'>
            <InputLabel>Parcelas</InputLabel>
            <Select>
              <MenuItem value="1x">1x de R$ 15.300,00</MenuItem>
            </Select>
          </FormControl>
        </form>

        <button type="button" className="bg-[#133A6F] text-zinc-50  px-5 py-2 rounded-md font-semibold w-full">
          Pagar
        </button>

        <div className="space-y-px font-semibold text-center">
          <p className="text-sm text-zinc-400">Prazo de pagamento: </p>
          <p className="text-sm font-extrabold text-zinc-700">15/12/2021 - 08:17</p>
        </div>
      </div>

      <div className="space-y-4 relative">
        <div className="flex flex-row items-center justify-between gap-5">
          {/* circle */}
          <CheckCircle2Icon className="size-4 h-auto fill-[#03D69D] text-zinc-50" />
          <div className="flex flex-1 flex-row justify-between text-lg text-zinc-700">
            <p className="font-semibold ">1ª entrada no Pix</p>
            <p className="font-extrabold">R$ 15.300,00</p>
          </div>
        </div>
        <div className="absolute bg-zinc-300 h-7 w-[2px] top-1.5 left-[7px]" />

        <div className="flex flex-row items-center justify-between gap-5">
          {/* circle */}
          <CircleIcon className="size-4 h-auto text-[#03D69D]" />
          <div className="flex flex-1 flex-row justify-between text-lg text-zinc-700">
            <p className="font-semibold ">2ª no cartão</p>
            <p className="font-extrabold">R$ 15.300,00</p>
          </div>
        </div>
      </div>

      <Divider orientation="horizontal" />

      <div className="flex flex-row items-center justify-between font-semibold">
        <p className="text-sm">CET: 0,5%</p>
        <p className="text-xl">
          Total: R$ 31.500,00
        </p>
      </div>

      <Divider orientation="horizontal" />

      <Accordion>
          <AccordionSummary
            expandIcon={<ChevronUpIcon />}
            className="font-extrabold"
            aria-controls="panel-content"
          >
            como funciona?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

      <Divider orientation="horizontal" />

      <div className="spce-y-px text-center">
        <p className="font-semibold text-zinc-400">Identificador:</p>
        <p className="font-extrabold text-zinc-700">
          2c1b951f356c4680b13ba1c9fc889c47
        </p>
      </div>
    </div>
  )
}