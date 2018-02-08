import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';

const Wrapper = styled.div`
  background-color: #f9f9f9;
  padding-bottom: 60px;
`;

const H2 = styled.h2`
  margin: 30px;
  text-align: center;
`;

const Table = styled.table`
  border: 1px solid #e1e1e1;
  width: 100%;
  border-collapse: collapse;
  color: #222222;
  font-size: 15px;
  
  & td, th {
    padding: 15px;
    width: 50%;
    border: 1px solid #e1e1e1;
  }  
  
  & thead {
    background-color: #e1e1e1;
    font-family: 'Lato-Regular';
    font-size: 18px;
    
    & th {
      padding-left: 30px;   
    }  
  }   
`;

const TableWrapper = styled.div`
  padding: 0 15px;
  
  @media (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`;

const Subhead = styled.tr`
  font-family: 'Lato-Regular';
  font-weight: bold;
  color: #a3a3a3;
`;

const LinkToFooter = styled.span`
  color: #ff5657;
  border-bottom: 1px dashed #ff5657;
`;

const ItalicText = styled.span`
  font-family: 'Lato-Italic';
`;

const Description = styled.div`
  padding: 20px 0;
  font-family: 'Lato-Regular';
`;

const scroller = Scroll.scroller;

const handleClick = () => {
  scroller.scrollTo('SelfDeliveryAnchor', {
    duration: 800,
    delay: 100,
    smooth: true,
  });
};

export default () => (
  <Wrapper>
    <H2>Доставка</H2>
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th colSpan="2">Москва</th>
          </tr>
        </thead>
        <Subhead>
          <td>Способ доставки</td>
          <td>Стоимость</td>
        </Subhead>
        <tr>
          <td>Самовывоз<br />
            (<LinkToFooter onClick={handleClick}>как забрать</LinkToFooter>)
          </td>
          <td>бесплатно</td>
        </tr>
        <tr>
          <td>Доставка курьером <br />
            в пределах МКАД</td>
          <td>350р.</td>
        </tr>
      </Table>

      <Table>
        <thead>
          <tr>
            <th colSpan="2">Доставка по России</th>
          </tr>
        </thead>
        <tr>
          <td>
            «Почта России» обычное отправление <ItalicText>
            (5-10 дней, в зависимости от региона)</ItalicText>
          </td>
          <td>
            190р. - 290р.
          </td>
        </tr>
        <tr>
          <td>
            «Почта России» первый
            класс <ItalicText>(4-7 дней, в
            зависимости от региона)</ItalicText>
          </td>
          <td>
            250р. - 350р.
          </td>
        </tr>
        <tr>
          <td>
            Доставка транспортными
            компаниями <ItalicText>(курьер до
            двери, доставка до склада, 2-5 дней, в
            зависимости от региона)</ItalicText>
          </td>
          <td>
            от 350р.
          </td>
        </tr>
      </Table>

      <Description>
        Напишите нам и мы подберем для Вас оптимальный по стоимости и срокам вариант доставки.
      </Description>
    </TableWrapper>
  </Wrapper>
);
