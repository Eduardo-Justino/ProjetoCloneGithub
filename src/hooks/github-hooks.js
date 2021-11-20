import { useContext } from "react";
import GithubProvider, { GithubContext } from "../providers/github-provider";


const useGitHub = () =>{

 const {githubState, getUser,getUserRepos,getUserStarred} = useContext( GithubContext);

 return {githubState, getUser,getUserRepos,getUserStarred};



};

export default useGitHub;