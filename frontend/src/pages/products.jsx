import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    const response = await fetch("http://localhost:8080/sneakers");
    if (response.ok) {
      const data = await response.json();
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-5 gap-4 px-8">
        {products?.length > 0 &&
          products.map((product) => (
            <div className="flex flex-col border rounded p-4" key={product.id}>
              <img src={"http://localhost:8080/" + product.image} />
              <p className="font-bold">{product.model}</p>
              <p>{product.price}</p>

              <hr className="my-6" />

              <div className="flex flex-row space-x-2">
                <button className="border-2 text-blue-500 rounded border-blue-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-shopping-cart"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    color="inherit"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                  </svg>
                </button>
                <button className="bg-emerald-500 w-full text-white font-semibold capitalize rounded py-1">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
