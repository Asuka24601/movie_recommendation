import request from "../request";

export const newsInfo = (id) => {
  return new Promise((resolve, reject) => {
    try {
      request.get('/test/news/' + id).then((res) => {
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

export const newsCreate = (data) => {
  return new Promise((resolve, reject) => {
    try {
      request.post('/test/news/create', data).then((res) => {
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

export const newsDelete = (id) => {
  return new Promise((resolve, reject) => {
    try {
      request.delete('/test/news/delete/'+id).then((res) => {
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

export const newsUpdate = (data) => {
  return new Promise((resolve, reject) => {
    try {
      request.put('/test/news/update', data).then((res) => {
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

export const newsSearch = (quary) => {
  return new Promise((resolve, reject) => {
    try {
      request.post('/test/news/search', quary).then((res) => {
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