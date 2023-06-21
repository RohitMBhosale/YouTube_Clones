import { takeEvery } from "@redux-saga/core/effects";
import { INIT_FETCH_SEARCH_RESULTS } from "./actionType";
import axios from "axios";
import { call } from "@redux-saga/core/effects";
import { FetchedSearchResults } from "./action";
import { put } from "@redux-saga/core/effects";

function* saga() {
  yield takeEvery(INIT_FETCH_SEARCH_RESULTS, FetchingSearchResultsSaga);
}
function* FetchingSearchResultsSaga(action) {
  console.log(action, "saga called here");

  yield put(FetchedSearchResults())

  const options = {
    method: "GET",

    params: {
      q: action.currentQuery,
      hl: "en",
      gl: "US",
    },
    headers: {
      "X-RapidAPI-Key": "142bf4f57emsh9f93f85dceb45ecp17a3b9jsn3fb199c22d43",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  try {
    const apiResponse = yield call(
      axios.get,
      "https://youtube138.p.rapidapi.com/search/",
      options
    );
    const { data } = apiResponse;
    const { contents } = data;

    if (contents && contents.length > 0) {
      yield put(
        FetchedSearchResults(
          contents
            .filter((item) => item.type === "video")
            .map((item) => item.video)
        )
      );
    }
  } catch (e) {
    console.log(e);
  }
}
export default saga;
