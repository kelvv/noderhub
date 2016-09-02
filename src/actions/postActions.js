import * as types from '../ActionTypes'
const env=  require('../config/env.json')

function getPostsfromCNODE(page=1){
    return fetch(`${env.host}/topics?page=${page}`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.data;
      })
      .catch((error) => {
        console.error(error);
      });
}

export const getPostList = () => {
    return (dispatch) => {
            dispatch({ type: types.FRESH_POST_START })
            getPostsfromCNODE().then((data)=>{
                dispatch({ type: types.FRESH_POST_FINISH })
                dispatch({ type: types.FETCH_POST_LIST, dataSource: data  ,posts:  data, page : 1})
            })
    }
}

export const getPostNext = (page=1) => {
    return (dispatch) => {
            dispatch({ type: types.FETCH_NEXT_PAGE_START })
            getPostsfromCNODE(page).then((data)=>{
                dispatch({ type: types.FETCH_NEXT_PAGE_FINISH })
                dispatch({ type: types.FETCH_POST_LIST, dataSource: data  ,posts:  data, page : page})
            })
    }
}

export const changeScene = (title) => {
    return (dispatch) => {
        dispatch({ type: types.SCENE_CHANGE , title:title })
    }
}
