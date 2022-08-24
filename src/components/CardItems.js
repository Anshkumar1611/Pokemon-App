import React from 'react'

function CardItems({data}) {
    const { name,url } =data;
    return (
        <div className=' py-5 px-5 ' >
            <div className="card w-60 min-h-full  bg-base-100 shadow-xl ">
                <figure ><img src={url} alt="pic" className='w-full h-80' /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Now</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardItems