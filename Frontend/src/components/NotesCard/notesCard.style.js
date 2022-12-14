import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  text-decoration: none;
  border-radius: 6px;
  padding: 20px;
  background-color: ${({ boxcolor }) => (boxcolor ? boxcolor : "#fff")};
  margin: 20px;
  overflow: hidden;
  box-shadow: 1px 1px 4px #c1bebe;

  @media (max-width: 330px) {
    margin: 5px;
  }

  &:hover {
    transform: translate(-1px, -1px);
  }
`;

const WrapperTitle = styled.div``;

const Title = styled.h4`
  color: ${({ titleColor }) => (titleColor ? titleColor : "#000")};
  font-size: 1.1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const WrapperContent = styled.div``;

const Content = styled.p`
  color: ${({ contentColor }) => (contentColor ? contentColor : "#000")};
  font-size: 0.9rem;
  margin-top: 10px;
  font-weight: 500;
  line-height: 18px;
  overflow: hidden;
  height: 80%;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
`;

export default { Card, Title, Content, WrapperTitle, WrapperContent };
