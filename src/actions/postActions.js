import * as types from '../ActionTypes'

export const getPostList = (page=1) => {
    return (dispatch) => {
            dispatch({ type: types.FRESH_POST_START })
            let rows =[] ;
            for(let i=page;i>-3;i--){
                rows.push(1);
            }
            setInterval(()=>{
                dispatch({ type: types.FETCH_POST_LIST, dataSource: rows  , page : page})
                dispatch({ type: types.FRESH_POST_FINISH })
            },2000)
    }
}

export const getPostNext = (page=1) => {
    return (dispatch) => {
            dispatch({ type: types.FETCH_NEXT_PAGE_START })
            let rows =[] ;
            for(let i=page;i>-3;i--){
                rows.push(1);
            }
            setInterval(()=>{
                dispatch({ type: types.FETCH_POST_LIST, dataSource: rows  , page : page})
                dispatch({ type: types.FETCH_NEXT_PAGE_FINISH })
            },2000)
    }
}
