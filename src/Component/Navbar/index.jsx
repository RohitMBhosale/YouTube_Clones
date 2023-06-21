import { Stack,Box } from "@mui/material";
import { FaYoutube } from "react-icons/fa";
import SearchBar from "../SearchBar";
import Theme from "../Theme";


export default function Navbar(){
    return(
       
         <>
         <Stack
         direction={"row"}
         alignItems="center"
         p={2}
         sx={{
          position:"sticky",
          background:'transparent',
          top:0,
          justifyContent:"space-between"
         }}
         >
          <Box display={'flex'} alignItems="center" >
              <FaYoutube color="red" size={45}/>
          </Box>
          <SearchBar/>
          <Theme/>
         </Stack>
         </>
       
    )
}