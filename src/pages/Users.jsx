import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setUsers] = useState([])

      useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/api/users')
      const userData = await response.json()
      console.log(userData)
      setUsers(userData)
    }

  return (
    <>
     <table border={1} cellPadding={8} cellSpacing={0}>
        <thead>
        <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
        </tr>
        </thead>
        <tbody>
            {users.map((user) => (
            <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>
            </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default Users