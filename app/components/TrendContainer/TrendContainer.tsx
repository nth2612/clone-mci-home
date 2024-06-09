import React from 'react'
import trendimg from '../../../public/img/trend-img.png'
import avt from '../../../public/img/avatar.jpg'
import Image from 'next/image'
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';

const TrendContainer = () => {
  return (
    <div className='trend-container mt-12 py-10'>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="flex-1 flex-shrink-0 w-full max-w-full py-3">
            <div className='bg-white flex items-center px-4 py-3 shadow-btn-2 rounded-30 uppercase text-[#cb2a27] w-fit'>
              <div className='text-white bg-[#cb2a27] h-7 w-7 flex justify-center items-center rounded-[50%] mr-3'>
                <KeyboardVoiceRoundedIcon/>
              </div>
              Xu thế tất yếu
            </div>
            <p className="text-3xl text-[#bf1937] font-bold mt-7 mb-4 leading-normal">Đồng hành xu thế chuyển đổi số cho doanh nghiệp cả nước.</p>
            <p className='mb-4'>
            Liên hệ ngay với chúng tôi qua số hotline 
            <span className='text-[#cb2a27] font-bold'> 093.414.6016 </span>
            để được hướng dẫn.
            </p>
            <p className='mb-4'>
            Chúng tôi trân trọng và rất hân hạnh được phục vụ!
            </p>
            <div className='relative'>
              <Image className='w-12 h-12 rounded-[50%] border-2 border-solid border-white absolute' src={avt} height={46} width={46} alt=''/>
              <Image className='w-12 h-12 rounded-[50%] border-2 border-solid border-white absolute left-[25px]' src={avt} height={46} width={46} alt=''/>
              <Image className='w-12 h-12 rounded-[50%] border-2 border-solid border-white absolute left-[50px]' src={avt} height={46} width={46} alt=''/>
              <Image className='w-12 h-12 rounded-[50%] border-2 border-solid border-white absolute left-[75px]' src={avt} height={46} width={46} alt=''/>
            </div>
          </div>
          <div className="flex-1 flex-shrink-0 w-full max-w-full py-3">
            <Image src={trendimg} width={572} height={471} alt='anh'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendContainer
