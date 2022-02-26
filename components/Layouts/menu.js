import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'


const Menu = () => {

  const [mobileMenu, setMobileMenu] = useState(false)




  // useEffect(() => {
  //   setMobileMenu(!mobileMenu)
  // }, [mobileMenu]);

  return (
    <>
      <div id='top-menu' className="z-10 w-full flex justify-between p-2 absolute bg-transparent md:pt-5 md:pb-5 ">

        <div className="hidden md:container md:mx-auto md:flex">
          <div id='logo-on-left-larger-screen' className="hidden md:flex md:w-1/4">
            <Image src="/assets/logo/Kayaking-badge.png" width={100} height={100}></Image>
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
          <Image src="/assets/logo/Kayaking-badge.png" width={75} height={75}></Image>
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


      <div className={mobileMenu ? 'w-3/4 h-full fixed bg-slate-800 z-50 flex flex-col animate-fadeInLeft ' : 'w-3/4 h-full fixed bg-slate-800 z-50 flex flex-col animate-fadeOutLeft'}>

        <div id='mLogo' className='flex items-center justify-center pl-3'>
          <Image src="/assets/logo/Kayaking-badge.png" width={150} height={150}></Image>
        </div>

        <div className='flex justify-start  text-left pl-3 font-philosopher text-white mt-5 text-2xl tracking-widest '>
          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="25px"
            height="25px"
            className='ml-2 mr-5'
          >
            <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z" />
          </svg><Link href="/">Home</Link></div>
        <div className='flex justify-start text-left pl-3  font-philosopher text-white mt-5 text-2xl tracking-widest'>

          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="25px"
            height="25px"
            className='ml-2 mr-5'
          >
            <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z" />
          </svg>

          <Link href="about">About Us</Link></div>
        <div className='flex justify-start text-left pl-3  font-philosopher text-white mt-5 text-2xl tracking-widest'><svg
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="25px"
          height="25px"
          className='ml-2 mr-5'
        >
          <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z" />
        </svg><span>Destinations</span></div>
        <div className='flex justify-start text-left pl-3  font-philosopher text-white mt-5 text-2xl tracking-widest'><svg
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="25px"
          height="25px"
          className='ml-2 mr-5'
        >
          <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z" />
        </svg><span>Blog</span></div>
        <div className='flex justify-start text-left pl-3  font-philosopher text-white mt-5 text-2xl tracking-widest'><svg
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="25px"
          height="25px"
          className='ml-2 mr-5'
        >
          <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z" />
        </svg><span>Responsible Tourism</span></div>
        <div className='flex justify-start text-left pl-3  font-philosopher text-white mt-5 text-2xl tracking-widest'><svg
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="25px"
          height="25px"
          className='ml-2 mr-5'
        >
          <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z" />
        </svg><span>Contact</span></div>

        <div onClick={() => setMobileMenu(false)} className="absolute bottom-4 text-center w-full text-white font-philosopher tracking-widest border-t-2 border-gray-500 pt-3">Close</div>


      </div>
    </>
  )

}
export default Menu;

