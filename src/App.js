import React, { useState } from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './api'

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = userId =>
    setUsers(users.filter(user => user._id !== userId))

  const handleToggleBookmark = id => {
    const newUsers = users.map(user => {
      return user._id !== id ? user : { ...user, bookmark: !user.bookmark }
    })
    setUsers(newUsers)
  }

  return (
    <div>
      <SearchStatus length={users.length}></SearchStatus>
      <Users
        users={users}
        onDelete={handleDelete}
        onBookmark={handleToggleBookmark}
      ></Users>
    </div>
  )
}

export default App
