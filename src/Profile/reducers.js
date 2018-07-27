import { combineReducers } from 'redux';

function userInfo(state = [], action) {
  switch (action.type) {
    case 'USER_INFO_FETCH_SUCCESS':
      return action.userInfo;

    default:
      return state;
  }
}

export default combineReducers({
  userInfo,
});
