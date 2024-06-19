'use client'
import { createContext, useState, useEffect } from 'react'
import {
  resetRotation,
  rotateDial,
  calcRotationAngle,
  checkOverlapEl,
} from './DialActions'
import {
  dispatchCall,
  replaceLongDistanceChar,
  islongDistanceCodeId,
  isSpeedDialNumber,
  createSdItem,
  verifySdItemDelete,
  isPhoneNum,
  isEditCode,
  isSingleDigitCodeId,
  isDoubleDigitCodeId,
} from './PhoneUtils'

const PhoneContext = createContext()

export const PhoneProvider = ({ children }) => {
  const [isRotating, setIsRotating] = useState(false)
  const [socketVal, setSocketVal] = useState('')
  const [dialInput, setDialInput] = useState('')
  const [rotationAngle, setRotationAngle] = useState(0)
  let dispatchTimer

  const [speedDial, setSpeedDial] = useState([
    {
      type: 'singleDigit',
      sdCode: 2,
      isLongDist: false,
      countryCode: undefined,
      fullPhoneNum: '*100',
      isValidPhone: false,
      phoneNumber: '*100',
      areaCode: undefined,
      name: 'Police',
    },
    {
      type: 'doubleDigit',
      sdCode: 21,
      isLongDist: false,
      countryCode: undefined,
      fullPhoneNum: '0003334444',
      isValidPhone: true,
      phoneNumber: '3334444',
      areaCode: '000',
      name: 'John',
    },
    {
      type: 'singleDigit',
      sdCode: 4,
      isLongDist: true,
      countryCode: '+001',
      fullPhoneNum: '+001223334444',
      isValidPhone: true,
      phoneNumber: '3334444',
      areaCode: '22',
      name: 'Jim',
    },
  ])
  const [speedDialEdit, setSpeedDialEdit] = useState({
    item: {},
    edit: false,
  })

  // Phone Mouse Actions
  const handleMouseDown = (e) => {
    setIsRotating(true)
    setRotationAngle(calcRotationAngle(e))
    setSocketVal(e.target.value)
  }
  const handleMouseMove = (e) => {
    if (isRotating) {
      const deg = Math.floor(calcRotationAngle(e) - rotationAngle)
      // prevent counter Clockwise Rotation
      if (deg < 0) {
        return
      }

      rotateDial(e, deg)
    }
  }
  const handleMouseLeave = (e) => {
    if (isRotating) {
      // when the dial button overlap the stopper element add current number to dialInput
      checkOverlapEl(e) && setDialInput(dialInput.concat(socketVal))
      // reset rotation
      setIsRotating(false)
      setSocketVal('')
      resetRotation()
    }
    return
  }
  const handleMouseUp = () => {
    setIsRotating(false)
    setSocketVal('')
    resetRotation()
  }

  // Speed Dial Actions
  const editSpeedDialItem = (item) => {
    setSpeedDialEdit({
      item,
      edit: true,
    })
  }
  const cancelEditSpeedDialItem = (item) => {
    setSpeedDialEdit({
      item,
      edit: false,
    })
  }
  const addSpeedDialItem = (item) => {
    const newSpeedDial = speedDial.filter((sd) => sd.sdCode !== item.sdCode)
    setSpeedDial(newSpeedDial.concat(item))
    resetDialInput()
  }
  const deleteSpeedDialItem = (sdCode) => {
    window.confirm(`Do you want to REMOVE this speed dial item: ${sdCode}?`) &&
      setSpeedDial(speedDial.filter((sd) => sd.sdCode !== sdCode))
    resetDialInput()
  }
  const updateSpeedDialItem = (item) => {
    window.confirm(`Do you want to UPDATE this speed dial item: ${item.sdCode}?`)
      ? addSpeedDialItem(item) && resetDialInput()
      : resetDialInput()
  }
  const speedDialCall = (callType) => {
    const arr = speedDial.filter((sd) => sd.sdCode === callType.value)

    arr[0] !== undefined
      ? delayTimerAndReset(() => {
          setDialInput(arr[0].fullPhoneNum)
          dispatchCall()
        }, 200)
      : delayTimerAndReset(() => {
          alert(`Speed dial code dosen't exist, Try again`)
        }, 200)
  }
  const processCall = (str) => {
    const sdCode = +str.substring(0, str.length - 1)
    return (
      (isSpeedDialNumber(str) && { type: 'speedDial', value: sdCode }) ||
      (isPhoneNum(str) && { type: 'phoneNumber', value: str })
    )
  }
  const processSpeedDial = (str) => {
    if ((isSingleDigitCodeId(str) || isDoubleDigitCodeId(str)) && isEditCode(str)) {
      const item = createSdItem(str)
      const arr = speedDial.filter((sd) => sd.sdCode === item.sdCode)

      return !verifySdItemDelete(dialInput)
        ? (arr.length < 1 && { action: 'add', item }) ||
            (arr.length === 1 && { action: 'update', item })
        : { action: 'delete', item }
    }
  }

  // helpers
  const resetDialInput = () => {
    return setDialInput('')
  }
  const delayTimer = (func, delay = 2000) => {
    dispatchTimer = setTimeout(() => {
      func()
    }, delay)
  }
  const delayTimerAndReset = (func, delay = 2000) => {
    dispatchTimer = setTimeout(() => {
      func()
      resetDialInput()
    }, delay)
  }

  useEffect(() => {
    if (!isRotating && dialInput !== '') {
      const callType = processCall(dialInput)
      const item = processSpeedDial(dialInput)

      dialInput.length === 1 &&
        islongDistanceCodeId(dialInput) &&
        setDialInput(replaceLongDistanceChar(dialInput))

      if (callType) {
        switch (callType.type) {
          case 'speedDial':
            speedDialCall(callType)
            break
          case 'phoneNumber':
            delayTimerAndReset(() => {
              dispatchCall()
            })
            break
        }
      }

      if (item) {
        switch (item.action) {
          case 'add':
            addSpeedDialItem(item.item)
            break
          case 'update':
            updateSpeedDialItem(item.item)
            break
          case 'delete':
            deleteSpeedDialItem(item.item.sdCode)
            break
        }
      }
    }

    return () => {
      clearTimeout(dispatchTimer)
    }
  }, [isRotating, dialInput])

  return (
    <PhoneContext.Provider
      value={{
        dialInput,
        speedDial,
        speedDialEdit,
        updateSpeedDialItem,
        editSpeedDialItem,
        cancelEditSpeedDialItem,
        deleteSpeedDialItem,
        handleMouseDown,
        handleMouseMove,
        handleMouseLeave,
        handleMouseUp,
      }}
    >
      {children}
    </PhoneContext.Provider>
  )
}

export default PhoneContext
