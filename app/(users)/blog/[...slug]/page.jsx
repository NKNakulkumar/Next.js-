
const Blog = async(props) => {
    const slug = await props.params;
    console.log(slug)
  return (
    <div>
      <h1> Blog page</h1>
    </div>
  )
}

export default Blog
