import { IconButton } from "@mui/material";
import ToggleOn from "@mui/icons-material/ToggleOn";
import ToggleOff from "@mui/icons-material/ToggleOff";

export default function Theme() {
  return (
    <>
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "#000",
        }}
        aria-label="Toogle Theme"
      >
        <ToggleOn />
        <ToggleOff />
      </IconButton>
    </>
  );
}
