import React from 'react'
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded'
import Image from 'next/image'
import advance from '../../../public/img/advance.png'
import PersonIcon from '@mui/icons-material/Person'
import ShieldIcon from '@mui/icons-material/Shield'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import SettingsIcon from '@mui/icons-material/Settings'

const AdvanceContainer = () => {
  const listCards = [
    {
      icon : <PersonIcon/>,
      title: "200++ Chuyên gia thực chiến về khoa học dữ liệu, Information Technology,",
      desc : "và tư vấn chiến lược giải pháp doanh nghiệp."
    },
    {
      icon : <ShieldIcon/>,
      title: "Công nghệ bảo mật dữ liệu hàng đầu từ MCI Solution -",
      desc : "Đối tác chiến lược của các nhà cung cấp hạ tầng đám mây Việt Nam top đầu Việt Nam."
    },
    {
      icon : <AttachFileIcon/>,
      title: "Hệ sinh thái đa kết nối, đồng bộ dữ liệu trong bộ giải pháp 5.0",
      desc : ", sẵn sàng tích hợp các công cụ chuyên biệt của bên thứ 3 để phục vụ theo đặc thù doanh nghiệp."
    },
    {
      icon : <CheckCircleOutlineIcon/>,
      title: "Năng lực công nghệ cao dựa trên nền tảng công nghệ tích lũy nhiều năm",
      desc : "của MCI Solutions - đơn vị tiên phong trong lĩnh vực công nghệ, truyền thông tại Việt Nam."
    },
    {
      icon : <SettingsIcon/>,
      title: "Phần mềm thân thiện, vận hành tinh gọn,",
      desc : "mọi nhân sự đều dễ dàng sử dụng, hỗ trợ đa ngôn ngữ."
    },
  ]
  return (
    <div className='w-full py-10 '>
      <div className="container">
        <div className='flex flex-wrap'>
          <div className="flex-1 flex-shrink-0 w-full max-w-full px-3">
            <div className='bg-white flex items-center px-4 py-3 shadow-btn-2 rounded-30 uppercase text-[#cb2a27] w-fit'>
              <div className='text-white bg-[#cb2a27] h-7 w-7 flex justify-center items-center rounded-[50%] mr-3'>
                <KeyboardVoiceRoundedIcon/>
              </div>
              Điểm mạnh của MCI Solutions
            </div>
            <p className="text-3xl text-[#bf1937] font-bold mt-7 mb-4">MCI Solutions khác biệt và vượt trội</p>
            <p className="mb-4">MCI Solution tự tin là một trong các công ty hàng đầu trong lĩnh vực giải pháp phần mềm và tích hợp phần cứng, có năng lực cạnh tranh trên khu vực và thị trường quốc tế.</p>
            <Image src={advance} alt='' width={572} height={486}/>
          </div>
          <div className="flex-1 flex-shrink-0 w-full max-w-full px-3">
            <div className='flex flex-wrap'>
              {listCards.map((card,index) => (
                <div key={index} className='mb-6 px-3 w-1/2 max-w-full flex-initial flex-shrink-0 '>
                  <div className='border-none rounded-[15px] shadow-card flex relative flex-col hover:translate-y-[-10px] hover:shadow-cardhov transform duration-[0.2s]'>
                    <div className='flex-auto p-4'>
                      <div className='mb-[10px] text-[#cb2a27] text-[25px]'>
                        {card.icon}
                      </div>
                      <span>
                        <p className='text-[#c62128] mb-4 font-bold'>
                          {card.title}
                        </p>
                        {card.desc}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvanceContainer
