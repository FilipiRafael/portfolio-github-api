import { useState } from 'react';
import { Container, DarkTheme } from './styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Home = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <Container isDarkTheme={isDarkTheme}>
            <DarkTheme isDarkTheme={isDarkTheme}>
                <DarkModeIcon onClick={() => setIsDarkTheme(!isDarkTheme)} />
            </DarkTheme>
        </Container>
    )
}

export default Home;