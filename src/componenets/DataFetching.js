import React, { useEffect, useReducer } from 'react';
import {reducer, initialState} from "../reducerFetch"
import axios from "axios"

const DataFetching = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  useEffect(()=>{
    dispatch({type:"FETCH_REQUEST"})
    axios.get("https://jssonplaceholder.typicode.com/posts/1")
    .then(result=>dispatch({type:"FETCH_SUCCESS", payload: result.data}))
    .catch(error=>dispatch({type: "FETCH_ERROR"}))
  },[])

  return(
    <div>
      {state.loading?<h2>loading...</h2> : state.post.title }
      {state.error? <h2>{state.error}</h2>:<h2>{}</h2> }
    </div>
  );
};

export default DataFetching;
