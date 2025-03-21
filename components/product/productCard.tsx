import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

const ProductCard = ({ product }: { product: any }) => {
  console.log(product.images[0]);
  return (
    <Card className="w-full max-w-sm cursor-pointer group">
      <Link href={`/product/${product.slug}`}>
        <CardHeader className="items-center">
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.images[0]}
              alt={product.name}
              height={300}
              width={300}
              priority={true}
            />
          </Link>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500">
              {product.brand}
            </div>
            <div className=" text-xl font-bold group-hover:text-gray-500">
              {product.name}
            </div>
          </div>
          <div className="flex justify-between">
            <span>{product.rating}⭐</span>
            {product.stock > 0 ? (
              <p className="font-bold mt-2">₹{product.price}</p>
            ) : (
              <p className="text-destructive mt-2">NOT IN STOCK</p>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
