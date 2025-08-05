 
const api ="https://jsonplaceholder.typicode.com/users"
 
 const Servercomp=async()=>{
    const res = await fetch(api)
    const data = await res.json()
    // console.log(data)

    return(
        <>
        <h1 className="mt-20">Server Component</h1>
        <div className="grid grid-cols-3 gap-5 text-center space-x-6">
           <ul>
            {
                data.map((currelem,index)=>{
                    return (
                    <li key={index}>{currelem.id}-{currelem.username}</li>
            
                )
                })
            }
           </ul>
        </div>
        </>
    )
}
export default Servercomp;