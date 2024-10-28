import Link from 'next/link'

export default function Courses() {
  return (
    <div className="bg-patticolor p-10 sm:px-6 lg:px-8 grid items-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-5">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl text-center sm:text-left mb-4 sm:mb-0">
          Learn the Cost of your <span className="font-bold">Accounting Solutions</span> Right Now!
        </h2>
        <Link href="/pricing" className="bg-primary text-white font-bold py-2 px-4  transition duration-300 ease-in-out transform hover:scale-105">
          VIEW ALL PRICING
        </Link>
      </div>
    </div>
  )
}