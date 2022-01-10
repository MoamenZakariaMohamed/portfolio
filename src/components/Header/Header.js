import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { VscRemote } from 'react-icons/vsc';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display:'flex',alignItems:'center',color:'white',marginBottom:'20px'}}>
          <VscRemote size='3rem'/> <span style={{fontSize:'3rem'}} > Mo'men</span>
        </a>
      </Link>
    </Div1>
    <Div2 style={{marginTop:'5px'}}>
      <li>
        <Link href='#projects'>
          <NavLink>Projects </NavLink>
        </Link>
      </li> 
    
      <li>
        <Link href='#tech'>
          <NavLink>Technologies </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
       <SocialIcons href='https://github.com/MoamenZakariaMohamed'>
         <AiFillGithub size='4rem'/>
       </SocialIcons>
       <SocialIcons href='https://www.linkedin.com/in/mo-men-abdel-raouf-04194a204/'>
         <AiFillLinkedin size='4rem'/>
       </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

