import React, { useState } from 'react'

const State = () => {
  const [activeTab, setActiveTab] = useState('AM')

  return (
    <div className='mx-3 mt-2 flex gap-2 items-center justify-around h-11 rounded-full p-1 px-2 bg-slate-100 border'>
        <div className={`w-full ${activeTab === 'AM' ? 'shadow-[0_5px_10px_-5px_rgba(0,0,0,1.3)] text-blue-500' : ''} hover:text-blue-500 cursor-pointer h-full flex items-center rounded-full justify-center `} onClick={() => setActiveTab('AM')}>Account Management</div>
        <div className={`w-full ${activeTab === 'SM' ? 'shadow-[0_5px_10px_-5px_rgba(0,0,0,1.3)] text-blue-500' : ''} hover:text-blue-500 cursor-pointer h-full flex items-center rounded-full justify-center `} onClick={() => setActiveTab('SM')}>Subscription Management</div>
        <div className={`w-full ${activeTab === 'DS' ? 'shadow-[0_5px_10px_-5px_rgba(0,0,0,1.3)] text-blue-500' : ''} hover:text-blue-500 cursor-pointer h-full flex items-center rounded-full justify-center `} onClick={() => setActiveTab('DS')}>Developer Settings</div>
        <div className={`w-full ${activeTab === 'SP' ? 'shadow-[0_5px_10px_-5px_rgba(0,0,0,1.3)] text-blue-500' : ''} hover:text-blue-500 cursor-pointer h-full flex items-center rounded-full justify-center `} onClick={() => setActiveTab('SP')}>Security and Privacy</div>
    </div>
  )
}

export default State