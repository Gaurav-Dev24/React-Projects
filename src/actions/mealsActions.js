import axios from '../api/axios';

import{
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_ERROR
} from './actions';

import { CATEGORIES_URL } from '../utils/constants';

// crating a function named startFetchCategories to grab the data from the api
export const startFetchCategories = async(dispatch) => {
    
    try{
        dispatch({ type: FETCH_CATEGORY_BEGIN});
        const response = await axios.get(`${CATEGORIES_URL}`);
        // console.log(response);
        dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: response.data.categories});
    }catch(error){
        dispatch({type: FETCH_CATEGORY_ERROR, payload: error.message});
    }
}