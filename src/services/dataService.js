const categories = ["All", "Electronics", "Skincare", "Clothing"];

const products = [
  {
    id: "1",
    title: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description: "High quality wireless headphones with active noise cancellation."
  },
  {
    id: "2",
    title: "Hydrating Facial Cream",
    price: 24.99,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500",
    description: "Deeply hydrating facial cream with natural botanical extracts."
  },
  {
    id: "3",
    title: "Smart Watch Series",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description: "Track your fitness, heart rate, and notifications seamlessly."
  }
];

export const getCategories = () => categories;
export const getProducts = () => products;
export const getProductById = (id) => products.find((p) => p.id === id);