import Link from "next/link"

export default function ModernWalkHeader() {
  return (
    <header className="w-full bg-white border-b-2 border-gray-200 py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <Link href="/" className="block">
          <h1 className="font-bold text-5xl leading-tight text-center text-gray-900 m-0 cursor-pointer hover:text-gray-700 transition-colors duration-200">
            Modern Walk
          </h1>
        </Link>
      </div>
    </header>
  )
}