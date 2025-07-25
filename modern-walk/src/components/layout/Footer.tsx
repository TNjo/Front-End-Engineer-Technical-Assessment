export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white m-0">Modern Walk</h3>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-300 no-underline transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-300 no-underline transition-colors hover:text-white">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-300 no-underline transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4">
          <p className="text-gray-300 text-sm text-center m-0">© 2024 Modern Walk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
