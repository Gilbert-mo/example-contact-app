import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";

import { useMessajeStore } from "../../store/messajeStore";
import { Snackbar } from "@mui/material";

function Messaje() {
  const { onClickShow } = useMessajeStore();
  const { messaje } = useMessajeStore();
  const { show } = useMessajeStore();

  return (
    // <section className="fixed bottom-4 left-3 z-10 w-full">
    //   <Box sx={{ width: "50%" }} spacing={2}>
    //     <Collapse in={show}>
    //       <Alert
    //         onClose={() => {
    //           onClickShow();
    //         }}
    //       >
    //         {`${messaje[0]}`}
    //       </Alert>
    //     </Collapse>
    //   </Box>
    // </section>

    <Snackbar
      onClose={() => {
        onClickShow();
      }}
      open={show}
      autoHideDuration={3000}
    >
      <Alert
        onClose={() => {
          onClickShow();
        }}
      >{`${messaje.at(-1)}`}</Alert>
    </Snackbar>
  );
}

export default Messaje;
