import React from 'react'
import styles from './NavWrapper.module.css'
import logo from '../../../public/img/logo.png'
import Image from "next/image";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const NavWrapper = () => {
  return (
    <div className={styles['nav-wrapper']}>
      <nav className='py-2 bg-slate-50 flex justify-start items-center flex-nowrap relative '>
        <a href="" className='mr-4 py-1'>
          <Image src={logo} width={300} height={70} alt={""} className='px-5' />
        </a>
        <div className='ml-24 flex basis-auto grow items-center h-full'>
          <ul className='flex-row flex h-full'>
            <li className='flex items-center'>
              <a className="p-2 group block relative hover:after:absolute hover:after:content-[''] hover:after:left-0 hover:after:right-0 hover:after:h-1 hover:after:bg-primary-bg hover:after:top-11 hover:after:rounded-4 hover:font-semibold bg-clip-text hover:bg-primary-text hover:bg-gradient-to-r text-transparent hover:from-primary-left hover:to-primary-right" href="/">
                <b className='text-black-0 group-hover:text-transparent'>Giới thiệu</b>
              </a>
            </li>
            <li className='flex items-center'>
              <a className="p-2 group block relative hover:after:absolute hover:after:content-[''] hover:after:left-0 hover:after:right-0 hover:after:h-1 hover:after:bg-primary-bg hover:after:top-11 hover:after:rounded-4 hover:font-semibold bg-clip-text hover:bg-primary-text hover:bg-gradient-to-r text-transparent hover:from-primary-left hover:to-primary-right" href='/'>
                <b className='text-black-0 group-hover:text-transparent'>Giải pháp</b>
              </a>
            </li>
            <li className='flex items-center'>
              <a className="p-2 group block relative hover:after:absolute hover:after:content-[''] hover:after:left-0 hover:after:right-0 hover:after:h-1 hover:after:bg-primary-bg hover:after:top-11 hover:after:rounded-4 hover:font-semibold bg-clip-text hover:bg-primary-text hover:bg-gradient-to-r text-transparent hover:from-primary-left hover:to-primary-right" href='/'>
                <b className='text-black-0 group-hover:text-transparent'>Bài viết</b>
              </a>
            </li>
            <li className='flex items-center'>
              <a className="p-2 group block relative hover:after:absolute hover:after:content-[''] hover:after:left-0 hover:after:right-0 hover:after:h-1 hover:after:bg-primary-bg hover:after:top-11 hover:after:rounded-4 hover:font-semibold bg-clip-text hover:bg-primary-text hover:bg-gradient-to-r text-transparent hover:from-primary-left hover:to-primary-right" href='/'>
                <b className='text-black-0 group-hover:text-transparent'>Videos</b>
              </a>
            </li>
            <li className='flex items-center'>
              <a className="p-2 group block relative hover:after:absolute hover:after:content-[''] hover:after:left-0 hover:after:right-0 hover:after:h-1 hover:after:bg-primary-bg hover:after:top-11 hover:after:rounded-4 hover:font-semibold bg-clip-text hover:bg-primary-text hover:bg-gradient-to-r text-transparent hover:from-primary-left hover:to-primary-right" href='/'>
                <b className='text-black-0 group-hover:text-transparent'>Tuyển dụng</b>
              </a>
            </li>
            <li className='flex items-center'>
              <a className="p-2 group block relative hover:after:absolute hover:after:content-[''] hover:after:left-0 hover:after:right-0 hover:after:h-1 hover:after:bg-primary-bg hover:after:top-11 hover:after:rounded-4 hover:font-semibold bg-clip-text hover:bg-primary-text hover:bg-gradient-to-r text-transparent hover:from-primary-left hover:to-primary-right" href='/'>
                <b className='text-black-0 group-hover:text-transparent'>Đăng nhập</b>
              </a>
            </li>
            <li className='flex items-center'>
              <a href="" className='flex items-center justify-center w-37.5 h-12.5 text-white rounded-30 text-center bg-primary-bg'>
                <LocalPhoneIcon className='mr-1 w-5 h-5' />
                <strong>093.414.6016</strong>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavWrapper
