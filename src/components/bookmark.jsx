import React from 'react'

const BookMark = ({ status, ...rest }) => {
  const toggleBookmark = () => {
    return status ? (
      <i className='bi bi-bookmark-fill'></i>
    ) : (
      <i className='bi bi-bookmark'></i>
    )
  }
  return (
    <td>
      <button className='btn btn-outline-secondary' onClick={rest.onBookmark}>
        {toggleBookmark()}
      </button>
    </td>
  )
}

export default BookMark
