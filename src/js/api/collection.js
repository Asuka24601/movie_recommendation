import request from "../request";

//done 1
export const collectionList = (id)=> {
  // console.log(id);
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/user/collection/'+id).then((res)=>{
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
export const collectionCount = (id) => {
  return new Promise((resolve,reject)=>{
    try {
      request.get('/test/user/collection/count/'+id).then((res)=>{
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
export const collectionCreate = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.post('/test/collection/create',data).then((res)=>{
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
export const collectionDelete = (id,params) => {
  return new Promise((resolve,reject)=>{
    try {
      request.delete('/test/collection/delete/'+id+'?'+params).then((res)=>{
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
export const collectionUpdate = (data) => {
  return new Promise((resolve,reject)=>{
    try {
      request.post('/test/collection/update',data).then((res)=>{
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

// export const collectionAll = (start=0) => {
//   return new Promise((resolve,reject)=>{
//     try {
//       request.get('/test/collection/all/'+start).then((res)=>{
//         if (res.code === 200) {
//           resolve(res.result)
//         }
//         else throw new Error(res.message)
//       })
//     }
//     catch (e) {
//       reject(e.message)
//     }
//   })
// }