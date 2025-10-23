import React, { useEffect, useState } from 'react'

function Customers() {
     const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetchCustomers()
    }, [])

    const fetchCustomers = async () => {
      const response = await fetch('http://localhost:3000/api/customers')
      const customerData = await response.json()
      console.log(customerData)
      setCustomers(customerData)
    }

  return (
   <>
    <table border={1} cellPadding={8} cellSpacing={0}>
        <thead>
        <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
        </tr>
        </thead>
        <tbody>
            {customers.map((customer) => (
            <tr key={customer._id}>
                <td>{customer._id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
            </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default Customers