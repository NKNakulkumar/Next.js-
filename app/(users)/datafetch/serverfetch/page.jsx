
// const Servercomp = async (props) => {

//   const searchparams = await props.searchParams;
//   const username = searchparams?.name;
//   const res = await fetch(`https://api.genderize.io?name=${username}`);
//   const data = await res.json();
//   console.log(data) 

// await new Promise((resolve)=>{
// setTimeout(() => {
//   resolve();
// }, 2000);
// })

//   if (!username || username.trim() === "")
//   return(
//     <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100 flex items-center justify-center p-4">
//     <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full text-center">
//       <h1 className="text-lg text-black font-medium mb-2">No Name provided</h1>
//       <p className="text-gray-600">Fill the name in a ?name=</p>
//     </div>
//   </div>
  
//   )


//   return (
//     <div className="pt-20 flex justify-center">
//   <div
//     className={`rounded-xl shadow-lg p-6 w-80 text-white transition-all duration-300 ${
//       data.gender === 'male'
//         ? 'bg-blue-400 border-blue-500'
//         : data.gender === 'female'
//         ? 'bg-pink-400 border-pink-500'
//         : 'bg-gray-300 border-gray-400'
//     } border-4`}
//   >
//     <h1 className="text-2xl font-bold mb-2 capitalize">{data.name}</h1>
//     <h2 className="text-lg font-medium mb-1">Gender: {data.gender || "Unknown"}</h2>
//      <h2 className="text-lg font-medium">
//       Probability:{" "}
//       <span className="font-semibold">
//         {data.probability ? `${(data.probability * 100).toFixed(1)}%` : "N/A"}
//       </span>
//     </h2>
//   </div>

// </div>

//   );
// };

// export default Servercomp;
