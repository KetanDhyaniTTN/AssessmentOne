export const INCREMENT='INCREMENT'
export const DECREMENT='DECREMENT'
export const API='API'
export const increase=(num)=>(dispatch)=>{
    setTimeout(()=>{
        dispatch({
          type:INCREMENT,
          payload:num
        })
    },2000)
}

export const decrease=(num)=>(dispatch)=>{
    setTimeout(()=>{
        dispatch({
          type:DECREMENT,
          payload:num
        })
    },2000)
}
export const AsyncData=()=>(dispatch)=>{
fetch('https://709f-103-99-13-154.in.ngrok.io/api/getvotecount')
.then((response) => response.json()) 
.then((response)=>{
console.log(response)
dispatch({
  type:API,
  payload:response
})
})
}