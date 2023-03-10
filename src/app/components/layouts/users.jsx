import React from 'react'
import { useParams } from 'react-router-dom'
import UserPage from '../userPage'
import UsersList from '../usersList'

const Users = () => {
  const params = useParams()
  const { userId } = params
  return <div>{userId ? <UserPage userId={userId} /> : <UsersList />}</div>
}

export default Users
