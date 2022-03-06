import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'


const Menu = () => {

  const [mobileMenu, setMobileMenu] = useState('hidden')




  // useEffect(() => {
  //   setMobileMenu(!mobileMenu)
  // }, [mobileMenu]);

  return (
    <>
      <div id='top-menu' className="z-10 w-full flex justify-between p-2 absolute bg-transparent md:pt-5 md:pb-5 ">

        <div className="hidden md:container md:mx-auto md:flex">
          <div id='logo-on-left-larger-screen' className="hidden md:flex md:w-1/4">
            <Image src="/assets/logo/kayaking-badge-new.png" width={100} height={100}></Image>
            {/* <h1 className="text-white sm:bg-pink-900 md:bg-green-600 xl:bg-red-600 2xl:bg-blue-600 font-bold text-shadow-lg text-xl">TRAVELISTA</h1> */}
          </div>

          <div id='menu-on-right-larger-screen' className="hidden md:flex md:justify-end md:w-full pr-10">
            <div id="menu-container" className="flex">
              <div className="flex flex-col">
                <a href="#" className="text-black text-base  md:text-xs 2xl:text-lg lg:text-base text-shadow-sm font-normal font-Battlebridge">Home</a>
                <div className="w-full border border-green-900 mt-2"></div>
              </div>


              <Link href="/about">
                <a className="text-black text-base md:text-xs 2xl:text-lg lg:text-base text-shadow-sm font-normal pl-5 font-Battlebridge">About</a>
              </Link>
              <Link href="/destination">
                <a href="#" className="text-black text-base md:text-xs 2xl:text-xl lg:text-base text-shadow-sm font-normal pl-5 font-Battlebridge">Destinations</a>
              </Link>
              <a href="#" className="text-black text-base md:text-xs 2xl:text-xl lg:text-base text-shadow-sm font-normal pl-5 font-Battlebridge tracking-wider">Responsible Tourism</a>
              <a href="#" className="text-black text-base md:text-xs 2xl:text-xl lg:text-base text-shadow-sm font-normal pl-5  font-Battlebridge tracking-wider">Blog</a>
              <a href="#" className="text-black text-base md:text-xs 2xl:text-xl lg:text-base text-shadow-sm font-normal pl-5  font-Battlebridge tracking-wider">Contact us</a>
              <a href="#" className="text-black text-base md:text-xs 2xl:text-xl lg:text-base text-shadow-sm font-normal pl-5  font-Battlebridge tracking-wider">Privacy Policy</a>
            </div>
          </div>
          <div id='top-menu-right-menu'>
            <div id='auth-menu' className="bg-white shadow-2xl drop-shadow-2xl rounded-lg w-full text-gray-800 flex p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>



        <div id='top-menu-left-icon' className="md:hidden align-middle items-center flex">
          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setMobileMenu(true)} className="h-6 w-6 fill-current text-white items-center align-middle" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div id='top-menu-center-logo' className="md:hidden  align-middle items-center flex">
          <Image src="/assets/logo/kayaking-badge-new.png" width={80} height={75}></Image>
          {/* <h1 className="text-white sm:bg-pink-900 md:bg-green-600 xl:bg-red-600 2xl:bg-blue-600 font-bold text-shadow-lg text-xl">TRAVELISTA</h1> */}
        </div>
        <div id='top-menu-right-menu' className="md:hidden align-middle items-center flex">
          <div id='auth-menu' className="bg-white shadow-2xl drop-shadow-2xl rounded-lg w-full text-gray-800 flex p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>


      <div className={mobileMenu == 'hidden' ? 'hidden' : mobileMenu ? 'w-3/4 h-full fixed bg-[#1d1635] z-50 flex flex-col animate-fadeInLeft ' : 'w-3/4 h-full fixed bg-slate-800 z-50 flex-col animate-fadeOutLeft'}>

        <div id='mLogo' className='flex items-center justify-center pl-3 pt-3 mb-16'>
          <Image src="/assets/logo/kayaking-badge-new.png" width={100} height={100}></Image>
        </div>

        <div className='flex justify-start  text-left pl-3 font-philosopher text-white mt-5 text-xl tracking-widest '>
          <svg width={25} height={25} className="mr-5 mt-1" fill="#ffffff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g data-name="1" id="_1">
              <path d="M72.86,407.49H69.13a15,15,0,0,1-15-15V282.25C54.13,201.62,119.74,136,200.37,136h50.21V70.75a15,15,0,0,1,25-11.14L451.18,217.88a15,15,0,0,1,0,22.28L275.63,398.44a15,15,0,0,1-25-11.15V322H183.65a99.52,99.52,0,0,0-96.28,74.25A15,15,0,0,1,72.86,407.49ZM183.65,292h81.93a15,15,0,0,1,15,15v46.54L418.73,229,280.58,104.47V151a15,15,0,0,1-15,15H200.37A116.37,116.37,0,0,0,84.13,282.25v56.36A129.6,129.6,0,0,1,183.65,292Z" />
            </g>
          </svg>
          <Link href="/">Home</Link></div>
        <div className='flex justify-start text-left pl-3  font-philosopher text-white mt-5 text-xl tracking-widest'>

          <svg width={25} height={25} className="mr-5 mt-1" fill="#ffffff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g data-name="1" id="_1">
              <path d="M72.86,407.49H69.13a15,15,0,0,1-15-15V282.25C54.13,201.62,119.74,136,200.37,136h50.21V70.75a15,15,0,0,1,25-11.14L451.18,217.88a15,15,0,0,1,0,22.28L275.63,398.44a15,15,0,0,1-25-11.15V322H183.65a99.52,99.52,0,0,0-96.28,74.25A15,15,0,0,1,72.86,407.49ZM183.65,292h81.93a15,15,0,0,1,15,15v46.54L418.73,229,280.58,104.47V151a15,15,0,0,1-15,15H200.37A116.37,116.37,0,0,0,84.13,282.25v56.36A129.6,129.6,0,0,1,183.65,292Z" />
            </g>
          </svg>

          <Link href="about">About Us</Link></div>
        <div className='flex justify-start text-left pl-3  font-philosopher text-white mt-5 text-xl tracking-widest'>
          <svg width={25} height={25} className="mr-5 mt-1" fill="#ffffff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g data-name="1" id="_1">
              <path d="M72.86,407.49H69.13a15,15,0,0,1-15-15V282.25C54.13,201.62,119.74,136,200.37,136h50.21V70.75a15,15,0,0,1,25-11.14L451.18,217.88a15,15,0,0,1,0,22.28L275.63,398.44a15,15,0,0,1-25-11.15V322H183.65a99.52,99.52,0,0,0-96.28,74.25A15,15,0,0,1,72.86,407.49ZM183.65,292h81.93a15,15,0,0,1,15,15v46.54L418.73,229,280.58,104.47V151a15,15,0,0,1-15,15H200.37A116.37,116.37,0,0,0,84.13,282.25v56.36A129.6,129.6,0,0,1,183.65,292Z" />
            </g>
          </svg>

          <Link href="destination">Destinations</Link></div>
        <div className='flex justify-start text-left pl-3  font-philosopher text-white mt-5 text-xl tracking-widest'>

          <svg width={25} height={25} className="mr-5 mt-1" fill="#ffffff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g data-name="1" id="_1">
              <path d="M72.86,407.49H69.13a15,15,0,0,1-15-15V282.25C54.13,201.62,119.74,136,200.37,136h50.21V70.75a15,15,0,0,1,25-11.14L451.18,217.88a15,15,0,0,1,0,22.28L275.63,398.44a15,15,0,0,1-25-11.15V322H183.65a99.52,99.52,0,0,0-96.28,74.25A15,15,0,0,1,72.86,407.49ZM183.65,292h81.93a15,15,0,0,1,15,15v46.54L418.73,229,280.58,104.47V151a15,15,0,0,1-15,15H200.37A116.37,116.37,0,0,0,84.13,282.25v56.36A129.6,129.6,0,0,1,183.65,292Z" />
            </g>
          </svg>
          <span>Blog</span></div>
        <div className='flex justify-start text-left pl-3  font-philosopher text-white mt-5 text-xl tracking-widest'>
          <svg width={25} height={25} className="mr-5 mt-1" fill="#ffffff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g data-name="1" id="_1">
              <path d="M72.86,407.49H69.13a15,15,0,0,1-15-15V282.25C54.13,201.62,119.74,136,200.37,136h50.21V70.75a15,15,0,0,1,25-11.14L451.18,217.88a15,15,0,0,1,0,22.28L275.63,398.44a15,15,0,0,1-25-11.15V322H183.65a99.52,99.52,0,0,0-96.28,74.25A15,15,0,0,1,72.86,407.49ZM183.65,292h81.93a15,15,0,0,1,15,15v46.54L418.73,229,280.58,104.47V151a15,15,0,0,1-15,15H200.37A116.37,116.37,0,0,0,84.13,282.25v56.36A129.6,129.6,0,0,1,183.65,292Z" />
            </g>
          </svg>
          <span>Responsible Tourism</span></div>
        <div className='flex justify-start text-left pl-3  font-philosopher text-white mt-5 text-xl tracking-widest'>
          <svg width={25} height={25} className="mr-5 mt-1" fill="#ffffff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g data-name="1" id="_1">
              <path d="M72.86,407.49H69.13a15,15,0,0,1-15-15V282.25C54.13,201.62,119.74,136,200.37,136h50.21V70.75a15,15,0,0,1,25-11.14L451.18,217.88a15,15,0,0,1,0,22.28L275.63,398.44a15,15,0,0,1-25-11.15V322H183.65a99.52,99.52,0,0,0-96.28,74.25A15,15,0,0,1,72.86,407.49ZM183.65,292h81.93a15,15,0,0,1,15,15v46.54L418.73,229,280.58,104.47V151a15,15,0,0,1-15,15H200.37A116.37,116.37,0,0,0,84.13,282.25v56.36A129.6,129.6,0,0,1,183.65,292Z" />
            </g>
          </svg>

          <span>Contact</span></div>

        <div className="absolute flex justify-center items-center align-middle bottom-16 text-center w-full text-white font-philosopher tracking-widest border-t-2 border-gray-500 pt-3">

          <div className="flex justify-around items-center align-middle ">
            <a href="https://www.facebook.com/"><img src="/assets/logo/fb.png" className="w-10 h-10 m-1" /></a>
            <a href="https://www.instagram.com/"><img src="/assets/logo/instagram.png" className="w-10 h-10 m-1" /></a>
            <a href="https://www.twitter.com/"><img src="/assets/logo/twitter.png" className="w-10 h-10 m-1" /></a>
            <a href="https://www.youtube.com/"><img src="/assets/logo/youtube.png" className="w-10 h-10 m-1" /></a>
          </div>
        </div>

        <div onClick={() => setMobileMenu(false)} className="absolute bottom-4 text-center w-full text-white font-philosopher tracking-widest border-t-2 border-gray-500 pt-3">Close</div>


      </div>
    </>
  )

}
export default Menu;

