export const initialState = {
  loading:false,
  post:[],
  error:''
}

export const reducer=(state=initialState, action)=>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return{
        loading: true
      }
    case 'FETCH_SUCCESS':
      return{
        loading:false,
        post:action.payload,
        error:''
      }
    case 'FETCH_FAILURE':
      return{
        loading:false,
        post:[],
        error:'Something went wrong!'
      }
    default: return state
  }
}