import _isString from 'lodash/isString'
function validateInput (items, check = null, change = true) {
  let error = false
  if (!Array.isArray(items)) {
    items = [items]
  }
  items.forEach((item) => {
    let itemCheck = check || item.check || ['non-empty']
    if (itemCheck) {
      if (!Array.isArray(itemCheck)) {
        itemCheck = [itemCheck]
      }
      let checkError = true
      itemCheck.forEach((eachCheck) => {
        if (checkError) {
          checkError = !validate(item.value, eachCheck)
        }
      })
      if (change) { item.error = checkError }
      error = error || checkError
    }
  })
  return !error
}
function validate (value, check) {
  let empty = false
  if (_isString(value)) {
    value = value.trim()
  }
  if (value === null || value === undefined || value === '') {
    empty = true
  }
  if (check === 'non-empty') {
    if (!empty) {
      return true
    }
  } else if (check === 'empty') {
    if (empty) {
      return true
    }
  } else if (check === 'email') {
    const reEmail = (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if (!empty && reEmail.test(value)) {
      return true
    }
  } else if (check === 'phone') {
    const rePhone = (/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)
    if (!empty && rePhone.test(value)) {
      return true
    }
  } else if (check === 'pincode') {
    // const rePincode = (/^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/)
    if (!empty && value.length === 6) {
      return true
    }
  } else if (check === 'url') {
    const url = (/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi)
    if (!empty && url.test(value)) {
      return true
    }
  } else if (check === 'password') {
    const rePassword = (/^(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    if (!empty && rePassword.test(value)) {
      return true
    }
  }
  return false
}

export { validateInput as default, validate }
