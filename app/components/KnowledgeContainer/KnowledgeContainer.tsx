import React from 'react'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Image from 'next/image';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import VisibilityIcon from '@mui/icons-material/Visibility';
import kn1 from '../../../public/img/knowledge/knowledge1.png'
import kn2 from '../../../public/img/knowledge/knowledge2.png'
import kn3 from '../../../public/img/knowledge/knowledge3.png'
import kn4 from '../../../public/img/knowledge/knowledge4.png'
import kn5 from '../../../public/img/knowledge/knowledge5.png'
import kn6 from '../../../public/img/knowledge/knowledge6.png'

const KnowledgeContainer = () => {
  const cardInfo = [
    {
      imgSrc : kn1,
      title : "Quản lý sản xuất ERP là gì? Ứng dụng của nó trong hoạt động sản xuất của doanh nghiệp",
      date : "15/04/2024",
      view : "212",
      desc: "Việc áp dụng các giải pháp phần mềm tiên tiến như hệ thống hoạch định nguồn lực doanh nghiệp (ERP) đóng vai trò quan..."
    },
    {
      imgSrc : kn2,
      title : "Quản lý sản xuất ERP là gì? Ứng dụng của nó trong hoạt động sản xuất của doanh nghiệp",
      date : "15/04/2024",
      view : "212",
      desc: "Việc áp dụng các giải pháp phần mềm tiên tiến như hệ thống hoạch định nguồn lực doanh nghiệp (ERP) đóng vai trò quan..."
    },
    {
      imgSrc : kn3,
      title : "Quản lý sản xuất ERP là gì? Ứng dụng của nó trong hoạt động sản xuất của doanh nghiệp",
      date : "15/04/2024",
      view : "212",
      desc: "Việc áp dụng các giải pháp phần mềm tiên tiến như hệ thống hoạch định nguồn lực doanh nghiệp (ERP) đóng vai trò quan..."
    },
    {
      imgSrc : kn4,
      title : "Quản lý sản xuất ERP là gì? Ứng dụng của nó trong hoạt động sản xuất của doanh nghiệp",
      date : "15/04/2024",
      view : "212",
      desc: "Việc áp dụng các giải pháp phần mềm tiên tiến như hệ thống hoạch định nguồn lực doanh nghiệp (ERP) đóng vai trò quan..."
    },
    {
      imgSrc : kn5,
      title : "Quản lý sản xuất ERP là gì? Ứng dụng của nó trong hoạt động sản xuất của doanh nghiệp",
      date : "15/04/2024",
      view : "212",
      desc: "Việc áp dụng các giải pháp phần mềm tiên tiến như hệ thống hoạch định nguồn lực doanh nghiệp (ERP) đóng vai trò quan..."
    },
    {
      imgSrc : kn6,
      title : "Quản lý sản xuất ERP là gì? Ứng dụng của nó trong hoạt động sản xuất của doanh nghiệp",
      date : "15/04/2024",
      view : "212",
      desc: "Việc áp dụng các giải pháp phần mềm tiên tiến như hệ thống hoạch định nguồn lực doanh nghiệp (ERP) đóng vai trò quan..."
    }
  ]
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='bg-white flex items-center px-4 py-3 shadow-btn-2 rounded-30 uppercase text-[#cb2a27] w-fit'>
        <div className='text-white bg-[#cb2a27] h-7 w-7 flex justify-center items-center rounded-[50%] mr-3'>
          <QuestionMarkIcon/>
        </div>
        Hôm nay có gì ?
      </div>
      <p className='mb-4 text-center text-3xl text-[#ce3027] my-[30px] font-bold'>Chia sẻ kiến thức với chúng tôi</p>
      <div className="container">
        <div className='flex flex-wrap'>
          {cardInfo.map((card,index)=>{
            if(index >=0 && index <=2){
              return (
                <div key={index} className='flex-1 flex-shrink-0 w-full max-w-full px-3'>
                  <div className='flex flex-col bg-white rounded-[15px] group shadow-card mb-[30px] p-[15px] hover:translate-y-[-10px] hover:shadow-cardhov transform duration-[0.2s]'>
                    <div className='overflow-hidden w-full max-h-[200px]'>
                      <Image className='max-h-[300px] w-full rounded-[15px]' src={card.imgSrc} width={card.imgSrc.width} height={card.imgSrc.height} alt='' />
                    </div>
                    <p className='mb-4 mt-[10px] text-[15px] font-bold'>{card.title}</p>
                    <div className='text-[#7f8c8d] text-[13px] flex items-center justify-start'>
                      <WatchLaterIcon className='mr-1'/>
                      {card.date}
                      <VisibilityIcon className='ml-[10px] mr-1' />
                      {card.view} lượt xem
                    </div>
                    <p className='text-[#7f8c8d] text-[13px] mt-[10px] mb-4'>{card.desc}</p>
                    <div className='cursor-pointer group-hover:bg-con3 group-hover:border-transparent group-hover:text-white py-[7px] px-[10px] border border-solid border-[#cb2a27] text-[#cb2a27] w-fit rounded-30 text-xs font-bold'>Tìm hiểu thêm</div>
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div className='flex flex-wrap'>
          {cardInfo.map((card,index)=>{
            if(index >=3 && index <=5){
              return (
                <div key={index} className='flex-1 flex-shrink-0 w-full max-w-full px-3'>
                  <div className='flex flex-col bg-white rounded-[15px] group shadow-card mb-[30px] p-[15px] hover:translate-y-[-10px] hover:shadow-cardhov transform duration-[0.2s]'>
                    <div className='overflow-hidden w-full max-h-[200px]'>
                      <Image className='max-h-[300px] w-full rounded-[15px]' src={card.imgSrc} width={card.imgSrc.width} height={card.imgSrc.height} alt='' />
                    </div>
                    <p className='mb-4 mt-[10px] text-[15px] font-bold'>{card.title}</p>
                    <div className='text-[#7f8c8d] text-[13px] flex items-center justify-start'>
                      <WatchLaterIcon className='mr-1'/>
                      {card.date}
                      <VisibilityIcon className='ml-[10px] mr-1' />
                      {card.view} lượt xem
                    </div>
                    <p className='text-[#7f8c8d] text-[13px] mt-[10px] mb-4'>{card.desc}</p>
                    <div className='cursor-pointer group-hover:bg-con3 group-hover:border-transparent group-hover:text-white py-[7px] px-[10px] border border-solid border-[#cb2a27] text-[#cb2a27] w-fit rounded-30 text-xs font-bold'>Tìm hiểu thêm</div>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default KnowledgeContainer
