import { Product } from "../../types";
import ToggleWishlistButton from "./components/add-button";

async function getProducts() {
  const products: Product[] = [
    {
      id: 1,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Men's Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Aspen White",
    },
    {
      id: 3,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Charcoal",
    },
    {
      id: 4,
      name: "Artwork Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Iso Dots",
    },
  ];
  return products;
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Our finest T-shirts
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 bg-slate-200 dark:bg-slate-800 p-4 rounded-md">
          {products.map((product) => (
            <div key={product.id} className="">
              <div className="relative">
                <div className="min-h-80 w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-800 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 dark:text-gray-300">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {product.price}
                  </p>
                  <ToggleWishlistButton product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
