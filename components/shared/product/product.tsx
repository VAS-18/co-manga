import { Product } from "@/types";
import ProductCard from "./productCard";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {


  const limitedData = limit ? data.slice(0, limit) : data;
  console.log(limitedData);
  return (
    <div className="m-10">
      <h2 className="h2-bold mb-4 mx-10">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mx-10">
          {limitedData.map((product: Product) => (
            <ProductCard key={product.slug} product={product}/>
          ))}
        </div>
      ) : (
        <div>
          <p>SDADSSA</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
