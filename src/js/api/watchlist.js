import request from "../request";

//done 1
export const watchlist = (id) => {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/user/watchlist/'+id).then((res)=>{
        if (res.code === 200) {
          resolve(res.result)
        }
        else throw new Error(res.message)
      })
    }
    catch (e) {
      reject(e.message)
    }
  })
}

//done 2
export const watchlistCount = (id) => {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/watchlist/count/'+id).then((res)=>{
        if (res.code === 200) {
          resolve(res.result)
        }
        else throw new Error(res.message)
      })
    }
    catch (e) {
      reject(e.message)
    }
  })
}

//done 3
export const watchlistCreate = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.post('/test/watchlist/create',data).then((res)=>{
        if (res.code === 200) {
          resolve(res.result)
        }
        else throw new Error(res.message)
      })
    }
    catch (e) {
      reject(e.message)
    }
  })
}

//done 4
export const watchlistDelete = (user_id, params) => {
  return new Promise((resolve,reject)=>{
    try {
      request.post('/test/watchlist/delete/'+user_id+'?'+params).then((res)=>{
        if (res.code === 200) {
          resolve(res.result)
        }
        else throw new Error(res.message)
      })
    }
    catch (e) {
      reject(e.message)
    }
  })
}

// export const watchlistUpdate = (data) => {
//   return new Promise((resolve,reject)=>{
//     try {
//       request.post('/test/watchlist/update',data).then((res)=>{
//         if(res.code === 200){
//           resolve(res.result)
//         }
//         else throw new Error(res.message)
//       })
//     }
//     catch(e) {
//       reject(e.message)
//     }
//   })
// }

