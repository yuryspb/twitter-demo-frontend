function fetchUserInfo(userInfo) {
  return {
    type: 'USER_INFO_FETCH_SUCCESS',
    userInfo,
  };
}

const source = 'https://twitter-demo.erodionov.ru';
const key = process.env.REACT_APP_SECRET_CODE;
if (!key && key !== '') throw new Error('Missing REACT_APP_SECRET_CODE');

export default function userInfoFetchData(id) {
  return (dispatch) => {
    fetch(`${source}/api/v1/accounts/${id}?access_token=${key}`)
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
