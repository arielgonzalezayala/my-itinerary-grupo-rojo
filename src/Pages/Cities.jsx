import React from 'react' 

function Cities() {
    return (
        <>
       <div className='bg-fondo h-80' >

<h1 className="h-60 bg-[url('./public/tokyo.jpg')] text-4xl text-center text-white">
  Cities
</h1>
<div className='flex m-20 border-2 rounded-md bg-white w-[30%] justify-center'> <img src="./public/search.png" alt="" /> <input type="search" /></div>

       </div>
        </>
    )
}

export default Cities