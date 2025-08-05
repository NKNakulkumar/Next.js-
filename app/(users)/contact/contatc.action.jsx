"use server";

import db from "@/config/db";
import { redirect } from "next/navigation";
// import { ClientPageRoot } from "next/dist/client/components/client-page";

const contactaction = async (previousstate,  formdata) => {
// const fullname = formdata.get("fullname")
// const email = formdata.get("email")
// const message = formdata.get("message")

try {
const {fullname ,email,message}=Object.fromEntries(formdata.entries())
await db.execute(`INSERT INTO contact_form (fullname, email, message) VALUES (?, ?, ?)`, [fullname, email, message]);
console.log("formdata", fullname,email,message)
redirect("/")

// return {sucess:true,message:"Form Submitted Succesfully"}
} catch (error) {
  if(error.message==="NEXT_REDIRECT") throw error;
  console.log(error.message);
return {sucess:false,message:"Something error form submitting"}

}

}

export default contactaction
