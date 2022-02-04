import React from 'react';
import Footer from '../components/Layouts/footer'
import Menu from '../components/Layouts/menu'

function About() {
    return(
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


            <div className="flex flex-col h-full">
                <div className="w-full h-80">
                    <img src="/assets/mountain.png" />
                </div>
                <div className="w-full h-full">
                    <h1 className="inline-block text-center font-bold text-xl p-2">SET OUT ON YOUR SEARCH FOR PLACES TO REJUVENATE WITH ADVENTURE</h1>
                    <p className="p-2 text-lg font-milonga">We are passionate minds seeking raw, wild and real. Living for us is travelling, creating 
                    experiences and maintaining a strong bond with nature. </p>
                    <div className="flex">
                        <div className="h-auto  w-1/2 m-1 mt-4">
                            <h1 className="text-center text-xl font-bold">CONNECT MORE PEOPLE WITH NATURE</h1>
                            <p className="p-2 text-lg font-milonga">Tour de South started off as an effort to share what we feel 
                            of travel and to connect more people with nature. </p>
                        </div>
                        <div className="h-60 w-1/2 m-1">
                            <img src="/assets/connect_with_nature.png" />
                        </div>
                    </div>
                    <div className="flex  p-4">
                        <div className="h-auto  w-1/2 m-1">
                            <h1 className="text-center text-xl font-bold">ADVENTURE FILLED WITH TREKKING</h1>
                            <img src="/assets/trekking.png" />
                        </div>
                        <div className="h-60 w-1/2 m-1">
                            <p className="p-2 text-lg font-milonga">Exclusive offbeat locations and adventure
                            filled trekking experiences, with all experiences bringing you closer to the planet.  </p>                            
                        </div>
                    </div>
                    <div className="flex  p-4">
                        <div className="h-auto  w-1/2 m-1">
                        <h1 className="text-center text-xl font-bold">WARMTH AND CHILLS</h1>
                        <p className="p-2 text-lg font-milonga">Our spaces will give you the warmth you need, and the chills you crave! </p>
                        </div>
                        <div className="h-60 w-1/2 m-1">
                            <img src="/assets/warmth_and_chill.png" />
                        </div>
                    </div>
                    <div className="flex  p-4">
                        <div className="h-auto  w-1/2 m-1">
                            <h1 className="text-center text-xl font-bold">INDOOR AND OUTDOOR STAY EXPERIENCES</h1>
                            <img src="/assets/tent.png" />
                        </div>
                        <div className="h-60 w-1/2 m-1">
                            <p className="p-2 text-lg font-milonga">It will revive your soul, freshen your breathe and cheer you up.  </p>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    

}

export default About;
