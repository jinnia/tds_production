import { Swiper, SwiperSlide } from 'swiper/react'
import { useMediaQuery } from 'react-responsive'
import CardBody from '../components/ui/card-body'
import ResponsibleTourism from '../components/responsible-tourism'
import SwiperCore, {
  Pagination
} from 'swiper/core';

SwiperCore.use([Pagination]);

// import "swiper/swiper.min.css";
import 'swiper/css';
import 'swiper/css/pagination';

//import "swiper/components/pagination/pagination.min.css"

// import '../styles/Home.module.css';
const pagination = {
  "clickable": true,
  "renderBullet": function (index, className) {

    return '<span class=\"' + className + '\ bg-yellow-600"></span>';

  }
}


const Blog = ({ blogs }) => {

  const isTablet = useMediaQuery({
    query: '(min-width: 640px)'
  })
  const isSmallDisplay = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const isBigDisplay = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  const isExtraBigDisplay = useMediaQuery({
    query: '(min-width: 1536px)'
  })

  const cardArray = [1, 2, 3, 4, 5];
  return (
    <section className="text-gray-400 bg-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col mt-5 md:mt-0">
          <div className="h-1 bg-gray-800 rounded overflow-hidden">
            <div className="w-24 h-full bg-green-500" />
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0 2xl:text-6xl 2xl:text-shadow-xl font-philosopher tracking-wider">From our Blog</h1>
            <p className="sm:w-3/5 leading-relaxed text-gray-200 sm:pl-10 pl-0 font-milonga tracking-wider">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
          </div>
        </div>

        <Swiper
          pagination={pagination}
          spaceBetween={isSmallDisplay ? 30 : 10}
          slidesPerView={isSmallDisplay ? 3 : 1}>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

            {blogs.map((value, index) => {
              let cardDetails = { "title": value.title, "desc": value.description, "image": value.image };
              //  console.log(blogs);
              return <SwiperSlide><CardBody key={value.id} cardDetails={cardDetails} /></SwiperSlide>
            })}


          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;