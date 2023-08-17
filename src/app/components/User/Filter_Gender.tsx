import React from 'react';

interface _props {
    filteredGender: string | null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handle_GenderChange: (e: any) => void
}

const Filter_Gender:React.FC<_props> = ({ filteredGender, handle_GenderChange }) => {

    return (
        <div className='flex justify-center  lg:justify-start '>
            <div className='p-2 w-[80%] lg:w-[30rem] lg:-mt-2 m-5 shadow-md rounded-lg bg-white '>
                <h1 className='text-xl mb-4'>Change User Lists by Gender</h1>
                <div className='flex items-center '>
                    <span>All</span>
                    <input className='ml-2 h-5 w-5 rounded-md ' type="checkbox" name="gender" value="all" checked={filteredGender === "all"} onChange={handle_GenderChange} />
                    <span className='ml-2  text-[17px]'>Male</span>
                    <input className='ml-2 h-5 w-5 rounded-md' type="checkbox" name="gender" value="male" checked={filteredGender === "male"} onChange={handle_GenderChange} />
                    <span className='ml-2'>Female</span>
                    <input className='ml-2 h-5 w-5 rounded-md' type="checkbox" name='gender' value="female" checked={filteredGender === "female"} onChange={handle_GenderChange} />
                </div>
            </div>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Filter_Gender)