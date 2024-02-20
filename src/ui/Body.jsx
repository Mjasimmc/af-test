import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Body = ({ children }) => {
    return (<>
        <Header />
        <div className="min-h-[90vh]  pt-[6rem] p-4 w-full  text-center " >
            <Outlet />
        </div>
    </>
    );
}

export default Body;
