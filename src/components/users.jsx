import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const tableHeader = [
    'Имя',
    'Качества',
    'Профессия',
    'Встретился, раз',
    'Оценка',
    '',
  ]

  const handleDelete = userId => {
    setUsers(prevState => prevState.filter(user => user._id !== userId))
  }

  const formatNumber = number => {
    return number === 0
      ? 'Никто не'
      : number >= 2 && number <= 4
      ? number + ' человека'
      : number + ' человек'
  }

  const getBadgeClasses = number => {
    let classes = 'badge '
    classes += number === 0 ? 'bg-danger' : 'bg-primary'
    return classes
  }

  const renderPhrase = number => {
    return (
      <h3>
        <span className={getBadgeClasses(number)}>
          {formatNumber(number)} тусанет с тобой сегодня
        </span>
      </h3>
    )
  }

  const renderTableHeader = () => {
    return (
      <tr>
        {tableHeader.map(th => (
          <th key={th}>{th}</th>
        ))}
      </tr>
    )
  }

  const renderUsers = () => {
    return (
      users.length !== 0 &&
      users.map(user => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{renderQualities(user)}</td>
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
    )
  }

  const renderQualities = user => {
    return user.qualities.map(quality => {
      return (
        <span key={quality._id} className={'badge m-1 bg-' + quality.color}>
          {quality.name}
        </span>
      )
    })
  }

  if (users.length === 0) {
    return <>{renderPhrase(users.length)}</>
  }

  return (
    <>
      {renderPhrase(users.length)}
      <table className='table'>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </>
  )
}

export default Users
