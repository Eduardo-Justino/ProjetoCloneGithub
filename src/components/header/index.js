import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks"

const Header = () => {

  const {getUser,githubState} = useGithub();
  const [usernameForSearch, setusernameForSearch] = useState();

  const submitGetUser = () => {


    if (!usernameForSearch)  alert('nenhum usuario encontrado');
    return getUser(usernameForSearch);

  };

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o username"
          onChange={(event)=>setusernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};


export default Header;