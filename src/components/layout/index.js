import React from "react";
import Header from "../header";
import * as S from "./styled";
import useGitHub from "../../hooks/github-hooks";

const Layout = ({ children }) => {

  const { githubState } = useGitHub();

  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;