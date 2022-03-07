import React, { useState } from 'react';
import Footer from '../components/Layouts/footer'
import Menu from '../components/Layouts/menu'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

function About() {
    const [checkoutSelect, setCheckoutSelect] = useState('hidden')
    //write css styles for the swiper
    const styles = {
        swiper: {
            width: '100%',
            height: '100%',
            margin: '0 auto',
            overflow: 'hidden',
            position: 'relative',
            zIndex: '1',
            backgroundColor: '#fff',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
        },
    }
    return (
        <>
            <style global jsx>{`
      `}
            </style>
            <Menu />
            {/*
            <div className="w-full h-1/4 bg-slate-600 clear-both">
                <img src='https://via.placeholder.com/500' className="w-full"/>
            </div>;
            <div><h1 className="inline-block align-middle">TOUR DE SOUTH</></div>;
            <div>hi</div>;
            <div>hi</div>;
            <div>hi</div>;
            <div>hi</div>;
            <Footer /> */}


            <div className="container mx-auto flex flex-col h-full">
                <div className="w-full h-80 flex relative">

                    <Image src="/assets/CloudFarm/CloudFarm1.jpg" width={400} height={350} objectFit={'cover'} />
                    <Image src="/assets/CloudFarm/CloudFarm2.jpg" width={400} height={350} objectFit={'cover'} />
                    <Image src="/assets/CloudFarm/CloudFarm3.jpg" width={400} height={350} objectFit={'cover'} />

                    <h1 className='font-semibold text-5xl text-white absolute font-philosopher left-12 top-1/2'>Cloud Farm</h1>
                    <button className="text-white bg-[#17A294] border-0 py-2 px-6 focus:outline-none hover:bg-green-300 hover:text-black rounded absolute left-[9rem] bottom-[4rem]">Book</button>
                </div>
                <div className="w-full h-full relative">

                    <div className="absolute -top-10 right-0 w-full h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl   animate-infinite"></div>
                    {/* <div className="absolute top-0 left-4 w-full h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-infinite"></div> */}
                    {/* <div className="absolute top-5 right-10 w-44 h-44 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animation-delay-2000"></div>
                    <div className="absolute -bottom-8 right-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animation-delay-4000"></div> */}



                    <p className="p-2 text-xl font-philosopher font-bold text-center text-black ">

                        Cloudfarm will mesmerize all your senses without limits, we promise.
                        You'll wake up amidst the clouds, with the rays of the sun kissing you. You'll find yourself in a dream.</p>

                    <div className='w-full'>

                        <div className='border-2 rounded-md border-slate-100 m-2 flex shadow-2xl'>

                            <div className="h-auto w-1/2 flex justify-center items-center align-middle m-1">

                                <Image src="/assets/external/tent-cropped.jpg" width={200} height={300} objectFit={'cover'} className="rounded-md shadow-lg" />

                            </div>
                            <div className="h-auto w-1/2">
                                <p className="p-2 text-lg font-milonga">Tents await you at the site, with a view that is
                                    breathtaking. Sunrise and sunset points will give you a 360° view into the hills and the horizon. </p>
                            </div>

                        </div>

                    </div>


                    <div className='w-full relative'>

                        <div className="absolute -top-10 right-0 w-full h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-infinite"></div>
                        {/* <div className="absolute top-0 left-4 w-full h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-infinite"></div> */}


                        <div className='border-2 rounded-md border-slate-100 m-2 flex shadow-2xl'>


                            <div className="h-auto w-1/2">
                                <p className="p-2 text-lg font-milonga">You can find yourself surrounded with the colours of wild flora
                                    and the sounds of the wild. Be it with your loved ones or a solo trip, we assure you rest, reflection
                                    and solitude.  </p>
                            </div>
                            <div className="h-auto w-1/2 flex justify-center items-center align-middle m-1">

                                <Image src="/assets/external/forest.jpg" width={200} height={300} objectFit={'cover'} className="rounded-md shadow-lg" />

                            </div>

                        </div>

                    </div>


                    <div className='w-full relative'>

                        <div className="absolute -top-10 right-0 w-full h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-infinite"></div>



                        <div className='border-2 rounded-md border-slate-100 m-2 flex shadow-2xl'>

                            <div className="h-auto w-1/2 flex justify-center items-center align-middle m-1">

                                <Image src="/assets/external/camping-food.jpg" width={200} height={300} objectFit={'cover'} className="rounded-md shadow-lg" />

                            </div>
                            <div className="h-auto w-1/2">
                                <p className="p-2 text-lg font-milonga">Our package welcomes you with an evening tea at the campsite,
                                    sunset trek, dinner for the night. The day break starts with sunrise trek and dispersing with breakfast.</p>
                            </div>

                        </div>

                    </div>


                    <div className='w-full relative'>


                        <div className="absolute -top-10 right-0 w-full h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-infinite"></div>


                        <div className='border-2 rounded-md border-slate-100 m-2 flex shadow-2xl'>


                            <div className="h-auto w-1/2">
                                <p className="p-2 text-lg font-milonga">Your safety is our priority. All tents are pitched prior to the
                                    arrival of guests, and washrooms are within the surroundings. We have a kitchen that will provide you with
                                    hot water and kattan  to keep you warm.  </p>
                            </div>
                            <div className="h-auto w-1/2 flex justify-center items-center align-middle m-1">

                                <Image src="/assets/CloudFarm/CloudFarm1.jpg" width={200} height={300} objectFit={'cover'} className="rounded-md shadow-lg" />

                            </div>

                        </div>

                    </div>






                </div>
            </div>
            <div className='fixed bg-[#17A294] w-full h-auto right-0 bottom-0 z-30 animate-bounce p-3 font-philosopher animate-slideInUp animate-duration-1000'>

                <div className='flex justify-between w-full'>

                    <h2 className='text-white font-semibold text-3xl flex align-middle items-center justify-start'>₹ 15,600 /-</h2>
                    <span className='text-white font-semibold text-md flex align-middle items-center justify-start'>Per Person</span>

                    <button className="text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-green-300 hover:text-black rounded font-bold" onClick={() => setCheckoutSelect(true)}>Book</button>
                </div>

            </div>
            <div className='fixed w-auto h-auto right-0 bottom-12 z-50 animate-bounce'>
                <WhatsAppWidget phoneNumber='919809517582' position="right" />
            </div>


            <div className={checkoutSelect == 'hidden' ? 'hidden' : checkoutSelect ? 'w-11/12 h-1/2 fixed bg-white z-50 flex  flex-col shadow-2xl m-auto top-0 left-0 right-0 bottom-0  rounded-xl animate-bounceIn ' : 'w-11/12 h-1/2 fixed bg-white z-50 flex-col shadow-2xl m-auto top-0 left-0 right-0 bottom-0 rounded-xl animate-bounceOut'}>

                <div className='p-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsam voluptate nostrum iure voluptatem blanditiis libero, nisi fugiat doloribus illo neque esse, velit, animi inventore eaque? Asperiores magni assumenda veniam!


                </div>

                <div className='bg-[#17A294] bottom-0 absolute w-full p-2 flex justify-around font-philosopher font-semibold'>
                    <button className="text-white bg-transparent border-0 py-2 px-6 focus:outline-none hover:bg-green-100 hover:text-black rounded font-bold text-2xl" onClick={() => setCheckoutSelect(false)}>Next</button>
                    <button className="text-white bg-transparent border-0 py-2 px-6 focus:outline-none hover:bg-green-100 hover:text-black rounded font-bold text-2xl" onClick={() => setCheckoutSelect(false)}>Close</button>
                </div>
            </div>
            <Footer />
        </>
    )


}

export default About;
