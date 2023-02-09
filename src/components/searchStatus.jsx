import React from 'react'

const SearchStatus = ({ length }) => {
  const renderPhrase = () => {
    const lastOne = Number(length.toString().slice(-1))
    return !length
      ? 'Никто не'
      : lastOne >= 2 && lastOne <= 4 && (length < 5 || length > 14)
      ? length + ' человека'
      : length + ' человек'
  }

  return (
    <h2>
      <span className={'badge bg-' + (length ? 'primary' : 'danger')}>
        {renderPhrase() + ' тусанет с тобой сегодня'}
      </span>
    </h2>
  )
}

export default SearchStatus
