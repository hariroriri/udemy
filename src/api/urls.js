// urls.js
import { Login} from './endpoints';
import makePostRequest from './methods/makePostRequest';
import makeGetRequest from './methods/makeGetRequest';

export const login = (email, password) => 
    makePostRequest(Login, { email, password });

export const getResponses = () => 
    makeGetRequest();

export const addItem = (item="") => 
    makePostRequest();
