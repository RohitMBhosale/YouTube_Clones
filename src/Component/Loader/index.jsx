import { Box, CircularProgress, Stack } from "@mui/material"


export default function Loader(){
    return(
       <>
         <Box minHeight={'90vh'}>
            <Stack  direction={'row'} justifyContent={'center'} alignItems={'center'}>
                   <CircularProgress/>
            </Stack>
            
            
            </Box>     

       </>
    )
}