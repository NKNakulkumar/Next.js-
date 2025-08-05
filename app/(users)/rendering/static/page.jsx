import db from "@/config/db.jsx";
import React from 'react'
export const revalidate = 20;

const StaticPage = async () => {

   const [users] = await db.execute("select * from users")
   console.log("Static users")
  return (
    <>
     {
  users.map((currelem) => (
    <ul key={currelem.id}>
      <li>ID: {currelem.id}</li>
      <li>Name: {currelem.name}</li>
      <li>Email: {currelem.email}</li>
      <li>Gender: {currelem.gender}</li>
      <li>Date of Birth: {currelem.date_of_birth.toDateString()}</li>
      <li>Salary: {currelem.salary}</li>
    </ul>
  ))
}

    </>
  )
}

export default StaticPage
