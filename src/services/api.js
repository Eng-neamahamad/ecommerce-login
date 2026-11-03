import axios from 'axios';

// المسار الأساسي لـ FakeStore API
const BASE_URL = 'https://fakestoreapi.com';

// 1. جلب قائمة التصنيفات
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// 2. جلب المنتجات (الكل أو حسب التصنيف)
export const fetchProducts = async (category = null) => {
  try {
    const url = category && category !== 'All' 
      ? `${BASE_URL}/products/category/${category}`
      : `${BASE_URL}/products`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// 3. جلب تفاصيل منتج معين بواسطة الـ ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};

// 4. جلب إعلانات البانر الهيرو
export const fetchBanners = async () => {
  // بيانات بانرات ثابته مهيأة كـ Promise لتبدو كاستدعاء API
  return [
    {
      id: 1,
      title: "خصومات الصيف الكبرى!",
      description: "احصل على أفضل العروض على الملابس والإلكترونيات",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      category: "electronics"
    },
    {
      id: 2,
      title: "أحدث موضة للرجال والنساء",
      description: "تصفح أحدث التشكيلات العصرية الآن",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      category: "women's clothing"
    }
  ];
};