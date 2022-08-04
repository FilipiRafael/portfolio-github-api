import { useState, useEffect } from 'react';
import { Container, DarkTheme } from './styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Profile from '../../components/Profile';
import Repos from '../../components/Repos';
import api from '../../services/api';

const Home = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [repos, setRepos] = useState([]);

    const getRepos = () => {
        api.get('/repos')
        .then((response) => setRepos(response.data))
        .catch((err) => console.error(err));
    }

    useEffect(() => {
        getRepos();
    }, [repos]);

    return (
        <Container isDarkTheme={isDarkTheme}>
            <DarkTheme isDarkTheme={isDarkTheme}>
                <DarkModeIcon onClick={() => setIsDarkTheme(!isDarkTheme)} />
            </DarkTheme>
            <Profile isDarkTheme={isDarkTheme} />
            <Repos repos={repos} isDarkTheme={isDarkTheme} />
        </Container>
    )
}

export default Home;