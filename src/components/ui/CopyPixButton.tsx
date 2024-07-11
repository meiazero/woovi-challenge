"use client";

import { CopyIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";

interface CopyPixButtonProps {
  code: string;
}

export function CopyPixButton({ code }: CopyPixButtonProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    navigator.clipboard.writeText(code);
    setCopied(!copied);
    await new Promise(() => setTimeout(() => setCopied(copied), 1500));
  };

  return (
    <Button type="button" onClick={handleCopy}>
      {copied ? (
        <span>Código copiado!</span>
      ) : (
        <span>Clique para copiar QR CODE</span>
      )}

      <CopyIcon className="ms-3" />
    </Button>
  );
}
