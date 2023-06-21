import { ADD_TO_WATCH_LATER,CURRENT_SELECTED_CATEGORY, FETCHED_SEARCH_RESULTS, FETCHING_SEARCH_RESULTS } from "./actionType";

const initialState = {
  isSearchResultsFetching: false,
  searchResults: null,
  currentCategoryValue : 'new',
  watchLaterVideos:null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_SEARCH_RESULTS:
      return {
        ...state,
        isSearchResultsFetching: true,
      };
    case FETCHED_SEARCH_RESULTS:
      return {
        ...state,
        isSearchResultsFetching: false,
        searchResults: action.data,
      };
      case CURRENT_SELECTED_CATEGORY:
        return {
          ...state,
         currentCategoryValue: action.getCurrentId
        };
        case ADD_TO_WATCH_LATER:
          const {getCurrentVideoItem} = action
         let copyWatchLaterVideos = [...state.watchLaterVideos];
         const index = copyWatchLaterVideos.findIndex(item => item.videoId ===getCurrentVideoItem.videoId)
              if(index === -1){
                copyWatchLaterVideos.push(getCurrentVideoItem)
              }

          return {
            ...state,
           watchLaterVideos:copyWatchLaterVideos
          };
         

    default:
      return state;
  }
}

export default reducer;
