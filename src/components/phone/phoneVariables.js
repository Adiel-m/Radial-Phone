export const codeId = {
  singleDigit: '*74',
  doubleDigit: '*75',
  longDistNum: '1',
  longDistChar: '+',
  edit: '#',
}

export const LDNumberL = 3
export const editCodeL = codeId.edit.length
export const longDistNumL = codeId.longDistNum.length
export const phoneNumL = 7

export const SDL = 1
/** *74 (string length) */
export const s = codeId.singleDigit.length
/** *74n (string length) */
export const sn = s + SDL
/** *74n1 (string length) */
export const snd = sn + longDistNumL
/** *74n1000 (string length) */
export const sndl = snd + LDNumberL
/** *74n1# (string length) */
export const singleDigitTotalL = snd + editCodeL

export const DDL = 2
/** *75 (string length) */
export const d = codeId.doubleDigit.length
/** *75nn (string length) */
export const dn = d + DDL
/** *75nn1 (string length) */
export const dnd = dn + longDistNumL
/** *75nn1000 (string length) */
export const dndl = dnd + LDNumberL
/** *75nn1# (string length) */
export const doubleDigitTotalL = dnd + editCodeL
