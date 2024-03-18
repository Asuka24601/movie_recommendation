// Description: This file contains the tool functions.


  // Convert seconds to minutes
export const sec2min = (sec) => {
    return Math.floor(sec / 60) + ':' + ('0' + (sec % 60)).slice(-2);
  }

  // Convert minutes(mm:ss) to seconds
export const min2sec = (min) => {
    let time = min.split(':');
    return parseInt(time[0]) * 60 + parseInt(time[1]);
}

// check the password (最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符)
export const checkPassword = (password) => {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
  return reg.test(password);
}

// check the email
export const checkEmail = (email) => {
  const reg = /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/;
  return reg.test(email);
}

// check the phone
export const checkPhone = (phone) => {
  const reg = /^1[3456789]\d{9}$/;
  return reg.test(phone);
}

// check the username (4到16位,可以包括字母,数字,下划线,减号)
export const checkUsername = (username) => {
  const reg = /^[a-zA-Z0-9_-]{4,16}$/;
  return reg.test(username);
}