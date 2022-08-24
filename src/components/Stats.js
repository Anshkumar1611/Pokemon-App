import React from 'react'

function Stats() {
    return (
        <div className='flex items-center justify-center my-12 bg-base-200'>
            <div className="stats shadow flex flex-col w-full bg-base-900 md:flex-row">

                <div className="stat place-items-center p-2">
                    <div className="stat-title text-stone-50">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc text-stone-50">From January 1st to February 1st</div>
                </div>

                <div className="stat place-items-center p-2">
                    <div className="stat-title text-stone-50">Users</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc text-stone-50">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center p-2">
                    <div className="stat-title text-stone-50">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc text-stone-50">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>


    )
}

export default Stats