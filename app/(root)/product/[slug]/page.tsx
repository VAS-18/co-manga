import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

const ProductDetails = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Image col */}
          <div className="col-span-2">{/* Image col */}</div>
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p className="bg-gray-500 text-gray-300 w-16 px-2 rounded">{product.category}</p>
              <p>{product.brand}</p>
              <h3 className="h3-bold">{product.name}</h3>
              <p className="font-semibold text-gray-400">
                Synopsis : {product.description}
              </p>
              <p>
                {product.rating} of {product.numReviews} Reviews
              </p>
              <div className="flex flex-col sm:flex-row sm: items-center gap-3">
                <div className="w-auto bg-green-200 text-green-800 px-5 py-2 flex">
                    <div className="text-4xl">
                        ₹
                    </div>
                  <div className="mt-auto text-3xl">
                  {product.price}/-
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Card>
                <CardContent>
                    <div className="mb-2 flex justify-between"></div>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
