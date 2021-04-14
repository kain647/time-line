import React from "react";
import { GoTriangleRight } from "react-icons/go";
import {
  Container,
  Title,
  TimeLineContainer,
  ItemContent,
  Time,
  Header,
  Tag,
  Text,
  Link,
} from "./styled";

const TimeLine = () => {
  const items = [
    {
      text: "Started working on the credit-card-form repository",
      date: "Apr 8, 2021",
      tag: "credit-card",
      color: "#FFDB14",
      url: "https://github.com/kain647/credit-card-form",
      urlText: "Check it out on GitHub",
    },
    {
      text: "Started working on the wot-stats repository",
      date: "Mar 19, 2021",
      tag: "wot-stats",
      color: "#e17b77",
      url: "https://github.com/kain647/world-of-tanks-statistics",
      urlText: "Check it out on GitHub",
    },
    {
      text: "Started working on the bikes repository",
      date: "Feb 15, 2021",
      tag: "product-list-bikes",
      color: "#1da1f2",
      url: "https://github.com/kain647/product-list-bikes",
      urlText: "Check it out on GitHub",
    },
    {
      text: "Started working on the random-user-generator repository",
      date: "16 Dec 2020",
      tag: "random-user-generator",
      color: "#1da33f",
      url: "https://github.com/kain647/random-user-generator",
      urlText: "Check it out on GitHub",
    },
    {
      text: "Started working on the countdown-timer repository",
      date: "14 Dec 2020",
      tag: "countdown-timer",
      color: "#af1666",
      url: "https://github.com/kain647/countdown-timer",
      urlText: "Check it out on GitHub",
    },
    {
      text: "Started working on the interactive-pricing-component repository",
      date: "Feb 23, 2021",
      tag: "interactive-pricing-component",
      color: "#a1b112",
      url: "https://github.com/kain647/interactive-pricing-component",
      urlText: "Check it out on GitHub",
    },
  ];
  return (
    <Container>
      <Title>Timeline</Title>
      <TimeLineContainer>
        {items.map((item) => {
          return <Item {...item} />;
        })}
      </TimeLineContainer>
    </Container>
  );
};

const Item = (props) => {
  const { date, tag, color, text, url, urlText } = props;
  return (
    <ItemContent>
      <Header>
        <Time>{date}</Time>
        <Tag color={color}>{tag}</Tag>
      </Header>
      <Text>{text}</Text>
      <Link>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {urlText}
        </a>
        <GoTriangleRight />
      </Link>
    </ItemContent>
  );
};

export default TimeLine;
