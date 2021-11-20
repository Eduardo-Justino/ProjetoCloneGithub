import React from "react";
import Layout from "./components/layout"
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGitHub from "./hooks/github-hooks";


function App() {
  const { githubState } = useGitHub();

  return (

    <Layout>
      {githubState.hasUser ?
      <>
      {githubState.loading ? (
        <p>loadind</p>
      ) : (
        <>
          <Profile />
          <Repositories />
        </>
      )}
      </>: <div>Nenhum usuario pesquisado</div> }
    </Layout>


  );
}

export default App;
