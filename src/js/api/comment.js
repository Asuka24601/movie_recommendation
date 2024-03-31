import request from "../request";

//done 1
export const commentList = (id) => {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/user/comment/'+id).then((res)=>{
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
export const commentCount = (id) => {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/user/comment/count/'+id).then((res)=>{
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

export const commentCreate = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.post('/test/comment/create',data).then((res)=>{
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

export const commentDelete = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.delete('/test/comment/delete',data).then((res)=>{
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

export const commentUpdate = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.put('/test/comment/update',data).then((res)=>{
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

export const commentMovie = (movie_id) => {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/comment/movie/'+movie_id).then((res)=>{
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
