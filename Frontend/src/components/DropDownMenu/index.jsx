import React from "react";
import S from "./dropDown.style";
import { GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <S.Container>
      <S.List>
        <S.Item to="/logout">
          <li>
            <span>Sair</span>
          </li>
          <GoSignOut />
        </S.Item>
      </S.List>
      <S.Span>só tem isso</S.Span>
    </S.Container>
  );
};

export default DropDownMenu;
