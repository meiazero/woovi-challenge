import { Box, Button, Modal } from "@mui/material";
import { ButtonLink } from "./Button";

interface ConfirmOptionCardModalProps {
  open: boolean;
  handleClose: () => void;
  selectedOption: string;
}

export function ConfirmOptionCardModal({
  handleClose,
  open,
  selectedOption,
}: ConfirmOptionCardModalProps) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2 className="text-xl">
          Você escolheu a opção:{" "}
          <span className="font-extrabold">{selectedOption}</span>
        </h2>

        <div className="flex flex-row items-center justify-between pt-10">
          <Button onClick={handleClose}>Cancelar</Button>
          <ButtonLink href="/pix" className="w-fit">
            Confirmar
          </ButtonLink>
        </div>
      </Box>
    </Modal>
  );
}
