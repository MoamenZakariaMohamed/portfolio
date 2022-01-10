import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiAccountCircleFill, RiCellphoneFill} from "react-icons/ri";
import { SocialIcons } from '../Header/HeaderStyles';
import {FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
         <RiCellphoneFill/> <LinkItem href="tel:314-343-3432">+20 1001937893</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <RiAccountCircleFill/> <LinkItem href="moamen_zakaria@yahoo.com">
           moamen_zakaria@yahoo.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/MoamenZakariaMohamed'>
         <AiFillGithub size='4rem'/>
       </SocialIcons>
       <SocialIcons href='https://www.linkedin.com/in/mo-men-abdel-raouf-04194a204/'>
         <AiFillLinkedin size='4rem'/>
       </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;