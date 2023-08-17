import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'

const ErrorPage = () => {
    return (
        <>
            <Header />
            <main className='mt-[10%]  flex justify-center p-[20px]'>
                <div className='w-[20rem] bg-white p-2 m-11 shadow-md '>
                    <h1 className='text-xl font-semibold'>404 - Page Not Found</h1>
                    <p className='text-md font-normal'>The page you are looking for does not exist.</p>
                    <Link to={'/'} className='bg-blue-500 px-2 text-white ' > Go Back</Link>
                </div>
            </main>
        </>
    )
}

export default ErrorPage