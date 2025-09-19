export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center text-xl font-bold text-blue-600 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
            </a>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Building beautiful web experiences with React & Tailwind.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
              <li><a href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100">
              Follow Us
            </h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.2 4.2 0 0 0 1.84-2.32 8.19 8.19 0 0 1-2.6 1 4.11 4.11 0 0 0-7 3.74A11.66 11.66 0 0 1 3.16 4.9a4.1 4.1 0 0 0 1.27 5.48 4.06 4.06 0 0 1-1.85-.5v.05a4.11 4.11 0 0 0 3.3 4 4.2 4.2 0 0 1-1.85.07 4.11 4.11 0 0 0 3.83 2.85A8.25 8.25 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.18 8.18 0 0 0 22.46 6z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.62-1.3 1.3V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400" aria-label="GitHub">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.25c0 4.51 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.14-1.52-1.14-1.52-.93-.65.07-.64.07-.64 1.03.07 1.57 1.08 1.57 1.08.91 1.59 2.38 1.13 2.96.87.09-.67.36-1.13.65-1.39-2.22-.26-4.56-1.13-4.56-5a3.93 3.93 0 0 1 1.04-2.74c-.1-.27-.45-1.37.1-2.86 0 0 .84-.27 2.75 1.05A9.34 9.34 0 0 1 12 6.8a9.34 9.34 0 0 1 2.5.34c1.9-1.32 2.75-1.05 2.75-1.05.55 1.49.2 2.59.1 2.86.65.71 1.04 1.65 1.04 2.74 0 3.88-2.35 4.73-4.58 4.98.37.33.69.98.69 1.98v2.94c0 .26.18.57.69.48A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
