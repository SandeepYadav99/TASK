import { useParams, Link } from 'react-router-dom';
import User from '../../@types/user';
import fetchUserLists from '../../hoc/fetchUserLists';



const UserDetails = () => {
  const query = useParams();

  const { isLoading, userLists } = fetchUserLists(50, null)
  const filteredLists = userLists.filter((user: User) => user.id.name === query.userId);

  return (
    <>
      <div className='flex justify-around items-center  flex-wrap p-[20px] '>
        {isLoading && <h1 className='text-center text-3xl '>DATA IS LOADING... </h1>}
        {!isLoading && filteredLists.map((user) => {
          return (
            <div className='bg-white w-full lg:w-[30rem] p-2 shadow-md m-4' key={user.cell}>
              <img src={user.picture.large} alt='Assiginment' className='float-left mr-5' />
              <div>
                <p><strong>Name:</strong> {user.name.title} {user.name.first} {user.name.last}</p>
                <p><strong>Email: </strong> {user.email}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='text-center '>
        <Link to={'/'} className='bg-gray-500 p-2 text-white rounded-md' > Go Back</Link>
      </div>
    </>
  )
}

export default UserDetails