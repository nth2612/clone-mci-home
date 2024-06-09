import React from 'react'
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded'
import Image from 'next/image'
import cntt from '../../../public/img/svg/cntt.svg'
import bds from '../../../public/img/svg/bds.svg'
import bltm from '../../../public/img/svg/bltm.svg'
import dlgt from '../../../public/img/svg/dlgt.svg'
import gddt from '../../../public/img/svg/gddt.svg'
import httv from '../../../public/img/svg/httv.svg'
import lorem from '../../../public/img/svg/lorem.svg'
import spld from '../../../public/img/svg/spld.svg'
import vtkb from '../../../public/img/svg/vtkb.svg'
import yte from '../../../public/img/svg/yte.svg'

const JobContainer = () => {
  const linhVucs = [
    {
      name : "CNTT - Truyền thông",
      imgSrc : cntt,
      imgSrc2 : "https://www.mcisolutions.com.vn/static/app_home/images_home/svg/1.svg",
      width: 76,
      height : 76 
    },
    {
      name : "Giáo dục - Đào tạo",
      imgSrc : gddt,
      imgSrc2 : "https://www.mcisolutions.com.vn/static/app_home/images_home/svg/2.svg",
      width: 76,
      height : 76
    },
    {
      name : "Bất động sản",
      imgSrc : bds,
      imgSrc2 : "https://www.mcisolutions.com.vn/static/app_home/images_home/svg/3.svg",
      width: 76,
      height : 76 
    },
    {
      name : "Hỗ trợ tư vấn",
      imgSrc : httv,
      imgSrc2 : "https://www.mcisolutions.com.vn/static/app_home/images_home/svg/4.svg",
      width: 76,
      height : 76 
    },
    {
      name : "Bán lẻ - Thương mại",
      imgSrc : bltm,
      imgSrc2 : "https://www.mcisolutions.com.vn/static/app_home/images_home/svg/5.svg",
      width: 76,
      height : 76 
    },
    {
      name : "Vận tải - Kho bãi",
      imgSrc : vtkb,
      imgSrc2 : "https://www.mcisolutions.com.vn/static/app_home/images_home/svg/6.svg",
      width: 76,
      height : 76 
    },
    {
      name : "Du lịch - Giải trí",
      imgSrc : dlgt,
      imgSrc2 : "https://www.mcisolutions.com.vn/static/app_home/images_home/svg/7.svg",
      width: 76,
      height : 76 
    },
    {
      name : "Y tế",
      imgSrc : yte,
      imgSrc2 : "https://www.mcisolutions.com.vn/static/app_home/images_home/svg/8.svg",
      width: 76,
      height : 76 
    },
    {
      name : "Spa - Làm đẹp",
      imgSrc : spld,
      imgSrc2 : "https://www.mcisolutions.com.vn/static/app_home/images_home/svg/9.svg",
      width: 76,
      height : 76 
    },
    {
      name : "Lorem ispum ??",
      imgSrc : lorem,
      imgSrc2 : "https://www.mcisolutions.com.vn/static/app_home/images_home/svg/10.svg",
      width: 76,
      height : 76 
    }
  ]
  return (
    <div className="mt-5 p-10 flex flex-col justify-center items-center bg-con3">
      <div className='bg-white flex items-center px-4 py-3 shadow-btn-2 rounded-30 uppercase text-[#cb2a27] w-fit'>
        <div className='text-white bg-[#cb2a27] h-7 w-7 flex justify-center items-center rounded-[50%] mr-3'>
          <KeyboardVoiceRoundedIcon/>
        </div>
        Lĩnh vực ngành nghề
      </div>
      <p className='mb-4 mt-5 text-3xl text-white font-bold text-center'>Các ngành nghề sử dụng giải pháp của MCI Solution</p>
      <p className="text-white max-w-[500px] text-center mb-4">Các giải pháp của MCI Solution phù hợp với nhiều lĩnh vực trong đời sống kinh tế - xã hội, trong đó phải kể đến:</p>
      <div className="w-full">
        <div className="container">
          <div className="flex flex-wrap">
            {linhVucs.map((lv,index) => {
              if(index >=0 && index <=4){
                return (
                  <div key={index} className="flex-1 flex-shrink-0 w-full max-w-full px-3">
                    <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-30 mb-5 group hover:bg-con3 border border-solid border-white">
                    <div className='w-20 h-20'>
                      <Image src={lv.imgSrc2} width={lv.width} height={lv.height} alt='' className='group-hover:filter group-hover:brightness-0 group-hover:invert-[1]' />
                    </div>
                      <p className='mb-1 mt-[10px] font-bold group-hover:text-white'>{lv.name}</p>
                    </div>
                  </div>
                )
              }
            })}
          </div>
          <div className="flex flex-wrap">
            {linhVucs.map((lv,index) => {
              if(index >=5 && index <=9){
                return (
                  <div key={index} className="flex-1 flex-shrink-0 w-full max-w-full px-3">
                    <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-30 mb-5 group hover:bg-con3 border border-solid border-white">
                      <div className='w-20 h-20 flex justify-center items-center'>
                        <Image src={lv.imgSrc2} width={lv.width} height={lv.height} alt='' className='group-hover:filter group-hover:brightness-0 group-hover:invert-[1]' />
                      </div>
                      <p className='mb-1 mt-[10px] font-bold group-hover:text-white'>{lv.name}</p>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobContainer
