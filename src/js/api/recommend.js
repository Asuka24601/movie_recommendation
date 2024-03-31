import request from "../request";

//done 1
export const recommendUser = (id) => {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/user/recommend/'+id).then((res)=>{
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
export const recommendLatest = () => {
  return new Promise((resolve, reject) => {
    try {
      request.get('/test/recommend/latest').then((res) => {
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
export const recommendPopular = () => {
  return new Promise((resolve, reject) => {
    try {
      request.get('/test/recommend/popular').then((res) => {
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
export const recommendTop = (size=10) => {
  return new Promise((resolve, reject) => {
    try {
      request.get('/test/recommend/top/'+size).then((res) => {
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
