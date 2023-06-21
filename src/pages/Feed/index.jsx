import { useDispatch } from "react-redux";
import SideBar from "../../Component/Sidebar";
import { initFetchSearchResults } from "../../Store/action";
import { useEffect } from "react";
import { Box } from "@mui/material";
import {Stack } from '@mui/material'
import { useSelector } from "react-redux";
import Videos from "../../Component/Videos";




export default function Feed(){

const dispatch = useDispatch();
const {currentCategoryValue, isSearchResultsFetching, searchResults} = useSelector(state => state);

console.log(isSearchResultsFetching , searchResults)

useEffect(() =>{
  if(currentCategoryValue !== '' &&  currentCategoryValue !== 'watchLater'){
    dispatch(initFetchSearchResults(currentCategoryValue));
  }
 
},[currentCategoryValue])

    return(
      
      <>
       <Stack
         sx={{flexDirection: {sx:'column',md :'row'}}}
      >
        <Box
           sx={{
            height : { sx :"auto",md:"100vh"},
            borderRight:"1px solid black",
            px :{sx:0,md:2},
          }}
        >
          <SideBar />
        </Box>
        <Box
         p={2} sx={{
          overflowY:'auto',
          height:'90vh',
          flex:2
        }}
        >
        <Videos searchResults ={searchResults} isSearchResultsFetching={isSearchResultsFetching}/>
        </Box>
      </Stack>
    
      </>
     
    )
}
