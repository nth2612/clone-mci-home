import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Image from 'next/image'
import about from '../../../public/img/about.png'

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="bg-white cursor-pointer group border-2 border-solid hover:bg-spanhov hover:border-transparent border-[#dc4b20] flex items-center text-center py-3 px-5 rounded-30 mb-24">
        <span className="text-[#dc4b20] font-bold group-hover:text-white">Xem tất cả giải pháp</span>
      </div>
      <div className="container">
        <div className='flex flex-wrap'>
          <div className='flex-1 flex-shrink-0 w-full max-w-full px-3'>
            <div className='flex flex-col'>
              <div className='bg-white flex items-center px-4 py-3 shadow-btn-2 rounded-30 uppercase text-[#cb2a27] w-fit'>
                <div className='text-white bg-[#cb2a27] h-7 w-7 flex justify-center items-center rounded-[50%] mr-3'>
                  <AccountCircleRoundedIcon/>
                </div>
                About us
              </div>
              <div className='text-[50px] text-[#dc4b20] font-extrabold'>MCI Solutions</div>
              <p className='mb-4'>MCI solutions đã và đang khẳng định vị thế trên thị trường nội địa và hướng tới thị trường khu vực quốc tế thông qua những hoạt động kinh doanh chủ lực như:</p>
              <p className='mb-4 font-bold'>Giải pháp công nghệ phần mềm, Phân phối các sản phẩm như SaaS, Giải pháp tích hợp phần cứng và Cung ứng nhân sự chất lượng</p>
              <div className='mt-5 py-4 px-8 text-base text-white font-bold w-fit rounded-30 shadow-btn-about bg-con2'>Xem chi tiết</div>
            </div>
          </div>
          <div className='flex-1 flex-shrink-0 w-full max-w-full px-3'>
            <Image src={about} height={425} width={442} alt='anh'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
