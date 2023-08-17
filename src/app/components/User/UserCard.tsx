/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { Link } from 'react-router-dom'
import User from '../../@types/user'

interface _props {
    user: User
}

const UserCard: React.FC<_props> = ({ user }) => {
    return (
        <div className='p-4 m-4 bg-white rounded-sm shadow-md ' >
            <Link to={`/${user.id.name}`} className='hover:text-blue-500'><strong>Name:</strong> {user.name.first} {user.name.last}</Link>
            <p><strong>Phone:</strong>  {user.cell}</p>
            <p><strong>Gender: </strong> {user.gender}</p>
        </div>
    )
}


export default React.memo(UserCard)