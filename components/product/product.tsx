const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit: number;
}) => {
  console.log(data);

  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mx-10">
          {data.map((product: any) => (
            <div>{product.name}</div>
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
