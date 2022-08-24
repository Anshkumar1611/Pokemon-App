import React from 'react'

function Searchbar({searchTerm,setSearchTerm}) {
    return (
        <div className='flex justify-center m-5  py-5 px-10 '>
            <input 
            type="text" 
            value={searchTerm}
             onChange={(e)=>setSearchTerm(e.target.value)} 
             placeholder="Search here ..." 
             className="input input-bordered input-primary w-full max-w-xs" />
        </div>
    )
}

export default Searchbar