import { useState } from 'react';
import { Container, DarkTheme } from './styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Profile from '../../components/Profile';

const Home = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <Container isDarkTheme={isDarkTheme}>
            <DarkTheme isDarkTheme={isDarkTheme}>
                <DarkModeIcon onClick={() => setIsDarkTheme(!isDarkTheme)} />
            </DarkTheme>
            <Profile isDarkTheme={isDarkTheme} />
        </Container>
    )
}

export default Home;