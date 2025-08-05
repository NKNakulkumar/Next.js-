import db from '@/config/db.jsx';

const Static = async () => {
  const [rows] = await db.execute('SELECT * FROM users');
  console.log(rows);

  return (
    <div>
      <h1 className=' mt-20 m-auto'>Hi FullStack Users Database</h1>
    </div>
  );
};

export default Static;
