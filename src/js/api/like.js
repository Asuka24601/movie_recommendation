import request from "../request";

//done 1
export const likeList = (id) => {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/user/like/'+id).then((res)=>{
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
export const likeCount = (id) => {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/user/like/count/'+id).then((res)=>{
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
export const LikeCreate = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.post('/test/user/like/create',data).then((res)=>{
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
export const likeDelete = (user_id,params) => {
  return new Promise((resolve,reject)=>{
    try {
      request.delete('/test/user/like/delete/'+user_id+'?'+{params}).then((res)=>{
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
