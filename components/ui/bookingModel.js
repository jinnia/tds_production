import React from 'react'

function BookingModel() {
  return (
    <div className='w-full p-5 flex flex-col'>
        <span className="font-bold mb-2 font-MuseoBold">Choose start date</span>
        <div className="flex w-full mb-5">
            <input type="text" id="startDate" placeholder="Start date" className="w-1/2 border p-1"/>
            <input type="text" id="endDate" placeholder="End date" className="w-1/2 border p-1" />
        </div>
        <span className="font-bold mb-2 font-MuseoBold">Choose how many people</span>
        <div className="flex w-full justify-center align-middle items-center">
            <span className="p-2">1</span><span className="p-2">2</span><span className="p-2">3</span><span className="p-2">4</span><span className="bg-green-700 p-2 rounded-lg text-white">5</span>
            <span className="p-2">6</span><span className="p-2">7</span><span className="p-2">8</span><span className="p-2">9</span><span className="p-2">10</span>
            <button className="flex w-7 h-7 p-1 bg-gray-400 text-white rounded-full justify-center align-middle items-center"><span className="flex items-center justify-center align-middle">></span></button>
        </div>
        <div className="flex justify-center align-middle items-center">
            <img className="w-32 h-32" src="/assets/warmth_and_chill.png" />
        </div>
        <div className="flex justify-center align-middle items-center m-3">
            <span className="font-bold text-3xl font-MuseoBold">₹15,600</span>
        </div>
    </div>
  )
}

export default BookingModel