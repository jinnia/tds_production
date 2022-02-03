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


            <div className="flex flex-col p-4 h-full">
                <div className="w-full h-64 bg-gray-700"></div>
                <div className="w-full h-full bg-red-700">
                    <h1 className="inline-block align-middle">TOUR DE SOUTH</h1>
                    <div className="flex  p-4">
                        <div className="bg-green-400 h-60 w-1/2 m-1"></div>
                        <div className="bg-green-400 h-60 w-1/2 m-1"></div>
                    </div>
                    <div className="flex  p-4">
                        <div className="bg-green-400 h-60 w-1/2 m-1"></div>
                        <div className="bg-green-400 h-60 w-1/2 m-1"></div>
                    </div>
                    <div className="flex  p-4">
                        <div className="bg-green-400 h-60 w-1/2 m-1"></div>
                        <div className="bg-green-400 h-60 w-1/2 m-1"></div>
                    </div>
                </div>
            </div>
        </>
    )
    

}

export default About;
