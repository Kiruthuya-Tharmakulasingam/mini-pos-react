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
     <table border={1} cellPadding={8} cellSpacing={0} style={styles.table}>
        <thead>
        <tr>
            <th style={styles.th}>User ID</th>
            <th style={styles.th}>User Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Password</th>
            <th style={styles.th}>Role</th>
        </tr>
        </thead>
        <tbody>
            {users.map((user, index) => (
            <tr key={user._id} style={index % 2 ? styles.trHover : null}>
                <td style={styles.td}>{user._id}</td>
                <td style={styles.td}>{user.username}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>{user.password}</td>
                <td style={styles.td}>{user.role}</td>
            </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

const styles = {
  table: {
    borderCollapse: "collapse",
    width: "100%",
    marginTop: "20px",
    fontFamily: "Arial, sans-serif",
  },
  th: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
    backgroundColor: "#4CAF50",
    color: "white",
  },
  td: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
  },
  trHover: {
    backgroundColor: "#f5f5f5",
    cursor: "pointer",
  },
};

export default Users