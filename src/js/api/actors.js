import request from "../request";

export const actorsInfo = (id) => {
  return new Promise((resolve, reject) => {
    try {
      request.get('/test/actors/' + id).then((res) => {
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

export const actorsCreate = (data) => {
  return new Promise((resolve, reject) => {
    try {
      request.post('/test/actors/create', data).then((res) => {
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

export const actorsDelete = (id) => {
  return new Promise((resolve, reject) => {
    try {
      request.delete('/test/actors/delete/'+id).then((res) => {
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

export const actorsUpdate = (data) => {
  return new Promise((resolve, reject) => {
    try {
      request.put('/test/actors/update', data).then((res) => {
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

export const actorsAll = (start = 0) => {
  return new Promise((resolve, reject) => {
    try {
      request.get('/test/actors/all/' + start).then((res) => {
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

export const actorsSearch = (quary) => {
  return new Promise((resolve, reject) => {
    try {
      request.get('/test/actors/search/' + quary).then((res) => {
        if (res.code === 200) {
          resolve(res.result)
        }
        else throw new Error(res.message)
      })
    }
    catch (e) {
      reject(e.message)
    }
  }
  )
}

export const actorsToday = () => {
  return new Promise((resolve, reject) => {
    try {
      request.get('/test/actors/today').then((res) => {
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

