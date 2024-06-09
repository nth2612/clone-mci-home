import React from 'react'
import styles from './HomePage.module.css'
import Image from 'next/image'
import { url } from 'inspector'
import img from '../../../public/img/home_img.png'

const HomePage = () => {
  return (
    <div className={styles['home-page']}>
      <div className='container w-full flex flex-col'>
        <div className='flex flex-wrap py-8 '>
          <div className='flex-1 flex-shrink-0 max-w-full px-3'>
            <div className="flex flex-col">
              <p className='mt-7 mb-4 text-home font-bold text-4xl leading-normal'>Dẫn đầu giải pháp chuyển đổi số về quản lý khách hàng & vận hành doanh nghiệp</p>
              <p className='text-xl mb-4 leading-normal text-p-home'>Nền tảng quản lý toàn diện với các dashboard hỗ trợ khách hàng và cung ứng nhận sự chất lượng cao. </p>
              <button className='bg-home-btn w-40 text-white py-2.5 px-5 m-2.5 cursor-pointer rounded-30 font-bold hover:bg-transparent hover:text-p-home shadow-btn'>Đăng ký ngay !</button>
            </div>
          </div>
          <div className='flex-1 flex-shrink-0 max-w-full px-3'>
            <Image src={img} width={572} height={502} alt='anh' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
