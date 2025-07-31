export const getAllProducts = async () => {
  const res = await fetch('/api/products');
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`/api/products/${id}`);
  return res.json();
};
