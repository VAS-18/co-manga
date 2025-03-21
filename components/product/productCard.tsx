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
        <CardContent className="text-xl font-bold flex flex-col hover:bg-red-500">
          <div className="text-xs text-gray-500">{product.brand}</div>
          <div className=" text-xl group-hover:text-gray-500">
            {product.name}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
