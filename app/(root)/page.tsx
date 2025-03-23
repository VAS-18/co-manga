import ProductList from "@/components/shared/product/product";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: 'Home'
}

const HomePage = async () => {

  const latestProducts = await getLatestProducts();
  const formattedProducts = latestProducts.map(product => ({
    ...product,
    rating: product.rating.toString()
  }));

  return ( 
      <ProductList data={formattedProducts} title={"Newest Arrivals!"} />
   );
}
 
export default HomePage;