import { useState } from 'react';
import { Container, DarkTheme } from './styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Profile from '../../components/Profile';
import Repos from '../../components/Repos';

const Home = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <Container isDarkTheme={isDarkTheme}>
            <DarkTheme isDarkTheme={isDarkTheme}>
                <DarkModeIcon onClick={() => setIsDarkTheme(!isDarkTheme)} />
            </DarkTheme>
            <Profile isDarkTheme={isDarkTheme} />
            <Repos isDarkTheme={isDarkTheme} />
        </Container>
    )
}

export default Home;