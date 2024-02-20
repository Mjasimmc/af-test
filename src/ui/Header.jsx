import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full h-[5rem] fixed bg-[#c4c4c4] flex justify-between  font-[500] text-[20px] items-center max-md:px-2 duration-500 md:px-8'>
            <p>Test</p>
            <div className="flex items-center  gap-4 text-[16px] ">
                <p className='cursor-pointer' onClick={() => navigate('/')}>Home</p>
                <p className='cursor-pointer' onClick={() => navigate('/about')}>About</p>
            </div>
        </div>
    );
}

export default Header;
