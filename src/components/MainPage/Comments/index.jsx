import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSwipe from 'react-swipe';
import avatar from './avatar.jpg';
import nextArrow from './carousel-next.svg';
import prevArrow from './carousel-prev.svg';

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  background: #fff;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const H2 = styled.h2`
  font-family: 'Lato-SemiBold';
  font-size: 24px;
  color: #4a4a4a;
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 50px;
  margin: 20px;
`;

const Name = styled.div`
  font-family: 'Lato-Bold';
  font-size: 16px;
`;

const SwipeButton = styled.img`
  top: 35%;
  width: 20px;
  position: absolute;
`;

const PrevButton = styled(SwipeButton)`
  padding: 40px 20px 40px 0;
  left: 20px;
`;

const NextButton = styled(SwipeButton)`
  padding: 40px 0 40px 20px;
  right: 20px;
`;

const Comment = styled.div`
  font-family: 'Lato-Regular';
  font-size: 13px;
  width: 300px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const Thumb = styled.div`
  width: 30px;
  height: 3px;
  border-radius: 3px;
  background-color: ${({ activeIndex, index }) =>
    (activeIndex === index ? '#e9e9e9' : '#b7b7b7')};
  display: inline-block;
  margin: 8px;
`;

export default class extends Component {

  constructor() {
    super();

    this.state = {
      activeIndex: 0,
    };

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.swipeCallback = this.swipeCallback.bind(this);
  }

  swipeCallback(index) {
    this.setState({
      activeIndex: index,
    });
  }

  next() {
    this.refs.reactSwipe.next();
  }

  prev() {
    this.refs.reactSwipe.prev();
  }

  render() {
    return (
      <Wrapper>
        <H2>Отзывы</H2>
        <ReactSwipe
          ref="reactSwipe"
          swipeOptions={{
            continuous: false,
            callback: this.swipeCallback,
          }}
        >
          {/* For some reason the included components don't work correctly */}
          <div>
            <Avatar src={avatar} alt="avatar" />
            <Name>Алексей, Москва</Name>
            <Comment>
              Подарил своей девушке чехол со своим портретом на день валентина.
              Спасибо, хорошие чехлы.
            </Comment>
          </div>

          <div>
            <Avatar src={avatar} alt="avatar" />
            <Name>Алексей, Москва</Name>
            <Comment>
              Подарил своей девушке чехол со своим портретом на день валентина.
              Спасибо, хорошие чехлы.
            </Comment>
          </div>

          <div>
            <Avatar src={avatar} alt="avatar" />
            <Name>Алексей, Москва</Name>
            <Comment>
              Подарил своей девушке чехол со своим портретом на день валентина.
              Спасибо, хорошие чехлы.
            </Comment>
          </div>
        </ReactSwipe>

        <div>
          {[...Array(3)].map((x, i) =>
            <Thumb index={i} activeIndex={this.state.activeIndex} />,
          )}
        </div>

        <PrevButton src={prevArrow} onClick={this.prev} />
        <NextButton src={nextArrow} onClick={this.next} />
      </Wrapper>
    );
  }
}
