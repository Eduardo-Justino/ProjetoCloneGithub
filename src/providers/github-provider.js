import React, { Children, createContext, useCallback, useState } from 'react';
import api from '../services/api'



export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],


});

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        loading: false,
        hasUser: false,

        user: {
            id:undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            avatar_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0


        },
        repositories: [],
        starred: [],

    });

    const getUser = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
            hasUser: false,

        }));


        api.get(`users/${username}`).then(({ data }) => {
            setGithubState(prevState => ({
                ...prevState,
                hasUser: true,
                user: {
                    id: data.id,
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
                    avatar_url: data.avatar_url

                }
            }));

        }).finally(() => {
            setGithubState((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }));
        })
    };

    const getUserRepos = (username) => {
        api.get(`users/${username}/repos`).then(({ data }) => {
          console.log("data: " + JSON.stringify(data));
          setGithubState((prevState) => ({
            ...prevState,
            repositories: data,
          }));
        });
      };
    
      const getUserStarred = (username) => {
        api.get(`users/${username}/starred`).then(({ data }) => {
          console.log("data: " + JSON.stringify(data));
          setGithubState((prevState) => ({
            ...prevState,
            starred: data,
          }));
        });
      };

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),

    };

    return (
        <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
    );
};

export default GithubProvider;
