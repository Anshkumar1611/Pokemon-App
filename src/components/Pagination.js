import React from 'react'

function Pagination({gotoprevPage,gotoNextPage}) {
  return (
    <div>
    {gotoprevPage && <button onClick={gotoprevPage}>prev</button>}
    {gotoNextPage && <button onClick={gotoNextPage}>next</button>}
    </div>
  )
}

export default Pagination