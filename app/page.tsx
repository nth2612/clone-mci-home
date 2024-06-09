import Link from "next/link";
import NavWrapper from "./components/NavWrapper/NavWrapper";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import TrendContainer from "./components/TrendContainer/TrendContainer";
import ConnectContainer from "./components/ConnectContainer/ConnectContainer";
import JobContainer from "./components/JobContainer/JobContainer";
import AdvanceContainer from "./components/AdvanceContainer/AdvanceContainer";
import About from "./components/About/About";
import KnowledgeContainer from "./components/KnowledgeContainer/KnowledgeContainer";
import SlideContainer from "./components/SlideContainer/SlideContainer";

export default function Home() {
  return (
    <>
      <NavWrapper/>
      <HomePage/>
      <div className="container mt-12 flex">
        <div className="flex-initial flex-shrink-0 w-1/12 px-3"></div>
        <div className="text-center w-10/12">
          <p className="text-xl font-bold mb-4">
            Với
            <span className="text-red"> bộ giải pháp của MCI Solutions </span>
            sẽ giúp hoàn thiện hoạt động chuyển đổi số cho doanh nghiệp phát triển thành
            <span className="text-red"> doanh nghiệp số</span>
            , cho phép
            <span className="text-orange"> tự động hoá quy trình </span>
            kinh doanh đa kênh để bứt phá doanh số
          </p>
          <p>
            Trong chuyển đổi số, quan trọng nhất là xây dựng được một thương hiệu mạnh và một chiến thuật kinh doanh hợp lý, giúp công ty của bạn tiếp cận số lượng khách hàng số lượng lớn và sinh lời mạnh mẽ, chúng tôi sẽ giúp bạn:
          </p>
        </div>
        <div className="flex-initial flex-shrink-0 w-1/12 px-3"></div>
      </div>
      <SlideContainer/>
      <About/>
      <JobContainer/>
      <AdvanceContainer/>
      <KnowledgeContainer/>
      <ConnectContainer/>
      <TrendContainer/>
      <Footer/>
      <div className="flex py-7 justify-center items-center font-bold">Copyright © 2023 MCI Solutions</div>
    </>
  );
}
