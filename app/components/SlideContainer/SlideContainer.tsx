import React from 'react'

const SlideContainer = () => {
  const listSlide = [
    {
      title: "Tư vấn giải pháp công nghệ",
      desc : "Chúng tôi là đội ngũ chuyên gia công nghệ, cam kết mang đến cho doanh nghiệp của bạn những giải pháp đột phá và hiệu quả. Với tư vấn của chúng tôi, bạn sẽ tiết kiệm được thời gian, công sức và tài nguyên."
    },
    {
      title: "Cung ứng nhân sự chất lượng",
      desc : "Với dịch vụ cho thuê nhân sự ngắn hạn và trung hạn, chúng tôi đáp ứng nhanh chóng và linh hoạt cho các dự án và công việc tạm thời, giúp bạn tiết kiệm thời gian và chi phí tuyển dụng."
    },
    {
      title: "Phân phối các sản phẩm SaaS",
      desc : "Chúng tôi là nhà phân phối hàng đầu các sản phẩm SaaS, cung cấp sự tiện ích và hiện đại cho doanh nghiệp. Bao gồm: Office 365, Power BI Service, Misa Vietnam, Amazon Web Services (AWS), Microsoft Azure."
    },
    {
      title: "Giải pháp công nghệ phần mềm",
      desc : "Zenix 4.0 - Giải pháp công nghệ phần mềm hàng đầu cho doanh nghiệp hiện đại. Với khả năng tùy chỉnh và mở rộng, sản phẩm Zenix 4.0 giúp tối ưu hóa hiệu quả quản lý doanh nghiệp."
    },
    {
      title: "Giải pháp tích hợp phần cứng",
      desc : "Chúng tôi cung cấp giải pháp tích hợp phần cứng đáng tin cậy, giúp doanh nghiệp xây dựng hạ tầng công nghệ hiện đại và hiệu quả.Hãy để chúng tôi giúp bạn xây dựng cơ sở hạ tầng công nghệ mạnh mẽ, đáng tin cậy."
    }
  ]
  return (
    <div className='mt-[50px] flex items-center justify-center h-[500px]'>
      <div className='max-w-[1100px] w-full h-fit mx-auto relative overflow-hidden z-[1] block'>
        <div className='mx-10'></div>
      </div>
    </div>
  )
}

export default SlideContainer
