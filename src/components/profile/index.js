import React from 'react';
import * as S from './styled'
import useGithub from "../../hooks/github-hooks"

const Profile = () => {

    const { githubState } = useGithub()

    //  useEffect(() => {
    //   console.log(githubState.user);
    //  }, [githubState.user]);

    return (
        <S.Wrapper>
            <S.WrapperImage src={githubState.user.avatar_url}
                alt="picture of user"
            />
            <S.WrapperInfosUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUsername>
                        <h3>Username:</h3>
                        <a
                            href={githubState.user.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {githubState.user.login}
                        </a><br/>
                        
                    </S.WrapperUsername>
                    <S.WrapperInfoSecundary>
                        <div>
                        <h1>Company: {githubState.user.company} </h1>
                        <h1>Location: {githubState.user.location} </h1>
                        <h1>Blog: {githubState.user.blog} </h1>
                        </div>

                    </S.WrapperInfoSecundary>
                </div>
                <S.WrapperStatusCount >
                    <div>
                        <h4>Fallowers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Fallowings</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfosUser>
        </S.Wrapper>
        


    );
}

export default Profile;
