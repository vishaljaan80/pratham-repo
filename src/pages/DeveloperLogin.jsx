import React, { useState } from 'react'
import State from '../components/State'
import { useNavigate } from 'react-router-dom'

const DeveloperLogin = () => {
  const [timer, setTimer] = useState(1200) // 20 minutes in seconds
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const startTimer = () => {
    setTimer(1200)
    setError(false)
  }

  const handleConfirm = () => {
    startTimer()
  }

  const handleCancel = () => {
    navigate('/')
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1)
    }, 1000)

    if (timer === 0) {
      setError(true)
    }

    return () => clearInterval(interval)
  }, [timer])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return {minutes, seconds};
  };

  

  return (
    <div>
      <State />
      <div className="w-32 h-12 mx-auto mt-10">
        {error ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p>Error: Timer Expired</p>
            <button onClick={handleConfirm}>Confirm</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div className="flex justify-center gap-2 items-center ">
            <div className="text-2xl font-bold w-10 h-10 bg-blue-500 rounded-md flex justify-center items-center">
              {formatTime(timer).minutes}{" "}
            </div>
            <div className="text-2xl text-blue-500">:</div>
            <div className="text-2xl font-bold w-10 h-10 bg-blue-500 rounded-md flex justify-center items-center">
              {formatTime(timer).seconds}{" "}
            </div>
          </div>
        )}
      </div>
      <div>
        <form
          action=""
          className="w-3/5  flex flex-col gap-2 mx-auto mt-10  shadow-[0_5px_10px_-5px_rgba(0,0,0,1.3)] border-gray-300 bg-white p-10 rounded-md"
        >
          <h1 className="text-2xl font-semibold text-center">
            Developer Login
          </h1>
          <p className="text-sm font-light text-center text-gray-500">
            Welcome back. Enter your credentials to access your account.
          </p>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border border-gray-300 outline-none p-2 rounded-md"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="border border-gray-300 outline-none p-2 rounded-md"
              id="password"
            />
          </div>
          <div className="flex items-center text-sm mt-5 gap-2">
            <input type="checkbox" name="Keep me Signed in" id="keepSignedIn" />
            <label htmlFor="keepSignedIn">Keep me Signed in</label>
          </div>
          <button className="bg-blue-500 mt-5 text-white p-2 rounded-md">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeveloperLogin