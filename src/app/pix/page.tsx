import { ButtonLink } from "@/components/ui/Button";
import { CopyPixButton } from "@/components/ui/CopyPixButton";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Divider,
} from "@mui/material";
import { ChevronUpIcon, Circle } from "lucide-react";

const code =
  "00020126360014BR.GOV.BCB.PIX0114+5599999999999520400005303986540815300.005802BR5908John Doe6009Sao Paulo62090505woovi63042310";

export default function PixPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-extrabold text-center">
        João, pague a entrada de R$ 15.300,00 pelo Pix
      </h1>
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center gap-5">
          <Card
            className="border-2 size-[350px] border-primary rounded-[10px] flex items-center justify-center"
            sx={{
              boxShadow: 0,
            }}
          >
            <img src="/qrcode.png" alt="Qrcode de pagamento" />
          </Card>
          <CopyPixButton code={code} />

          <div className="space-y-px font-semibold">
            <p className="text-sm text-zinc-400">Prazo de pagamento: </p>
            <p className="text-sm font-extrabold text-zinc-700">
              15/12/2021 - 08:17
            </p>
          </div>
          <ButtonLink href="/credit" className="text-center">
            Continuar
          </ButtonLink>
        </div>

        <div className="space-y-4 relative">
          <div className="flex flex-row items-center justify-between gap-5">
            {/* circle */}
            <Circle className="size-4 h-auto text-primary" />
            <div className="flex flex-1 flex-row justify-between text-lg text-zinc-700">
              <p className="font-semibold ">1ª entrada no Pix</p>
              <p className="font-extrabold">R$ 15.300,00</p>
            </div>
          </div>

          <div className="absolute bg-zinc-300 h-7 w-[2px] top-1.5 left-[7px]" />

          <div className="flex flex-row items-center justify-between gap-5">
            {/* circle */}
            <Circle className="size-4 h-auto text-zinc-300" />
            <div className="flex flex-1 flex-row justify-between text-lg text-zinc-700">
              <p className="font-semibold ">2ª no cartão</p>
              <p className="font-extrabold">R$ 15.300,00</p>
            </div>
          </div>
        </div>

        <Divider orientation="horizontal" />

        <div className="flex flex-row items-center justify-between font-semibold">
          <p className="text-sm">CET: 0,5%</p>
          <p className="text-xl">Total: R$ 30.600,00</p>
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
          <AccordionDetails className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <div className="spce-y-px text-center">
          <p className="font-semibold text-zinc-400">Identificador:</p>
          <p className="font-extrabold text-zinc-700">
            2c1b951f356c4680b13ba1c9fc889c47
          </p>
        </div>
      </div>
    </div>
  );
}