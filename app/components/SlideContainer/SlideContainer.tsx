'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import slide1 from '../../../public/img/slide/seo-1.png'
import slide2 from '../../../public/img/slide/seo-2.png'
import slide3 from '../../../public/img/slide/seo-3.png'
import slide4 from '../../../public/img/slide/seo-4.png'
import slide5 from '../../../public/img/slide/seo-5.png'
import AddIcon from '@mui/icons-material/Add';

const SlideContainer = () => {
  const listSlide = [
    {
      imgSrc : slide1,
      arial : "1 / 5",
      title: "Tư vấn giải pháp công nghệ",
      desc : "Chúng tôi là đội ngũ chuyên gia công nghệ, cam kết mang đến cho doanh nghiệp của bạn những giải pháp đột phá và hiệu quả. Với tư vấn của chúng tôi, bạn sẽ tiết kiệm được thời gian, công sức và tài nguyên."
    },
    {
      imgSrc : slide2,
      arial : "2 / 5",
      title: "Cung ứng nhân sự chất lượng",
      desc : "Với dịch vụ cho thuê nhân sự ngắn hạn và trung hạn, chúng tôi đáp ứng nhanh chóng và linh hoạt cho các dự án và công việc tạm thời, giúp bạn tiết kiệm thời gian và chi phí tuyển dụng."
    },
    {
      imgSrc : slide3,
      arial : "3 / 5",
      title: "Phân phối các sản phẩm SaaS",
      desc : "Chúng tôi là nhà phân phối hàng đầu các sản phẩm SaaS, cung cấp sự tiện ích và hiện đại cho doanh nghiệp. Bao gồm: Office 365, Power BI Service, Misa Vietnam, Amazon Web Services (AWS), Microsoft Azure."
    },
    {
      imgSrc : slide4,
      arial : "4 / 5",
      title: "Giải pháp công nghệ phần mềm",
      desc : "Zenix 4.0 - Giải pháp công nghệ phần mềm hàng đầu cho doanh nghiệp hiện đại. Với khả năng tùy chỉnh và mở rộng, sản phẩm Zenix 4.0 giúp tối ưu hóa hiệu quả quản lý doanh nghiệp."
    },
    {
      imgSrc : slide5,
      arial : "5 / 5",
      title: "Giải pháp tích hợp phần cứng",
      desc : "Chúng tôi cung cấp giải pháp tích hợp phần cứng đáng tin cậy, giúp doanh nghiệp xây dựng hạ tầng công nghệ hiện đại và hiệu quả.Hãy để chúng tôi giúp bạn xây dựng cơ sở hạ tầng công nghệ mạnh mẽ, đáng tin cậy."
    }
  ]
  return (
    <div className='mt-[50px] flex items-center justify-center h-[500px]'>
      <div className='max-w-[1100px] w-full h-fit mx-auto relative overflow-hidden z-[1] block swiper'>
        <Swiper
          style={{padding: '0 40px'}}
          spaceBetween={40}
          loop={true}
          slidesPerView={4}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination]}
        >
          {listSlide.map((slide,index)=>(
            <SwiperSlide
            style={{width: '225px',marginRight: '40px'}}
            key={index} role='group' aria-label={slide.arial}
            className='rounded-[25px] bg-white relative mb-[50px] border-2 border-solid border-[#E65F1D] hover:bg-spanhov group'
            >
              <div className='gap-y-[5px] flex flex-col items-center py-[10px] px-[14px]'>
                <span>
                  <div className='relative h-[150px] w-[150px] rounded-[50%]'>
                    <Image src={slide.imgSrc} width={slide.imgSrc.width} height={slide.imgSrc.height} alt='' className='w-full h-full object-cover rounded-[50%]'  />
                  </div>
                </span>
              </div>
              <div className='flex flex-col items-center py-[10px] px-[14px]'>
                <h3 className='text-lg font-medium text-[#c62128] text-center mb-2 group-hover:text-white'>{slide.title}</h3>
                <p className='mb-4 text-sm text-[#707070] text-center group-hover:text-white'>{slide.desc}</p>
                <button className='h-[50px] w-[50px] rounded-[50px] absolute bottom-[-25px] bg-[#f0f0f0] shadow-slidebtn hover:scale-[1.2] transform duration-[0.3s]'>
                  <AddIcon className='fill-[#e65f1d]' />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SlideContainer
