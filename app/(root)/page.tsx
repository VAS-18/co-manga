import { Button } from "@/components/ui/button"
import sampleData from "../db/sample-data/sample-data";
import ProductList from "@/components/product/product";

export const metadata = {
  title: 'Home'
}

const HomePage = () => {

  return ( 
      <ProductList data={sampleData.products} title={"Newest Arrivals!"} limit={5} />
   );
}
 
export default HomePage;