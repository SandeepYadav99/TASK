/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react'
import User from '../../@types/user'
import { Pagination } from '@mui/material'
import Filter_Gender from './Filter_Gender'
import UserCard from './UserCard'

interface _props {
    userLists: User[],
    filteredGender: string | null,
    setFilteredGender: (e: any) => void,
    isLoading: boolean
}

const UserList: React.FC<_props> = ({ userLists, filteredGender, setFilteredGender, isLoading }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const usersPerPage = 10;

    const handle_GenderChange = (e: any) => {
        setCurrentPage(1);
        setFilteredGender(e.target.value)
    }

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = userLists.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


    return (
        <>
            <Filter_Gender filteredGender={filteredGender} handle_GenderChange={handle_GenderChange} />
            <h1 className='text-center text-xl font-semibold'>User Lists</h1>
            {isLoading ? <h1 className='text-center text-3xl mt-[5%]'>DATA IS LOADING... </h1> : <div>  <div className='py-4  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {currentUsers.map((user) => {
                    return (
                        <UserCard user={user} key={user.cell}/>
                    )
                })}
            </div>
                <Pagination className='flex justify-center -mt-5 ' color='primary' count={Math.ceil(userLists.length / usersPerPage)}
                    page={currentPage}
                    onChange={(_event, page) => paginate(page)} />
            </div>}
        </>
    )
}

export default React.memo(UserList)