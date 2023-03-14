import { MouseEventHandler } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export default function Guide({
  open,
  onClose,
  map,
  addressEn,
  addressJp,
}: GuideProp) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90vw",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 1,
        }}
      >
        <iframe
          src={map}
          width="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <Box sx={{ mt: 1 }}>
          <Box>Address</Box>
          <Box>{addressEn}</Box>
          {addressJp && <Box>{addressJp}</Box>}
        </Box>
      </Box>
    </Modal>
  );
}

type GuideProp = {
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
  map: string;
  addressEn: string;
  addressJp?: string;
};
