
const page = async(props) => {
  const user = await props.params;
  console.log(user)
  return (
    <div>
      <h1 className="pt-20">Dynamic  name  - {user.username}</h1>
    </div>
  )
}

export default page
