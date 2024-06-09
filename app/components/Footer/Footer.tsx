'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/img/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneIcon from '@mui/icons-material/Phone';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const listTerms = [
    'Chính sách bảo vệ thông tin cá nhân',
    'Điều khoản sử dụng',
    'Quyền và nghĩa vụ',
    'Phương thức thanh toán',
    'Chính sách bảo hành',
    'Chính sách Email Marketing',
    'Chính sách hỗ trợ khách hàng',
    'Liên hệ',
  ]
  return (
    <footer className='py-10 border border-solid border-[#bdc3c7] bg-[#ecf0f1]'>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="flex flex-col justify-center items-center text-center flex-1 flex-shrink-0 px-3 w-full max-w-full">
            <Image src={logo} width={374} height={91} alt='anh' />
            <p className='text-[#db4922] font-bold mb-4'>Công ty cổ phần Giải Pháp doanh nghiệp MCI Solutions</p>
            <p className='text-[#95a5a6] text-[13px] mb-4'>
              <LocationOnIcon/>
               Tầng 5 tòa Starcity, Số 23 Lê Văn Lương,
            Phường Nhân Chính, Quận Thanh Xuân, Thành Phố Hà Nội</p>
          </div>
          <div className="flex flex-col flex-1 flex-shrink-0 px-3 w-full max-w-full">
            <p className='text-[#db4922] font-bold mb-4'>Hỗ trợ khách hàng</p>
            <p className='text-[13px] mb-4 text-[#212529] font-bold'>Hotline Sale Saletech & Martech</p>
            <p className='text-[#95a5a6] text-[13px] mb-4'>
              CEO: 093.414.6016
              <br />
              CTO: 098.252.1378
            </p>
            <p className='text-[13px] mb-4 text-[#212529] font-bold'>Email sale</p>
            <p className='text-[#95a5a6] text-[13px] mb-4'>sonnc@mcisolutions.com.vn</p>
            <p className='text-[13px] mb-4 text-[#212529] font-bold'>Kết nối với chúng tôi</p>
            <div className='flex'>
              <div className='flex justify-center items-center mr-1 rounded-[50%] w-10 h-10 text-white text-xl bg-[#3b5998]'>
                <FacebookRoundedIcon/>
              </div>
              <div className='flex justify-center items-center mr-1 rounded-[50%] w-10 h-10 text-white text-xl bg-[#0e0e0e]'>
                <EmailRoundedIcon/>
              </div>
              <div className='flex justify-center items-center mr-1 rounded-[50%] w-10 h-10 text-white text-xl bg-[#41a248]'>
                <PhoneIcon/>
              </div>
              <div className='flex justify-center items-center mr-1 rounded-[50%] w-10 h-10 text-white text-xl bg-red'>
                <YouTubeIcon/>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 flex-shrink-0 px-3 w-full max-w-full">
            <p className='text-[#db4922] font-bold mb-4'>Chính sách và quy định chung</p>
            <ul className='pl-8 mb-4'>
              {listTerms.map((term,index) => (
                <li key={index} className='group'>
                  <a className='text-[#95a5a6] text-[13px] group-hover:text-[#c62128]' href="">
                  {term}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
