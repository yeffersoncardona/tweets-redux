import { combineReducers } from 'redux';
import modalsReducers from './modalsReducers';
import validationsReducers from './validationsReducers';
import tweetsReducer from './tweetsReducer';

export default combineReducers({
    modals: modalsReducers,
    validations: validationsReducers,
    tweets: tweetsReducer
});