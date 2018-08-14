export const FETCH_USER_BEGIN = "FETCH_USER_BEGIN";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUserBegin = () => ({
  type: FETCH_USER_BEGIN
});

export const fetchUserSuccess = id => ({
  type: FETCH_USER_SUCCESS,
  payload: { id }
});

export const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: { error }
});

export function fetchUserDetails() {
  return dispatch => {
    dispatch(fetchUserBegin());
    return fetch("https://api.github.com/users/shweta-bavishi")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchUserSuccess(json.id));
        return json.id;
      })
      .catch(error => dispatch(fetchUserFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
