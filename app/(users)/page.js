import Image from "next/image"
import Link from "next/link"
import redux from '@/public/images/redux.webp'


export const metadata={
  title:"Home page",
  description:"This is an next.js application",
  authors:[
    {name:"Nakul kumar"},{name:"Nakul",url:"nakulmenuapp.netlify.app"},
  ],
  keywords:["next.js","react.js","react","fullstack"],
}

const Home=()=>{
  return(
    <>
     <section className="flex flex-col lg:flex-row items-center justify-between p-10 lg:p-20 gap-10">
      <div className="space-y-8 max-w-xl">
        <h1 className="text-4xl lg:text-5xl font-bold leading-snug text-white">
          Hello, Welcome to my new <br />
          <span className="text-purple-600">Next.js Application</span>
        </h1>
        <div className="flex space-x-4">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:from-purple-600 hover:to-purple-800 transition duration-300"
          >
            Join Us
          </Link>
          <Link
            href="https://github.com/NKNakulkumar"
            target="_blank"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:scale-105  hover:from-purple-600 hover:to-purple-800 transition duration-300"
          >
            GitHub
          </Link>
        </div>
      </div>

      <div className="relative w-100 h-80 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition duration-500">
        <Image
          src="/images/web.gif"
          alt="GIF image"
          fill
          quality={100}
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>

    


{/* images */}
<section className="container mx-auto px-4 py-8 mt-[60vh]">
  <div>
  <h2 className="text-center text-white text-4xl mb-4 font-bold tracking-wide [text-shadow:_2px_2px_8px_rgb(0_0_0_/_50%)]">Tech Stack</h2>

  </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-in-out hover:scale-[1.02]  hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] hover:border-2 hover:border-purple-500">
          <div className="p-4">
            <Image src="/images/Nodejs.jpg" width={200} height={200} alt="Node.js image" className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105"/>
            <p className="text-center mt-4 text-lg font-semibold text-gray-800">Node.js</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-in-out hover:scale-[1.02]  hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] hover:border-2 hover:border-purple-500">
          <div className="p-4 relative w-full h-full mx-auto my-auto">
            <Image src="/images/jsnew.webp" fill={true} alt="JavaScript image" className=" object-cover rounded-lg transition-transform duration-500 hover:scale-105"/>
            <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-lg font-semibold">JavaScript</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-in-out hover:scale-[1.02]  hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] hover:border-2 hover:border-purple-500">
          <div className="p-4">
            <Image src="/images/next.jpg" width={200} height={200} alt="Next.js image" className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105"/>
            <p className="text-center mt-4 text-lg font-semibold text-gray-800">Next.js</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-in-out hover:scale-[1.02]  hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] hover:border-2 hover:border-purple-500">
          <div className="p-4">
            <Image src="/images/react.jpg" width={200} height={200} alt="React.js image" className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105"/>
            <p className="text-center mt-4 text-lg font-semibold text-gray-800">React.js</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-in-out hover:scale-[1.02]  hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] hover:border-2 hover:border-purple-500">
          <div className="p-4">
            <Image src={redux} width={200} height={200} priority={false} placeholder="blur" blurDataURL="" alt="Redux image" className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105"/>
            <p className="text-center mt-4 text-lg font-semibold text-gray-800">Redux</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-in-out hover:scale-[1.02]  hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] hover:border-2 hover:border-purple-500">
          <div className="p-4">
            <Image src="/images/python.png" width={200} height={200} alt="Python image" className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105"/>
            <p className="text-center mt-4 text-lg font-semibold text-gray-800">Python</p>
          </div>
        </div>
</div>
</section>
    </>
  )
}

export default Home