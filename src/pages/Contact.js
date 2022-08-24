import React from 'react'

function Contact() {
  return (
    <form className="w-full max-w-sm">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input className=" bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2  " type="text" placeholder="Jane Doe" ariaLabel="Full name " />
          <button className="flex-shrink-0 border-transparent  text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
            Cancel
          </button>
      </div>
    </form>

  )
}

export default Contact