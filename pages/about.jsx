import React from 'react';
import Footer from '../components/Layouts/footer'
import Menu from '../components/Layouts/menu'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

function About() {
    return (
        <>
            {/* <Menu />
            <div className="w-full h-1/4 bg-slate-600 clear-both">
                <img src='https://via.placeholder.com/500' className="w-full"/>
            </div>;
            <div><h1 className="inline-block align-middle">TOUR DE SOUTH</></div>;
            <div>hi</div>;
            <div>hi</div>;
            <div>hi</div>;
            <div>hi</div>;
            <Footer /> */}

            <Menu />
            <div className="container mx-auto flex flex-col">
                <div className="sm:flex-row-reverse flex flex-col align-middle items-center justify-center relative">
                    <div className="w-full h-auto sm:hidden">

                        <img className="w-full" src="/assets/mountain.png" />
                    </div>





                    <span className="flex h-3 w-3 z-30 absolute left-1 top-1/3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                    </span>

                    <span className="flex h-3 w-3 z-30 absolute left-24 top-44">
                        <span className="animate-pulse animate-infinite absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                    </span>

                    <span className="flex h-3 w-3 z-30 absolute left-1/2 top-1/3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                    </span>


                    <span className="flex h-3 w-3 z-30 absolute right-2 top-36">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                    </span>

                    <span className="flex h-3 w-3 z-30 absolute right-16 top-24">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                    </span>

                    <span className="flex h-3 w-3 z-30 absolute right-28 top-36">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                    </span>

                    <img className="w-full absolute top-[6.3rem]" src="/assets/lines.png" />

                    <div className="sm:w-1/2 h-80 hidden sm:flex sm:justify-center sm:align-middle sm:items-center">
                        <img className="w-full" src="/assets/mountain_desc.png" />
                    </div>
                    {/* <div className="w-full h-full sm:p-2"> */}
                    <div className="flex flex-col sm:w-1/2 sm:pl-3">
                        <h1 className="inline-block text-center sm:text-2xl text-3xl font-semibold p-2 sm:text-left font-philosopher tracking-wider">SET OUT ON YOUR SEARCH FOR PLACES TO REJUVENATE WITH ADVENTURE</h1>
                        <p className="p-2 text-lg font-milonga">We are passionate minds seeking raw, wild and real. Living for us is travelling, creating
                            experiences and maintaining a strong bond with nature. </p>
                    </div>
                </div>

                <div className="sm:h-auto sm:flex sm:w-full sm:justify-start sm:items-start sm:align-top">
                    <div className="w-full flex sm:h-auto sm:w-1/2 sm:items-start sm:content-start sm:justify-start  sm:flex-col-reverse relative">

                        <div className="absolute top-0 left-4 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-infinite animate-blob"></div>
                        <div className="absolute top-5 left-50 w-44 h-44 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                        <div className="h-auto  w-1/2 m-1 mt-4 sm:w-full ">
                            <h1 className="text-center text-xl z-50 font-philosopher tracking-wider font-semibold">CONNECT MORE PEOPLE WITH NATURE</h1>
                            <p className="p-2 text-sm font-milonga z-50">Tour de South started off as an effort to share what we feel
                                of travel and to connect more people with nature. </p>
                        </div>
                        <div className="h-40 w-1/2 sm:w-full m-1 sm:flex sm:justify-center sm:h-auto sm:align-middle sm:items-center">
                            <img className="sm:object-contain sm:h-48 sm:w-96" src="/assets/connect_with_nature.png" />
                        </div>
                    </div>
                    <div className="flex sm:flex-col sm:w-1/2 relative">

                        <div className="absolute top-0 right-14 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-infinite animate-blob_1"></div>
                        <div className="absolute top-16 right-24 w-44 h-44 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob_1 animation-delay-2000"></div>
                        <div className="absolute bottom-8 left-32 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob_1 animation-delay-4000"></div>


                        {/* <div className="absolute top-0 -left-4 w-40 h-40 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-infinite animate-blob"></div>
                        <div className="absolute top-5 left-64 w-44 h-44 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}

                        <div className="h-auto  w-1/2 m-1 sm:w-full sm:p-5 sm:flex sm:justify-center sm:align-middle sm:items-center">
                            <img className="sm:object-contain sm:h-48 sm:w-96" src="/assets/trekking.png" />
                        </div>
                        <div className="h-60 w-1/2 m-1 sm:w-full sm:h-auto flex flex-col align-middle justify-center">
                            <h1 className="text-center text-xl font-philosopher tracking-wider font-semibold">ADVENTURE FILLED WITH TREKKING</h1>
                            <p className="p-2 text-sm font-milonga ">Exclusive offbeat locations and adventure
                                filled trekking experiences, with all experiences bringing you closer to the planet.  </p>
                        </div>
                    </div>
                </div>

                {/* <div className="relative max-w-7xl mx-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>

                    <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-slate-800">Learn how to make a glowing gradient background!</p>
                            <a href="#" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200">Read Article →</a>
                        </div>
                    </div>
                </div> */}
                <div className="sm:flex sm:w-full sm:justify-start sm:items-start sm:align-top">
                    <div className="w-full flex  mt-0 sm:flex-col-reverse sm:h-auto sm:w-1/2 sm:items-start sm:content-start sm:justify-start relative">

                        {/* <div className="absolute top-0 -left-4 w-60 h-60 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-infinite animate-blob"></div>
                        <div className="absolute top-5 left-64 w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
                        <div className="absolute top-0 left-4 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-infinite animate-blob"></div>
                        <div className="absolute top-5 left-30 w-44 h-44 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                        <div className="h-auto  w-1/2 m-1 sm:w-full sm:h-auto flex flex-col align-middle items-center justify-center">
                            <h1 className="text-center text-xl  font-philosopher tracking-wide font-semibold">WARMTH AND CHILLS</h1>
                            <p className="p-2 text-sm font-milonga">Our spaces will give you the warmth you need, and the chills you crave! </p>
                        </div>
                        <div className="h-52 w-1/2 m-1 sm:w-full sm:h-auto sm:flex sm:justify-center sm:align-middle sm:items-center">
                            <img className="sm:object-contain sm:h-48 sm:w-96" src="/assets/warmth_and_chill.png" />
                        </div>
                    </div>
                    <div className="flex  sm:flex-col sm:w-1/2 relative">

                        <div className="absolute top-0 right-4 w-40 h-40 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-infinite animate-blob"></div>
                        <div className="absolute top-5 right-10 w-44 h-44 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 right-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                        <div className="h-auto  w-1/2 m-1 sm:w-full sm:p-5 sm:h-auto sm:flex sm:justify-center sm:align-middle sm:items-center">
                            <img className="mt-4 sm:object-contain sm:h-48 sm:w-96" src="/assets/tent.png" />
                        </div>
                        <div className="h-40 w-1/2 m-1 sm:w-full sm:h-auto">
                            <h1 className="text-center text-xl  font-philosopher tracking-wide font-semibold">INDOOR AND OUTDOOR STAY EXPERIENCES</h1>
                            <p className="p-2 text-sm font-milonga">It will revive your soul, freshen your breathe and cheer you up.  </p>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center font-philosopher tracking-wide text-2xl sm:pb-2 mt-5  font-semibold">
                    <h1>All You Need to do is allow us to host you</h1>
                </div>
            </div>
            <div className='fixed w-auto h-auto right-0 bottom-0 z-50 animate-bounce'>
                <WhatsAppWidget phoneNumber='919809517582' position="right" />
            </div>
            <Footer />
        </>
    )


}

export default About;
