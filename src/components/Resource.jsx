import React from 'react'

const Resource = () => {
  return (
    <div className="justify-between border bg-white rounded-lg overflow-hidden m-5">
      <div className='rounded-sm flex justify-around bg-zinc-200'>
        <div className="flex justify-between">
          <h1 className="">Resource</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="">Limit</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="">Used</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="">Remaining</h1>
        </div>
      </div>
      <div className='rounded-lg flex h-60 justify-around'>
        
      </div>
    </div>
  );
}

export default Resource