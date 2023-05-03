import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center p-20">
      <h1 className="text-4xl font-bold">Welcome The T-shirt store</h1>
      <Link
        href={`/products`}
        className="mt-20 inline-block bg-blue-500 text-white rounded-md hover:bg-blue-600 p-4"
      >
        View our collection here
      </Link>
    </main>
  );
}
