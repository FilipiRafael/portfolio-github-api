/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState, Fragment } from 'react';
import api from '../../services/api';
import { Container, Avatar, Bio, Wrapper, Informations, ButtonWrapper } from './styles';
import { YouTube, GitHub, LinkedIn, Instagram, DownloadRounded, Newspaper } from '@mui/icons-material';
import { saveAs } from 'file-saver';

const Profile = ({ isDarkTheme }) => {

    const [profile, setProfile] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const downloadFile = () => {
        saveAs(
            'https://drive.google.com/file/d/1D6-n-vViiyRu5C4TTHlpkcC0FnNN9_Fa/view?usp=share_link',
            'Filipi-Rafael.pdf'
        );
    };

    const getGithubProfile = () => {
        api.get()
        .then((response) => {
            setProfile(response.data);
            setIsLoading(false);
        })
        .catch((err) => console.error(err));
    }
    
    useEffect(() => {
        getGithubProfile();
    }, [])

    return (
        <Container>
            {!isLoading && (
                <Fragment>
                    <Wrapper>
                        <Avatar isDarkTheme={isDarkTheme} src={profile.avatar_url} alt="avatar" aria-hidden />
                        <Bio isDarkTheme={isDarkTheme}>
                            <h1>{profile.name}</h1>
                            <span>{profile.bio}</span>
                            <ul>
                                <li>
                                    <a href={profile.html_url} alt="github link" target="_blank">
                                        <GitHub />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/filipi-rafael-developer/" alt="linkedin link" target="_blank">
                                        <LinkedIn />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/filipi.rafael.7/" alt="instagram link" target="_blank">
                                        <Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UC_ac-cJ2QJicAg31hBDOH5Q" alt="youtube link" target="_blank">
                                        <YouTube />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://medium.com/@filipirafael.123" alt="medium link" target="_blank">
                                        <Newspaper />
                                    </a>
                                </li>
                            </ul>
                        </Bio>
                    </Wrapper>
                    <Informations>
                        <li>
                            <span>{profile.public_repos}</span>
                            <span>Repositories</span>
                        </li>
                        <li>
                            <span>{profile.followers}</span>
                            <span>Followers</span>
                        </li>
                        <li>
                            <span>{profile.following}</span>
                            <span>Following</span>
                        </li>
                    </Informations>
                    <ButtonWrapper isDarkTheme={isDarkTheme}>
                        <button onClick={downloadFile}>Download CV <DownloadRounded /></button>
                        <a href="https://wa.me/message/6DL7XBDWN7AOM1" target="_blank">Contact me</a>
                    </ButtonWrapper>
                </Fragment>
            )}
        </Container>
    )
}

export default Profile;