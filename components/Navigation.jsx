import Link from "next/link";

export default function Navigation() {
    return (
        <header className="fixed top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-md border-b border-purple-500/30 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center text-2xl text-black"> Logo
                <nav>
                    <ul className="flex gap-6 text-gray-700 text-sm font-medium">
                        <li><Link href="/"  className="relative inline-block text-black font-semibold   hover:text-blue-600 transition-colors duration-200 font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-800 after:transition-all after:duration-300 hover:after:w-full">Home</Link></li>
                        <li><Link href="/about"  className="relative inline-block text-black  hover:text-blue-600 transition-colors duration-200 font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-800 after:transition-all after:duration-300 hover:after:w-full">About</Link></li>
                        <li><Link href="/clientcomp"  className="relative inline-block text-black  hover:text-blue-600 transition-colors duration-200 font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-800 after:transition-all after:duration-300 hover:after:w-full">Client</Link></li>
                        <li><Link href="/servercomp"  className="relative inline-block text-black  hover:text-blue-600 transition-colors duration-200 font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-800 after:transition-all after:duration-300 hover:after:w-full">Server</Link></li>
                        <li><Link href="/contact"  className="relative inline-block text-black  hover:text-blue-600 transition-colors duration-200 font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-800 after:transition-all after:duration-300 hover:after:w-full">Contact</Link></li>
                        <li><Link href="/service"  className="relative inline-block  text-black  hover:text-blue-600 transition-colors duration-200 font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-800 after:transition-all after:duration-300 hover:after:w-full">Services</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}