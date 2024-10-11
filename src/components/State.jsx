import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const State = () => {
  const [activeTab, setActiveTab] = useState('AM')
  const {tag}= useParams();

  return (
    <div className='mx-3 mt-2 flex flex-wrap gap-2 items-center justify-around h-auto md:rounded-full rounded-md p-1 px-2 bg-slate-100 border'>
        <div className={`w-full md:w-1/5 ${activeTab === 'AM' ? 'shadow-[0_5px_10px_-5px_rgba(0,0,0,1.3)] text-blue-500' : ''} hover:text-blue-500 cursor-pointer h-full flex items-center rounded-full justify-center text-sm md:text-md text-center lg:text-sm`} onClick={() => setActiveTab('AM')}>Account Management</div>
        <div className={`w-full md:w-1/5 ${activeTab === 'SM' ? 'shadow-[0_5px_10px_-5px_rgba(0,0,0,1.3)] text-blue-500' : ''} hover:text-blue-500 cursor-pointer h-full flex items-center rounded-full justify-center text-sm md:text-md text-center lg:text-sm`} onClick={() => setActiveTab('SM')}>Subscription Management</div>
        <div className={`w-full md:w-1/5 ${activeTab === 'DS' ? 'shadow-[0_5px_10px_-5px_rgba(0,0,0,1.3)] text-blue-500' : ''} hover:text-blue-500 cursor-pointer h-full flex items-center rounded-full justify-center text-sm md:text-md text-center lg:text-sm`} onClick={() => setActiveTab('DS')}>Developer Settings</div>
        <div className={`w-full md:w-1/5 ${activeTab === 'SP' ? 'shadow-[0_5px_10px_-5px_rgba(0,0,0,1.3)] text-blue-500' : ''} hover:text-blue-500 cursor-pointer h-full flex items-center rounded-full justify-center text-sm md:text-md text-center lg:text-sm`} onClick={() => setActiveTab('SP')}>Security and Privacy</div>
    </div>
  )
}

export default State