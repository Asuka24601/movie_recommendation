import request from '../request'

export const movieList = (start=0) => {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/movie/all/'+start).then((res)=>{
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

export const movieInfo = (id) => {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/movie/'+id).then((res)=>{
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

export const moviesInfo = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.post('/test/movies',data).then((res)=>{
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

export const movieCreate = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.post('/test/movie/create',data).then((res)=>{
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

export const movieDelete = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.delete('/test/movie/delete',data).then((res)=>{
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

export const movieUpdate = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.put('/test/movie/update',data).then((res)=>{
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

export const movieSearch = (query) => {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/movie/search/'+query).then((res)=>{
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
