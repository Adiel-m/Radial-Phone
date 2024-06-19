export const codeId = {
  singleDigit: '*74',
  doubleDigit: '*75',
  longDistNum: '1',
  longDistChar: '+',
  edit: '#',
}

/** Long Distance Number (Characters Length) */
export const LDNL = 3
/** codeId.edit (Characters Length) */
export const CIdEL = codeId.edit.length
/** codeId.longDistNum (Characters Length) */
export const CIdLDNL = codeId.longDistNum.length
/** Phone Number (Characters Length) */
export const PNL = 7

/** Single Digit Length */
export const SDL = 1
/** *74 (Characters Length) */
export const s = codeId.singleDigit.length
/** *74n (Characters Length) */
export const sn = s + SDL
/** *74n1 (Characters Length) */
export const snd = sn + CIdLDNL
/** *74n1000 (Characters Length) */
export const sndl = snd + LDNL
/** *74n1# (Characters Length) */
export const singleDigitTotalL = snd + CIdEL

/** Double Digit Length */
export const DDL = 2
/** *75 (Characters Length) */
export const d = codeId.doubleDigit.length
/** *75nn (Characters Length) */
export const dn = d + DDL
/** *75nn1 (Characters Length) */
export const dnd = dn + CIdLDNL
/** *75nn1000 (Characters Length) */
export const dndl = dnd + LDNL
/** *75nn1# (Characters Length) */
export const doubleDigitTotalL = dnd + CIdEL
