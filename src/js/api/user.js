import request from "../request";

//done 1
export const userLogin = (data)=> {
  // console.log(data);
  return new Promise((resolve,reject)=>{
    try {
      request.post('/test/user/login',data).then((res)=>{
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
export const userInfo = (id) => {
  // console.log(id);
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/user/'+id).then((res)=>{
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
export const userUpdate = (data) => {
  // console.log(data);
  return new Promise((resolve,reject)=>{
    try {
      request.put('/test/user/update',data).then((res)=>{
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
export const userRegister = (data) => {
  // console.log(data);
  return new Promise((resolve,reject)=>{
    try {
      request.post('/test/user/register',data).then((res)=>{
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

//done 5
export const userLogout = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.post('/test/user/logout',data).then((res)=>{
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

//done 6
export const userDelete = (id) => {
  return new Promise((resolve,reject)=>{
    try {
      request.delete('/test/user/delete/'+id).then((res)=>{
        resolve(res.result)
      })
    }
    catch(e) {
      reject(e)
    }
  })
}

//done 7
export const userForget = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.post('/test/user/forget',data).then((res)=>{
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
