import React from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'

const User = ({ user, ...rest }) => {
  const handleDelete = () => rest.onDelete(user._id)

  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map(item => (
          <Qualitie key={item._id} {...item} />
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate} /5</td>
      <BookMark
        status={user.bookmark}
        onBookmark={() => rest.onBookmark(user._id)}
      />
      <td>
        <button
          className='btn btn-danger'
          onClick={() => handleDelete(user._id)}
        >
          delete
        </button>
      </td>
    </tr>
  )
}

export default User
