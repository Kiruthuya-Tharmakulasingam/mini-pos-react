import React, { useEffect, useState } from 'react'

function Customers() {
     const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetchCustomers()
    }, [])

    const fetchCustomers = async () => {
      const response = await fetch('http://localhost:3000/api/customers')
      const customerData = await response.json()
      console.log('Customers:', customerData)
      setCustomers(customerData)
    }

  return (
   <>
    <table border={1} cellPadding={8} cellSpacing={0} style={styles.table}>
        <thead>
        <tr>
            <th style={styles.th}>Customer ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Address</th>
        </tr>
        </thead>
        <tbody>
            {customers.map((customer, index) => (
            <tr key={customer._id} style={index % 2 ? styles.trHover : null}>
                <td style={styles.td}>{customer._id}</td>
                <td style={styles.td}>{customer.name}</td>
                <td style={styles.td}>{customer.email}</td>
                <td style={styles.td}>{customer.phone}</td>
                <td style={styles.td}>{customer.address}</td>
            </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

 const styles = {
    table: {
      borderCollapse: 'collapse',
      width: '100%',
      marginTop: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    th: {
      border: '1px solid #dddddd',
      textAlign: 'left',
      padding: '8px',
      backgroundColor: '#4CAF50',
      color: 'white',
    },
    td: {
      border: '1px solid #dddddd',
      textAlign: 'left',
      padding: '8px',
    },
    trHover: {
      backgroundColor: '#f5f5f5',
      cursor: 'pointer',
    },
  }

export default Customers