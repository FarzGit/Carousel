import React from 'react'
import './adminNavbar.css'

function AdminNavBar(){


    return(
        <>
    
            <div>
                <div className="h-[65px] w-[100%] bg-white">

                    <div className="h-[65px] w-[100%] flex justify-center items-center space-x-4">
                        <span className="font-medium cursor-pointer" >Home</span>
                        <span className="font-medium cursor-pointer">Upload</span>

                    </div>

                </div>
            </div>


        
        </>
    )
}

export default React.memo(AdminNavBar)