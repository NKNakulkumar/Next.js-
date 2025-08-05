'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function NotFound() {

  const router = useRouter();
  return (
    <div className="relative w-screen min-h-screen bg-black flex items-center justify-center flex-col">
      <img
        src="/images/notfound.gif"
        alt="404 Not Found gif"
        className="object-contain max-w-md max-h-md mb-6 rounded-md"
      />
      <div className='flex flex-row gap-4'>
      <Link
        href="/"
        className="relative inline-block text-white bg-green-400 px-5 py-2 rounded-full  hover:text-blue-600 transition-colors cursor-pointer duration-200 font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-800 after:transition-all after:duration-300 hover:after:w-full"
      >
         Home
      </Link>
      <button onClick={() => router.back()} className="relative inline-block text-white bg-green-400 px-5 py-2 rounded-full cursor-pointer  hover:text-blue-600 transition-colors duration-200 font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-800 after:transition-all after:duration-300 hover:after:w-full">
      Go Back</button>
      </div>
    </div>
  );
} 