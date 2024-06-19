import {
  codeId,
  LDNL,
  d,
  dn,
  dndl,
  doubleDigitTotalL,
  CIdEL,
  CIdLDNL,
  PNL,
  s,
  singleDigitTotalL,
  sn,
  sndl,
} from './phoneVariables'

// Generate Speed Dial Item
export const createSdItem = (str) => {
  const item = {
    type: sdCodeType(str) || undefined,
    sdCode: sdCodeNum(str) || undefined,
    isLongDist: verifySdLongDistanceCall(str) || false,
    countryCode: sdCountryCode(str) || undefined,
    fullPhoneNum: sdFullNumber(str) || undefined,
    isValidPhone: verifySdPhoneNum(str) || false,
    phoneNumber: sdPhoneNum(str) || undefined,
    areaCode: sdAreaCode(str) || undefined,
    name: undefined,
  }

  return item
}

const sdCodeType = (str) => {
  return (
    (isSingleDigitCodeId(str) && 'singleDigit') ||
    (isDoubleDigitCodeId(str) && 'doubleDigit')
  )
}

const sdCodeNum = (str) => {
  return (
    (isSingleDigitCodeId(str) && +str.slice(s, sn)) ||
    (isDoubleDigitCodeId(str) && +str.slice(d, dn))
  )
}

const verifySdLongDistanceCall = (str) => {
  return islongDistanceCodeId(str) ? true : false
}

const sdCountryCode = (str) => {
  return (
    (islongDistanceCodeId(str) && replaceLongDistanceChar(str.slice(sn, sndl))) ||
    (isDoubleDigitCodeId(str) && replaceLongDistanceChar(str.slice(dn, dndl)))
  )
}

const sdFullNumber = (str) => {
  if (islongDistanceCodeId(str)) {
    return (
      (isSingleDigitCodeId(str) && replaceLongDistanceChar(str.slice(sn, -CIdEL))) ||
      (isDoubleDigitCodeId(str) && replaceLongDistanceChar(str.slice(dn, -CIdEL)))
    )
  }

  if (!islongDistanceCodeId(str)) {
    return (
      (isSingleDigitCodeId(str) && str.slice(sn, -CIdEL)) ||
      (isDoubleDigitCodeId(str) && str.slice(dn, -CIdEL))
    )
  }
}

const verifySdPhoneNum = (str) => {
  const num = sdFullNumber(str)
  return isPhoneNum(num) ? true : false
}

const sdPhoneNum = (str) => {
  const num = sdFullNumber(str)
  return isPhoneNum(num) ? num.slice(-PNL) : num
}

const sdAreaCode = (str) => {
  const num = sdFullNumber(str)
  const end = num.length - PNL

  return islongDistanceCodeId(str)
    ? isPhoneNum(num) && num.slice(CIdLDNL + LDNL, end)
    : isPhoneNum(num) && num.slice(0, end)
}

// Process Helpers
export const verifySdItemDelete = (str) => {
  if (isSingleDigitCodeId(str)) {
    return sn + CIdEL === str.length
  }
  if (isDoubleDigitCodeId(str)) {
    return dn + CIdEL === str.length
  }
  return false
}

// Validation Helpers
export const islongDistanceCodeId = (str) => {
  // validate for call
  if (str.length === 1) {
    return str === (codeId.longDistNum || codeId.longDistChar)
  }
  // validate for single digit edit
  if (str.length >= singleDigitTotalL && isSingleDigitCodeId(str)) {
    return str.slice(sn, sn + CIdLDNL) === (codeId.longDistNum || codeId.longDistChar)
  }
  // validate for double digit edit
  if (str.length >= doubleDigitTotalL && isDoubleDigitCodeId(str)) {
    return str.slice(dn, dn + CIdLDNL) === (codeId.longDistNum || codeId.longDistChar)
  }
  return false
}

export const isSingleDigitCodeId = (str) => {
  return str.slice(0, s) === codeId.singleDigit
}

export const isDoubleDigitCodeId = (str) => {
  return str.slice(0, d) === codeId.doubleDigit
}

export const isNum = (num) => {
  /** validate numbers
   */
  const regx = /^\d+$/

  return regx.test(num)
}

export const isPhoneNum = (str) => {
  /**  Matches phone patterns
   * xx-xxx-xxxx
   * xxx-xxx-xxxx
   * +xxx-x-xxx-xxxx
   * +xxx-xx-xxx-xxxx
   * xxxxxxxxx
   * xxxxxxxxxx
   * +xxxxxxxxxxx
   * +xxxxxxxxxxxx
   */
  const regx =
    /^(?:\d{2}-\d{3}-\d{4}|\d{3}-\d{3}-\d{4}|\+\d{3}-\d-\d{3}-\d{4}|\+\d{3}-\d{2}-\d{3}-\d{4}|\d{10}|\d{9}|\+\d{11}|\+\d{12})$/

  return regx.test(str)
}

export const isSpeedDialNumber = (str) => {
  /** Matches either one digit from 2 to 9 or a number from 20 to 49.
   * Matches {codeId.edit} as the last character.
   *
   * examples: 2-9#, 20-49#
   */
  const regx = new RegExp(`^(?:[2-9]{1}|[2-4][0-9])${codeId.edit}$`)
  return regx.test(str)
}

export const isEditCode = (str) => {
  return str.slice(-CIdEL) === codeId.edit
}

// helpers
const removeDashAndPlus = (str) => {
  if (str.includes('-', '+')) {
    return str.replace(/\p{Dash}+/gu, '').replace(codeId.longDistChar, '')
  }
}

export const dispatchCall = () => {
  const callEl = document.getElementById('call')
  // make a call
  callEl.click()
}

export const replaceLongDistanceChar = (str) => {
  return str.includes('+')
    ? str.replace(codeId.longDistChar, '1')
    : str.replace('1', codeId.longDistChar)
}
