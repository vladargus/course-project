import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = userId =>
    setUsers(users.filter(user => user._id !== userId))

  const renderPhrase = number => {
    const lastOne = Number(number.toString().slice(-1))
    return !number
      ? 'Никто не'
      : lastOne >= 2 && lastOne <= 4 && (number < 5 || number > 14)
      ? number + ' человека'
      : number + ' человек'
  }

  const renderedUsers = users.map(user => (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
        {user.qualities.map(item => (
          <span className={'badge m-1 bg-' + item.color} key={item._id}>
            {item.name}
          </span>
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate} /5</td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => handleDelete(user._id)}
        >
          delete
        </button>
      </td>
    </tr>
  ))

  return (
    <>
      <h2>
        <span className={'badge bg-' + (users.length ? 'primary' : 'danger')}>
          {renderPhrase(users.length) + ' тусанет с тобой сегодня'}
        </span>
      </h2>
      {users.length > 0 && (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Имя</th>
              <th scope='col'>Качества</th>
              <th scope='col'>Профессия</th>
              <th scope='col'>Встретился, раз</th>
              <th scope='col'>Оценка</th>
              <th />
            </tr>
          </thead>
          <tbody>{renderedUsers}</tbody>
        </table>
      )}
    </>
  )
}

export default Users
