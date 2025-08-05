import db from '@/config/db';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const [users] = await db.execute('SELECT id FROM users'); 
  return users.map((user) => ({ id: user.id.toString() }));
}

const UserDetail = async(props) => {
const params = await props.params; 
console.log("Params",params);

const [[userslist]]=  await db.execute(`select * from users where id =?`,[params.id]);
console.log("Users data",userslist);

const formdate = (datestring)=>{
return new Date(datestring).toLocaleDateString("en-Us",{
    year:"numeric",
    month:"long",
    day:"numeric"
})
}

if(!userslist) return notFound();

  return (
    <div className="max-w-sm mx-auto mt-30 bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-xl m-4">
  
    <div className="flex items-center px-4 py-2 gap-4 bg-gradient-to-r from-blue-500 to-purple-700  max-w-full">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
        {userslist.name?.charAt(0).toUpperCase()}
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white">{userslist.name}</h2>
        <p className="text-sm  text-white">ID: {userslist.id}</p>
      </div>
    </div>
    <div className="px-4 py-4 ">
    <div className="mt-6 space-y-3 text-sm text-gray-700">
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0v0m0 0h.01M12 21H6.312c-.732 0-1.393-.4-1.684-1.049A4.015 4.015 0 014 16.5V7.5C4 6.12 5.12 5 6.5 5h11C18.88 5 20 6.12 20 7.5V16.5c0 1.38-1.12 2.5-2.5 2.5H12z" />
        </svg>
        <p>{userslist.email}</p>
      </div>

      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h.01M15 11h.01M12 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <p>{formdate(userslist.date_of_birth)}</p>
      </div>
      <div className="flex flex-col gap-2 text-sm text-gray-700 mt-4">

{/* Gender */}
<div className="flex items-center gap-2">
  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a4 4 0 100-8 4 4 0 000 8zm0 0v6m0-6h6m-6 0H6" />
  </svg>
  <span className="text-gray-800">{userslist.gender}</span>
</div>

{/* Created At */}
<div className="flex items-center gap-2">
  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
  <p className="text-gray-800">{formdate(userslist.created_at)}</p>
</div>

</div>


      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM9 20V10h6v10a2 2 0 01-2 2H11a2 2 0 01-2-2zm-3-4H4a2 2 0 01-2-2V8a2 2 0 012-2h2m12 10h2a2 2 0 002-2V8a2 2 0 00-2-2h-2" />
        </svg>
        <p>${userslist.salary.toLocaleString()}</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default UserDetail