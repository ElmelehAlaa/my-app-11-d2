export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const GET_JOBS = "GET_JOBS";
export const GET_QUERY = "GET_QUERY";
export const GET_JOBS_LOADING_ON = "GET_JOBS_LOADING_ON";
export const GET_JOBS_LOADING_OFF = "GET_JOBS_LOADING_OFF";
export const GET_JOBS_ERROR_ON = "GET_JOBS_ERROR_ON";
export const GET_JOBS_ERROR_OFF = "GET_JOBS_ERROR_OFF";

export const addToFavoritesAction = (companySelected) => ({ type: ADD_TO_FAVORITES, payload: companySelected });
export const removeFromFavoritesAction = (companySelected) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: companySelected,
});
export const getQuery = (queryJob) => ({ type: GET_QUERY, payload: queryJob });
export const getJobs = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + getState().query.content);
      if (resp.ok) {
        let fetchedJobs = await resp.json();
        dispatch({ type: GET_JOBS, payload: fetchedJobs });
        dispatch({ type: GET_JOBS_ERROR_OFF });
        console.log(getState());
      } else {
        console.log("error");
        alert("Errore nel reperimento dei dati ");
      }
    } catch (error) {
      dispatch({ type: GET_JOBS_ERROR_ON, payload: error.message });
      console.log(error);
    } finally {
      dispatch({ type: GET_JOBS_LOADING_OFF });
    }
  };
};
