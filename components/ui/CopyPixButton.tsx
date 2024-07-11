"use client"

import { CopyIcon } from "lucide-react";
import { useState } from "react";

interface CopyPixButtonProps {
  code: string
}

export function CopyPixButton ({code}: CopyPixButtonProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    navigator.clipboard.writeText(code);
    setCopied(!copied);
    await new Promise(() => setTimeout(() => setCopied(copied), 1500));
  };

  return (
    <button type="button" className="bg-[#133A6F] text-zinc-50   px-5 py-2 rounded-md flex items-center justify-center font-semibold" onClick={handleCopy}>
      {copied ? (
        <span>Código copiado!</span>
      ) : (
        <span>
          Clique para copiar QR CODE
        </span>
      )}

    <CopyIcon className="ms-3" />
  </button>
  )
};