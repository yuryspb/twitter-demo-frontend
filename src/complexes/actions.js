function fetchUserInfo(userInfo) {
  return {
    type: 'USER_INFO_FETCH_SUCCESS',
    userInfo,
  };
}

export default function userInfoFetchData(url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(userInfo => dispatch(fetchUserInfo(userInfo)));
  };
}
