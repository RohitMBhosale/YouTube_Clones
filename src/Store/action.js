import { CURRENT_SELECTED_CATEGORY, INIT_FETCH_SEARCH_RESULTS } from "./actionType";
import { FETCHING_SEARCH_RESULTS } from "./actionType";
import { FETCHED_SEARCH_RESULTS } from "./actionType";
import { FAILED_SEARCH_RESULTS } from "./actionType";
import { ADD_TO_WATCH_LATER } from "./actionType";




export function initFetchSearchResults(currentQuery){
    return{
        type:INIT_FETCH_SEARCH_RESULTS,
        currentQuery
    }   
}

export function FetchingSearchResults(){
    return{
        type:FETCHING_SEARCH_RESULTS
    }          
}

export function FetchedSearchResults(data){
    return{
        type:FETCHED_SEARCH_RESULTS,
        data,
    }    
}

export function FailedSearchResults(){
    return{
        type:FAILED_SEARCH_RESULTS
    }    
}

export function currentSelectedCategory(getCurrentId){
    return{
        type: CURRENT_SELECTED_CATEGORY,
        getCurrentId
    }
}
export function addToWatchLaterVideos(getCurrentVideoItem){
return{
    type: ADD_TO_WATCH_LATER,
    getCurrentVideoItem
}

}