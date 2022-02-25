import React from 'react';
import Footer from '../components/Layouts/footer'
import Menu from '../components/Layouts/menu'

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
                <div className="sm:flex-row-reverse flex flex-col align-middle items-center justify-center">
                    <div className="w-full h-auto sm:hidden">
                        <img className="w-full" src="/assets/mountain.png" />
                    </div>
                    <div className="sm:w-1/2 h-80 hidden sm:flex sm:justify-center sm:align-middle sm:items-center">
                        <img className="w-full" src="/assets/mountain_desc.png" />
                    </div>
                    {/* <div className="w-full h-full sm:p-2"> */}
                    <div className="flex flex-col sm:w-1/2 sm:pl-3">
                        <h1 className="inline-block text-center sm:text-2xl text-3xl  p-2 sm:text-left font-philosopher tracking-wider">SET OUT ON YOUR SEARCH FOR PLACES TO REJUVENATE WITH ADVENTURE</h1>
                        <p className="p-2 text-lg font-milonga">We are passionate minds seeking raw, wild and real. Living for us is travelling, creating
                            experiences and maintaining a strong bond with nature. </p>
                    </div>
                </div>

                <div className="sm:h-auto sm:flex sm:w-full sm:justify-start sm:items-start sm:align-top">
                    <div className="w-full flex sm:h-auto sm:w-1/2 sm:items-start sm:content-start sm:justify-start sm:bg-slate-500 md:bg-red-700 lg:bg-amber-400 sm:flex-col-reverse">
                        <div className="h-auto  w-1/2 m-1 mt-4 sm:w-full">
                            <h1 className="text-center text-xl z-50 font-philosopher tracking-wider">CONNECT MORE PEOPLE WITH NATURE</h1>
                            <p className="p-2 text-sm font-milonga z-50">Tour de South started off as an effort to share what we feel
                                of travel and to connect more people with nature. </p>
                        </div>
                        <div className="h-40 w-1/2 sm:w-full m-1 sm:flex sm:justify-center sm:h-auto sm:align-middle sm:items-center">
                            <img className="sm:object-contain sm:h-48 sm:w-96" src="/assets/connect_with_nature.png" />
                        </div>
                    </div>
                    <div className="flex sm:flex-col sm:w-1/2">
                        <div className="h-auto  w-1/2 m-1 sm:w-full sm:p-5 sm:flex sm:justify-center sm:align-middle sm:items-center">
                            <img className="sm:object-contain sm:h-48 sm:w-96" src="/assets/trekking.png" />
                        </div>
                        <div className="h-40 w-1/2 m-1 sm:w-full sm:h-auto ">
                            <h1 className="text-center text-xl font-philosopher tracking-wider">ADVENTURE FILLED WITH TREKKING</h1>
                            <p className="p-2 text-sm font-milonga ">Exclusive offbeat locations and adventure
                                filled trekking experiences, with all experiences bringing you closer to the planet.  </p>
                        </div>
                    </div>
                </div>
                <div className="sm:flex sm:w-full sm:justify-start sm:items-start sm:align-top">
                    <div className="w-full flex  mt-0 sm:flex-col-reverse sm:h-auto sm:w-1/2 sm:items-start sm:content-start sm:justify-start">
                        <div className="h-auto  w-1/2 m-1 sm:w-full sm:h-auto">
                            <h1 className="text-center text-xl  font-philosopher tracking-wide">WARMTH AND CHILLS</h1>
                            <p className="p-2 text-sm font-milonga">Our spaces will give you the warmth you need, and the chills you crave! </p>
                        </div>
                        <div className="h-40 w-1/2 m-1 sm:w-full sm:h-auto sm:flex sm:justify-center sm:align-middle sm:items-center">
                            <img className="sm:object-contain sm:h-48 sm:w-96" src="/assets/warmth_and_chill.png" />
                        </div>
                    </div>
                    <div className="flex  sm:flex-col sm:w-1/2">
                        <div className="h-auto  w-1/2 m-1 sm:w-full sm:p-5 sm:h-auto sm:flex sm:justify-center sm:align-middle sm:items-center">
                            <img className="mt-4 sm:object-contain sm:h-48 sm:w-96" src="/assets/tent.png" />
                        </div>
                        <div className="h-40 w-1/2 m-1 sm:w-full sm:h-auto">
                            <h1 className="text-center text-xl  font-philosopher tracking-wide">INDOOR AND OUTDOOR STAY EXPERIENCES</h1>
                            <p className="p-2 text-sm font-milonga">It will revive your soul, freshen your breathe and cheer you up.  </p>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center font-philosopher tracking-wide text-2xl sm:pb-2 mt-5">
                    <h1>All You Need to do is allow us to host you</h1>
                </div>
            </div>
            <Footer />
        </>
    )


}

export default About;
