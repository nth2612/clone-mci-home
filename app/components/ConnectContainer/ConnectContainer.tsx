import React from 'react'
import styles from './ConnectContainer.module.css'
const ConnectContainer = () => {
  return (
    <div className={`${styles['connect-container']} mt-24 bg-cover bg-no-repeat bg-center py-10`}>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="flex-1 flex-shrink-0 w-full max-w-full py-3 flex flex-col">
            <p className='mb-4 text-[35px] text-white font-bold'>Doanh nghiệp của bạn đã sẵn sàng chuyển đổi tốt hơn?</p>
            <p className='mb-4 text-[15px] text-white'>Ứng dụng công nghệ tự động hàng đầu ngay bây giờ cùng chuyên gia của chúng tôi!</p>
            <div className="flex flex-wrap">
              <div className="flex-1 flex-shrink-0 w-full max-w-full py-3">
                <div className="py-[10px] px-[20px] w-fit bg-white rounded-30 shadow-btn-con1 font-bold cursor-pointer">Chat với chuyên gia tư vấn</div>
              </div>
              <div className="flex-1 flex-shrink-0 w-full max-w-full py-3">
                <div className="py-[10px] px-[20px] w-fit bg-con2 text-white rounded-30 font-bold cursor-pointer">Gọi miễn phí qua internet</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-shrink-0 w-full max-w-full py-3"></div>
        </div>
      </div>
    </div>
  )
}

export default ConnectContainer
