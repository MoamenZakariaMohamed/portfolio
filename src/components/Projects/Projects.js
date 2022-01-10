import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { FiMonitor } from "react-icons/fi";
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => (
  <Section noPadding id='projects'>
    <SectionDivider />
    <SectionTitle main> Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,image,title,description,tags,source,visit})=>(
         <BlogCard key={id}>
           <Img src={image} />
           <TitleContent>
             <HeaderThree title={title} ></HeaderThree>
              <Hr />
           </TitleContent>
           <CardInfo>{description}</CardInfo>
           <div>
             <TitleContent>technology</TitleContent>
             <TagList>
               {tags.map((tag,i)=>(
                 <Tag key={i}>{tag}</Tag>
               ))}
             </TagList>
           </div>
           <UtilityList>
             <ExternalLinks href={visit}> <FiMonitor /></ExternalLinks>
             <ExternalLinks href={source}><AiFillGithub /></ExternalLinks>
           </UtilityList>
         </BlogCard> 
      ))}
    </GridContainer>
  </Section>
);

export default Projects;