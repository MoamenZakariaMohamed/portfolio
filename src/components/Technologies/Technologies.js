import React from 'react';
import {DiReact} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List} from './TechnologiesStyles';
import { ImHtmlFive, ImCss3,ImGithub,ImGit} from "react-icons/im";
import {DiBootstrap,DiJsBadge } from "react-icons/di";
import Button from '../../styles/GlobalComponents/Button';

 const style = { color: "white", fontSize: "1.5em" };
const Technologies = () =>(
 
  <Section id="tech">
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
      I'm a Front-End  developer using this technologies.
  </SectionText>
  <List>
      <ImHtmlFive size={40}  />
      <ImCss3 size={40}/>
      <DiJsBadge size={40}/> 
      <DiReact size={40}/>
      <DiBootstrap size={40}/>
      <ImGithub size={40}/>
      <ImGit size={40} />
  </List>
  <Button>
          <a href="https://drive.google.com/file/d/17z12Sn2MyPE32JOMch4xYOY_ZC2OGYkM/view?usp=sharing" target='_blank' download style={{color :'white'}}>
                Download my Cv
          </a>
       </Button>
  </Section>

);
export default Technologies;

