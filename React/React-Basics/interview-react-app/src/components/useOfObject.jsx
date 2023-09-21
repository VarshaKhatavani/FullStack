export default function UseOfObject() {
  let products = [
    { id: 1, name: "Laptop", brand: "HP", price: 55000 },
    { id: 2, name: "Laptop", brand: "DELL", price: 40000 },
    { id: 3, name: "Mouse", brand: "Logitech", price: 500 },
  ];
  return (
    <>
      <h1>I'm iterative component</h1>
      <ul>
        {products.map((prd) => {
          return (
            <div key={prd.id}>
              Name: {prd.name}, Company : {prd.brand} and Price : {prd.price}
            </div>
          );
        })}
      </ul>
    </>
  );
}
