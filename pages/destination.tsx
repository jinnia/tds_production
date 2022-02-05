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
                    <h1 className="inline-block text-center font-bold text-xl p-2">CLOUDFARM</h1>
                    <p className="p-2 text-lg font-milonga">Cloudfarm will mesmerize all your senses without limits, we promise. 
                    You'll wake up amidst the clouds, with the rays of the sun kissing you. You'll find yourself in a dream.</p>
                    <div className="flex">
                        <div className="h-auto  w-1/2 m-1 mt-4">
                            <img src="/assets/connect_with_nature.png" className="filter-none"/>   
                        </div>
                        <div className="h-auto w-1/2 m-1">
                            <p className="p-2 text-lg font-milonga">Tents await you at the site, with a view that is 
                            breathtaking. Sunrise and sunset points will give you a 360° view into the hills and the horizon. </p>                           
                        </div>
                    </div>
                    <div className="flex  p-4">
                        <div className="h-auto  w-1/2 m-1">
                            <p className="p-2 text-lg font-milonga">You can find yourself surrounded with the colours of wild flora
                             and the sounds of the wild. Be it with your loved ones or a solo trip, we assure you rest, reflection 
                             and solitude.  </p>                              
                        </div>
                        <div className="h-60 w-1/2 m-1">
                            <img src="/assets/trekking.png" />                                                      
                        </div>
                    </div>
                    <div className="flex  p-4 mt-8">
                        <div className="h-auto  w-1/2 m-1">
                            <img src="/assets/warmth_and_chill.png" />            
                        </div>
                        <div className="h-auto w-1/2 m-1">
                            <p className="p-2 text-lg font-milonga">Our package welcomes you with an evening tea at the campsite, 
                            sunset trek, dinner for the night. The day break starts with sunrise trek and dispersing with breakfast.</p>
                        </div>
                    </div>
                    <div className="flex  p-4">
                        <div className="h-auto  w-1/2 m-1">                           
                            <p className="p-2 text-lg font-milonga">Your safety is our priority. All tents are pitched prior to the 
                            arrival of guests, and washrooms are within the surroundings. We have a kitchen that will provide you with 
                            hot water and kattan  to keep you warm. </p>
                        </div>
                        <div className="h-60 w-1/2 m-1">
                            <img className="mt-4" src="/assets/tent.png" />                                                    
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    

}

export default About;
