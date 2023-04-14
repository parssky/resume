import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          CodeMode Portfolio
        </SectionTitle>
        <SectionText style={{paddingBottom:0}}>
        The purpose of this portfolio website is to quickly become familiar with my our projects and general information about us. <br/>
          Access contact links for more details and a possible collaboration.
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;