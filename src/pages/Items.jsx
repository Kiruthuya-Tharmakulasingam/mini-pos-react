import React, { useEffect, useState } from "react";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch("http://localhost:3000/api/items");
    const itemsData = await response.json();
    console.log(itemsData);

    if (itemsData.success && Array.isArray(itemsData.items)) {
      setItems(itemsData.items);
    } else {
      setItems(itemsData);
    }
  };

  return (
    <>
      <table border={1} cellPadding={8} cellSpacing={0} style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Item ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>SKU</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Stock</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Created At</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item, index) => (
          <tr key={item._id} style={index % 2 ? styles.trHover : null}>
            <td style={styles.td}>{item._id}</td>
            <td style={styles.td}>{item.name}</td>
            <td style={styles.td}>{item.sku}</td>
            <td style={styles.td}>{item.description}</td>
            <td style={styles.td}>{item.price}</td>
            <td style={styles.td}>{item.stock}</td>
            <td style={styles.td}>{item.category}</td>
            <td style={styles.td}>
              {new Date(item.createdAt).toLocaleString()}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
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

export default Items;
