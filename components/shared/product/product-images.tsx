"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className=" space-y-4 ">
      <Image
        src={images[current]}
        alt="product image"
        width={500}
        height={500}
        className="min-h-[300px] object-cover object-center m-auto rounded-sm"
      />
      <div className="flex mx-10">
        {images.map((image, index) => (
          <div key={image} onClick={()=>setCurrent(index)}  className={ cn('w-24 border-2 rounded mr-2 cursor-pointer hover:border-orange-500', current===index && 'border-orange-500')}>
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
