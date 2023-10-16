'use client';

import { Navbar } from 'flowbite-react';
import Link from 'next/link';

export default function DefaultNavbar() {
  return (
    <Navbar fluid className='bg-[#050402] max-w-screen-xl m-auto'>
      <Navbar.Brand href="#">        
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Elendu Ifeanyi</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">
          <span className='text-white'>About</span>
          
        </Navbar.Link>
        <Navbar.Link href="#">Portfolio</Navbar.Link>      
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


