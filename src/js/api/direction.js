import request from "../request";

export const directionInfo = (id) => {
  return new Promise((resolve, reject) => {
    try {
      request.get('/test/direction/' + id).then((res) => {
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

export const directionCreate = (data) => {
  return new Promise((resolve, reject) => {
    try {
      request.post('/test/direction/create', data).then((res) => {
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

export const directionDelete = (data) => {
  return new Promise((resolve, reject) => {
    try {
      request.delete('/test/direction/delete', data).then((res) => {
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

export const directionUpdate = (data) => {
  return new Promise((resolve, reject) => {
    try {
      request.put('/test/direction/update', data).then((res) => {
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

export const directionAll = (start=0) => {
  return new Promise((resolve, reject) => {
    try {
      request.get('/test/direction/all/' + start).then((res) => {
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

export const directionSearch = (data) => {
  return new Promise((resolve, reject) => {
    try {
      request.post('/test/direction/search', data).then((res) => {
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

// Path: src/js/api/like.js