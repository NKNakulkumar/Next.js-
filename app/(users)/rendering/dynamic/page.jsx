import db from "@/config/db.jsx";
import { cache } from "react";
export const dynamic = "force-dynamic";


const DynamicPage  = async () => {
const users = await getuserlist();
  
  return (<>
    <h1 className="mt-20 mx-auto"> Dynamic Page data</h1>
   <Userslist users={users}/>
    </>
  )
}

export default DynamicPage


const Userslist =async()=>{
  const users = await getuserlist();
  return(
    <>
    <ul>
    {
users.map((currelem) => (
  <div key={currelem.id}>
    <li>ID: {currelem.id}</li>
    <li>Name: {currelem.name}</li>
  </div>
  
))
}
  </ul>
    </>
  )
}

const getuserlist=cache(async()=>{
  const [users] = await db.execute("select * from users")
  console.log("Dynamic users")
  return users;
})