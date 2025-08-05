// "use client";
// import { useEffect, useState } from "react";
// import Counter from "./counter";



// const Clientcomp=()=>{

// const [apidata,setapidata]=useState([])


// const api ="https://jsonplaceholder.typicode.com/users"

// const getapicall=async()=>{
//     const res = await fetch(api)
//     const data = await res.json()
//     console.log(data)
//     setapidata(data);
//     }

// useEffect(() => {
    
// getapicall()
// }, []);


//     return(
//         <>
//         <h1 className="mt-20">Clientcomp Component</h1>
//         <button className="bg-blue-500 px-4 py-4 rounded-full" onClick={()=>alert("Hello Servercomp component")}>Click me</button>
// <Counter/>

//         <div className="grid grid-cols-3 gap-5 text-center">
//            <ul>
//             {
//                 apidata.map((currelem,index)=>{
//                     return <li key={index}>{currelem.username}</li>
//                 })
//             }
//            </ul>
//         </div>
//         </>
//     )
// }
// export default Clientcomp;