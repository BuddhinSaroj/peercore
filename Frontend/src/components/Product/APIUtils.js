const BASE_URL = "http://localhost:8080/api";

export const getAllProducts = () => {
  return fetch(`${BASE_URL}/products`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error", error);
      throw error;
    });
};

export const updateStock = (productId, newStockQuantity) => {
  const url = `http://localhost:8080/api/products/${productId}`;

  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newStockQuantity),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error updating stock: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error updating stock:', error);
      throw error;
    });
};

export const getProductById = (productId) => {

  return fetch(`${BASE_URL}/products/${productId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error fetching product: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching product:', error);
      throw error;
    });
};



