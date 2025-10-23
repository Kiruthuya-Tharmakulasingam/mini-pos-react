import React, { useEffect, useState } from 'react'

function Sales() {
     const [sales, setSales] = useState([])

    useEffect(() => {
        fetchSales()
    }, [])

    const fetchSales = async () => {
      const response = await fetch('http://localhost:3000/api/sales')
      const saleData = await response.json()
      console.log('Fetched sales:', saleData)
       if (saleData.success && Array.isArray(saleData.sales)) {
      setSales(saleData.sales)
    } else {
    console.error("Unexpected sales data", saleData)
  }
}

  return (
   <>
   <table border={1} cellPadding={8} cellSpacing={0}>
  <thead>
    <tr>
      <th>Sale ID</th>
      <th>Total</th>
      <th>Status</th>
      <th>Created At</th>
      <th>Items</th>
    </tr>
  </thead>
  <tbody>
    {sales.map(sale => (
      <tr key={sale._id}>
        <td>{sale._id}</td>
        <td>{sale.total}</td>
        <td>{sale.status}</td>
        <td>{new Date(sale.createdAt).toLocaleString()}</td>
         <td>
          <ul>
            {sale.items.map(item => (
              <li key={item._id}>
                {item.item.name} - Qty: {item.quantity} - Price: {item.price}
              </li>
            ))}
          </ul>
        </td>
      </tr>
    ))}
  </tbody>
</table>
   </>
  )
}

export default Sales