import React from 'react';
import styled from 'styled-components';
import arrowCollapse from './faq-collapse.svg'
import arrowExpand from './faq-expand.svg'

const Wrapper = styled.div`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 40px;
`;

const H2 = styled.h2`
  font-family: 'Lato-SemiBold';
  font-size: 24px;
  color: #4a4a4a;
`;

const Section = styled.section`
  text-align: left;
  background-color: #fff;
  padding: 20px;
`;

const Question = styled.h4`
  color: #7f5152;
  font-family: 'Lato-Bold';
  font-size: 20px;
  margin-bottom: 15px;
`;

const Answer = styled.section`
  color: #80909c;
  font-family: 'Lato-Regular';
  font-size: 16px;
  line-height: 22px;
`;

const Sections = styled.div`
  margin: 45px 15px 20px 15px;
`;

const SectionFolded = styled(Section)`
  background-color: inherit;
  border-bottom: 1px solid #e7eef3;
`;

const Arrow = styled.img`
  width: 15px;
  height: 15px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export default () => (
  <Wrapper>
    <H2>FAQ</H2>

    <Sections>
      <Section>
        <Header>
            <Question>Как сделать заказ</Question>
            <Arrow src={arrowCollapse} />
        </Header>

        <Answer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Answer>
      </Section>

      <SectionFolded>
        <Header>
          <Question>Макет чехла</Question>
            <Arrow src={arrowExpand} />
        </Header>
        <Answer>

        </Answer>
      </SectionFolded>

      <SectionFolded>
        <Header>
          <Question>Доставка и оплата</Question>
            <Arrow src={arrowExpand} />
        </Header>
        <Answer>

        </Answer>
      </SectionFolded>
    </Sections>
  </Wrapper>
);
