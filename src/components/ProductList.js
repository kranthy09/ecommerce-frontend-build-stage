// src/components/ProductList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td><Link to={`/products/${product.id}`}>{name}</Link></td>
      <td>{product.price}</td>
    </tr>
  );
}
function ProductTable({ filterText, inStockOnly }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    const accessToken = localStorage.getItem('accessToken');
    const headers = `Authorization: Bearer ${accessToken}`
    axios.get('http://127.0.0.1:8000/api/products/', {headers: headers})
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.description.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;

// const ProductList = ({filterText, inStockOnly}) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Replace with your API endpoint
//     const accessToken = localStorage.getItem('accessToken');
//     const header = `Authorization: Bearer ${accessToken}`
//     axios.get('http://127.0.0.1:8000/api/products/', {headers: header})
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error('There was an error fetching the products!', error);
//       });
//   }, []);

//   return (
//     <div style={styles.container}>
//       <h2>Product List</h2>
//       <ul style={styles.productList}>
//         {products.map((product) => (
//           <li key={product.id} style={styles.productItem}>
//             <Link to={`/products/${product.id}`} style={styles.productLink}>
//               {product.name} - ${product.price}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '1rem',
//   },
//   productList: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   productItem: {
//     margin: '1rem 0',
//   },
//   productLink: {
//     textDecoration: 'none',
//     color: '#333',
//   },
// };

// export default ProductList;
