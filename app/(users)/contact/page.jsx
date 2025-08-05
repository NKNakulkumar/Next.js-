"use client"

import { useActionState, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import contactaction from "./contatc.action";
import { useFormStatus } from "react-dom";

// export const metadata={
//   title:"Contact page",
//   description:"This is an contact page.",
//   authors:[
//     {name:"Nakul kumar"},{name:"Nakul",url:"nakulmenuapp.netlify.app"},
//   ],
//   keywords:["next.js","react.js","react","fullstack"],
// }

const interests = [
  "UI/UX design",
  "Web design",
  "Graphic design",
  "Design system",
  "Other",
];



const Contact = () => {

  const [selectedInterest, setSelectedInterest] = useState("");

  //  const contactaction=(formdata )=>{
  //     const {fullname ,email,message}=Object.fromEntries(formdata.entries())
  //     console.log("formdata", fullname,email,message, selectedInterest);
  //   } 
  const [state, formAction, isPending] = useActionState(contactaction, null)

  return (
    <div className="min-h-screen mt-6 bg-[#b0007b] text-white p-4 flex items-center justify-center ">
      <div className="max-w-4xl w-full bg-[#1b0033] rounded-2xl grid md:grid-cols-2 overflow-hidden shadow-lg">
        {/* Left Section */}
        <div className="p-6 md:p-8 space-y-6 text-sm cursor-pointer">
          <div>
            <h1 className="text-2xl font-bold leading-tight">
              Let’s discuss on something{" "}
              <span className="text-[#e400a3]">cool</span> together
            </h1>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 border border-transparent hover:border-[#e400a3] py-1.5 px-1.5 rounded-md w-fit">
              <FaEnvelope className="text-[#e400a3]" />
              <span>SaulDesign@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 border border-transparent hover:border-[#e400a3] py-1.5 px-1.5 rounded-md w-fit">

              <FaPhoneAlt className="text-[#e400a3]" />
              <span>+123 456 789</span>
            </div>
            <div className="flex items-center gap-3 border border-transparent hover:border-[#e400a3] py-1.5 px-1.5 rounded-md w-fit">
              <FaMapMarkerAlt className="text-[#e400a3]" />
              <span>123 Street 456 House</span>
            </div>
          </div>
          <div className="flex gap-4 text-base pt-4">
            <FiFacebook className="hover:text-[#e400a3] cursor-pointer" />
            <FiInstagram className="hover:text-[#e400a3] cursor-pointer" />
            <FiTwitter className="hover:text-[#e400a3] cursor-pointer" />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white text-black p-6 md:p-8 rounded-l-2xl md:rounded-l-none text-sm">
          <form className="space-y-4" action={formAction}>
            <div>
              <label className="font-medium mb-1 block">I’m interested in…</label>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`px-3 py-1 rounded-md border cursor-pointer text-xs ${selectedInterest === item
                        ? "bg-[#b0007b] text-white"
                        : "border-gray-300 text-gray-700"
                      }`}
                    onClick={() => setSelectedInterest(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#b0007b] mb-1">
                Enter name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border-b-2 border-[#b0007b] py-1.5 focus:outline-none"
                id="fullname"
                name="fullname"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#b0007b] mb-1">
                Enter email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border-b border-gray-300 py-1.5 focus:outline-none"
                id="email"
                name="email"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#b0007b] mb-1">
                Enter message
              </label>
              <textarea
                type="text"
                rows="3"
                placeholder="Your message"
                className="w-full border-b border-gray-300 py-1.5 focus:outline-none resize-none"
                id="message"
                name="message"
              />
            </div>
            <Submit/>
          </form> 
          <section className="mt-5">
            {
              state && (
                <p className={`p-4  text-center rounded-full ${state.sucess? 'bg-green-500':"bg-red-500"}`}>
                  {state.message}
                </p>
              )
            }
          </section>
        </div>
      </div>
    </div>
  );
}
export default Contact


const Submit=()=>{
 const {pending,data,method,action}= useFormStatus();
  return(
    <>
    <button
              type="submit"
              disabled={pending}
              className="bg-[#b0007b] text-white py-2 px-4  cursor-pointer rounded-md flex items-center gap-2 hover:bg-[#930063] transition"
            >
             {
  pending ? (
    <span>Loading...</span>
  ) : (
    <>
      <FaPaperPlane />
      Send Message
    </>
  )
}

            </button>
    </>
  )
}