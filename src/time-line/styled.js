import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const Title = styled.h1`
  display: flex;
`;
export const TimeLineContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 600px;
  :after {
    content: "";
    position: absolute;
    width: 4px;
    height: 100%;
    background-color: #e17b77;
    z-index: -1;
  }
`;
export const ItemContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 350px;
  border-radius: 5px;
  background-color: #fff;
  padding: 15px;
  box-shadow: 0 0 5px rgb(0 0 0 / 30%);
  transform: translateX(-55%);
  :after {
    content: "";
    display: block;
    position: absolute;
    width: 5%;
    height: 2px;
    background-color: #e17b77;
    right: -5%;
    top: calc(50% - 1px);
  }
  :before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 3px solid #e17b77;
    right: calc(-5% - 10px);
    top: calc(50% - 10px);
    border-radius: 50px;
    z-index: 5;
  }
  :nth-child(2n) {
    transform: translateX(55%);
    :after {
      left: -5%;
    }
    :before {
      left: calc(-5% - 10px);
    }
  }
`;
export const Time = styled.div`
  display: flex;
  color: #777;
  font-size: 12px;
  font-weight: bold;
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const Tag = styled.div`
  display: flex;
  position: absolute;
  left: auto;
  right: 5px;
  top: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px;
  text-transform: uppercase;
  background-color: ${({ color }) => color};
`;
export const Text = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  margin: 15px 0;
`;
export const Link = styled.div`
  display: flex;
  align-items: center;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  a {
    text-decoration: none;
    margin-right: 5px;
  }
`;
