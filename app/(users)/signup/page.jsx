"use client"
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signup() {

 const routers = useRouter() 
//  const [state,setstate]=useState()
const [formdata,setformdata]=useState({
  username:"",
  Password:"",
})
const handlechange=(e)=>{
  setformdata({
    ...formdata,[e.target.name]:e.target.value,
  })
}

const Handlesubmit=()=>{
// setstate({sucess:true,message:"Form Submitted Succesfully"})

setformdata({
  username:"",
  Password:""
})

routers.push("/");
}

  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center justify-center">
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="absolute inset-0">
        <Image
          src="/images/bg_blue.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-100 blur-sm"
        />
      </div>
      <div className="relative z-10 bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Signup</h2>
        <form className="space-y-4" onSubmit={handlechange}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <div className="mt-1 relative">
              <input
                type="text"
                id='username'
                name='username'
                className="w-full px-3 py-2 text-black  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Username"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1 relative">
              <input
                type="password"
                className="w-full px-3 py-2 text-black  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                id='Password'
                name='Password'
              />
         
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-700">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={Handlesubmit}
          >
            Login
          </button>
          <p className="text-center text-sm text-gray-600">
            Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}