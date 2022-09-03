import React from "react";
import S from "./configPage.style";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import { TiArrowBack } from "react-icons/ti";

const ConfigPage = () => {
  const handleOnClickBack = () => {
    console.log(foi);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Perfil</S.Title>
        <ButtonWithIcon
          icon={<TiArrowBack size="100%" />}
          padding="2px 4px"
          label="Voltar"
          backgroudFill={true}
          reverse={true}
          onClick={handleOnClickBack}
          margin="0 15px 0px 0px"
        />
      </S.Header>
    </S.Container>
  );
};

export default ConfigPage;
