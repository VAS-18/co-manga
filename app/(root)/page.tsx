import ProductList from "@/components/product/product";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: 'Home'
}

const HomePage = async () => {

  const latestProducts = await getLatestProducts();

  return ( 
      <ProductList data={latestProducts} title={"Newest Arrivals!"} />
   );
}
 
export default HomePage;