import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-80">
        <div className="flex justify-evenly mt-10">
          <Link href="/shop">
            <div className="mx-4 p-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded cursor-pointer">
              Shop
            </div>
          </Link>
          <Link href="/coins">
            <div className="mx-4 p-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded cursor-pointer">
              Coins
            </div>
          </Link>
          <Link href="/weather">
            <div className="mx-4 p-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded cursor-pointer">
              Weather
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
