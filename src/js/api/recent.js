import request from "../request";

//done 1
export const recent = (id)=> {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/user/recent/'+id).then((res)=>{
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
export const recentAdd = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.post('/test/user/recent/add',data).then((res)=>{
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