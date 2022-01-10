import React ,{useEffect ,useRef} from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection,Span2 } from './HeroStyles';
import { init } from 'ityped';


const Hero = (props) => {
  
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1700,
      backSpeed: 100,
      strings: [" Front-End Developer", " using React js"],
    });
  }, []);
  return (
  <Section row noPadding>
     <LeftSection>
         <SectionTitle main center>
             Welcome To My <br />
             Site
         </SectionTitle>
         <SectionText style={{ paddingBottom: "0" }}>
          My name is Mo'men Abdelraouf
        </SectionText>
        <animatedText>
          <h1><Span2 ref={textRef} > </Span2> </h1>
          <br />
        </animatedText>
    </LeftSection> 
  </Section>
);
  };
export default Hero;