import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { dur:'Aug-Oct 2021', text: 'ITI  summer intern', },
  { dur:'mar-may2021', text: 'Front-End Nanodegree', },
];

const Acomplishments = () => (
  <Section id="achieve">
  <SectionTitle> Achievements</SectionTitle>
  <Boxes>
    {data.map((card, index) => (
      <Box key={index}>
        <BoxText>{card.text}</BoxText>
        <BoxNum>{`${card.dur}`}</BoxNum>
      </Box>
    ))}
  </Boxes>
  <SectionDivider />
</Section>
);
export default Acomplishments;
