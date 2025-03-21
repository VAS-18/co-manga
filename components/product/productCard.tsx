import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import Image from "next/image";

const ProductCard = ({ product }: { product: any }) => {
    console.log(product.images[0])
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
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
    </Card>
  );
};

export default ProductCard;
