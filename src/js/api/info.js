import request from "../request";

//done 1
export const info = () => {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/info').then((res)=>{
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