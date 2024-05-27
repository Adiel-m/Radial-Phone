import { useContext, useState } from 'react'
import PhoneContext from '@/context/PhoneContext'

import { isNum, replaceLongDistanceChar } from './PhoneUtils'

export default function SpeedDialItem({ item }) {
  const {
    deleteSpeedDialItem,
    speedDialEdit,
    updateSpeedDialItem,
    editSpeedDialItem,
    cancelEditSpeedDialItem,
  } = useContext(PhoneContext)

  const [newItem, setNewItem] = useState({ ...item })
  const isEdit = speedDialEdit.edit && speedDialEdit.item.sdCode === item.sdCode

  const handleChangeName = (e) => {
    const name = e.target.value
    name === '' || name.length > 30
      ? alert('Enter name (No more then 30 characters)')
      : setNewItem({ ...newItem, name: name })
  }

  const handleChangePhone = (e) => {
    const phone = e.target.value
    phone !== '' && !isNum(phone)
      ? alert('Enter numbers')
      : setNewItem({ ...newItem, fullPhoneNum: phone })
  }

  return (
    <li className="speed-dialer--item">
      <div className="speed-dialer--sdCode">{item.sdCode}</div>
      <div className="details">
        <h3 className="speed-dialer--name">
          {isEdit ? (
            <input
              className="speed-dialer--name"
              type="text"
              name="name"
              value={newItem.name}
              onChange={handleChangeName}
            />
          ) : (
            `${item.name}:`
          )}
        </h3>
        <p className="speed-dialer--phone">
          {isEdit ? (
            <input
              className="speed-dialer--phone"
              type="text"
              name="phone"
              value={replaceLongDistanceChar(newItem.fullPhoneNum)}
              onChange={handleChangePhone}
            />
          ) : (
            item.fullPhoneNum
          )}
        </p>
      </div>
      <div className={`controls ${isEdit && 'is-edit'}`}>
        {isEdit ? (
          <button
            className="btn"
            tabIndex="0"
            onClick={() =>
              setTimeout(() => {
                cancelEditSpeedDialItem(item)
              }, 20) && updateSpeedDialItem(newItem)
            }
          >
            Save
          </button>
        ) : (
          <button
            className="btn--edit"
            tabIndex="0"
            onClick={() => editSpeedDialItem(item)}
          >
            ✏️
          </button>
        )}
        {isEdit ? (
          <button
            className="btn"
            tabIndex="0"
            onClick={() => cancelEditSpeedDialItem(item)}
          >
            Cancel
          </button>
        ) : (
          <button
            className="btn--round"
            tabIndex="0"
            onClick={() => deleteSpeedDialItem(item.sdCode)}
          >
            –
          </button>
        )}
      </div>
    </li>
  )
}
