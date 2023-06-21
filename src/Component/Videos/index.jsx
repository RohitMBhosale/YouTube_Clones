import { Stack } from "@mui/material";
import VideoItem from "../VideoItem";
import Loader from "../Loader";



export default function Videos(props){

    const {searchResults , isSearchResultsFetching} =props
   
     if(isSearchResultsFetching) return <Loader/>

    return(
      <Stack 
      direction={'row'}
      flexWrap='wrap'
      justifyContent={'flex-start'}
      alignItems={'flex-start'}
      gap={2}
      >

        {
            searchResults && searchResults.length > 0 ?
             searchResults.map(item => <VideoItem video ={item} />)
            : null
        }

      </Stack>
    )
}