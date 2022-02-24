import { COLOR_PINK } from '../../../../styles/colors';
import { FC } from 'react';
import FaqCard from './components/FaqsCard';
import LessThanIcon from '../../../../assets/images/LessThanIcon.svg';
import MoreThanIcon from '../../../../assets/images/MoreThanIcon.svg';
import SectionWrapper from '../../../../components/SectionWrapper/SectionWrapper';
import { faqsData } from './FaqsData';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledFaqSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  position: relative;
  @media (min-width: 650px) {
    padding: 3rem 5rem;
  }
`;

const StyledWaveContainer = styled.div`
  background: ${COLOR_PINK};
  overflow-y: hidden;
  height: 5rem;
  width: 100%;
`;

const StyleMoreIcon = styled.img`
  position: absolute;
  right: -1rem;
  top: 5rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;

const StyleLessIcon = styled.img`
  position: absolute;
  left: -1rem;
  top: 50%;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;

const Faqs: FC = () => {
  return (
    <SectionWrapper color={COLOR_PINK}>
      <div style={{ maxWidth: 1024 }}>
        <StyledFaqSection>
          {faqsData.map((faq, index) => (
            <FaqCard faq={faq} index={index} key={index} />
          ))}
          <StyleMoreIcon src={MoreThanIcon} />
          <StyleLessIcon src={LessThanIcon} />
        </StyledFaqSection>
      </div>
      <StyledWaveContainer>
        <svg
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d='M0.00,49.98 C335.50,45.89 358.63,106.09 501.41,81.42 L500.00,150.00 L0.00,150.00 Z'
            style={{ stroke: 'none', fill: '#06d6a0' }}
          ></path>
        </svg>
      </StyledWaveContainer>
    </SectionWrapper>
  );
};

export default Faqs;
