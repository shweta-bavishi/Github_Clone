import axios from "axios";
export const FETCH_USER_BEGIN = "FETCH_USER_BEGIN";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUserBegin = () => ({
  type: FETCH_USER_BEGIN
});

export const fetchUserSuccess = id => ({
  type: FETCH_USER_SUCCESS,
  payload: id
});

export const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: error
});

export function fetchUserDetails() {
  return async dispatch => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/shweta-bavishi"
      );
      consle.log(response);
      return fetchUserSuccess(response);
    } catch (error) {
      return fetchUserFailure(error);
    }
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
