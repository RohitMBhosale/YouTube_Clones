import SideBar from "../../Component/Sidebar";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import Videos from "../../Component/Videos";

export default function WatchLater() {
  const { watchLaterVideos } = useSelector((state) => state);

  return (
    <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "100vh" },
            borderRight: "1px solid black",
            px: { sx: 0, md: 2 },
          }}
        >
          <SideBar />
        </Box>
        <Box
          p={2}
          sx={{
            height: "100vh",
            flex: 2,
          }}
        >
        <Videos searchResults ={watchLaterVideos} />
        </Box>
      </Stack>
    </>
  );
}
