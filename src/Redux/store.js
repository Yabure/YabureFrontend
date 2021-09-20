import {combineReducers, applyMiddleware} from 'redux';
import {account, VerifyOtp, login} from '../Redux/reducer/account';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
// import {profile} from '../Redux/reducer/Profile';
import {interest} from '../Redux/reducer/Interest';
import {Uploader} from '../Redux/reducer/uploadDocument';

const reducer = combineReducers({
  // account,
  // VerifyOtp,
   login,
  // profile,
  // interest,
  Uploader,
});

export const store = createStore(reducer, applyMiddleware(thunk));
