import React, { useEffect, useState } from 'react'

function Sales() {
     const [sales, setSales] = useState([])

    useEffect(() => {
        fetchSales()
    }, [])

    const fetchSales = async () => {
      const response = await fetch('http://localhost:3000/api/sales')
      const saleData = await response.json()
      console.log('Sales:', saleData)
       if (saleData.success && Array.isArray(saleData.sales)) {
      setSales(saleData.sales)
    } else {
    console.error("Unexpected sales data", saleData)
  }
}

  return (
   <>
   <table border={1} cellPadding={8} cellSpacing={0} style={styles.table}>
  <thead>
    <tr>
      <th style={styles.th}>Sale ID</th>
      <th style={styles.th}>Total</th>
      <th style={styles.th}>Status</th>
      <th style={styles.th}>Created At</th>
      <th style={styles.th}>Items</th>
    </tr>
  </thead>
<tbody>
  {sales.map((sale, index) => (
    <tr key={sale._id} style={index % 2 ? styles.trHover : null}>
      <td style={styles.td}>{sale._id}</td>
      <td style={styles.td}>{sale.total}</td>
      <td style={styles.td}>{sale.status}</td>
      <td style={styles.td}>{new Date(sale.createdAt).toLocaleString()}</td>
      <td style={styles.td}>
        <ul>
          {sale.items.map((item, idx) => (
            <li key={item._id} style={idx % 2 ? styles.trHover : null}>
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

export default Sales