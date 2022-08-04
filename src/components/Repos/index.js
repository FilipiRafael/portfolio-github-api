/* eslint-disable react/jsx-no-target-blank */
import { Container, Language, Description, LinkIcon } from './styles';
import { Link } from '@mui/icons-material';

const Repos = ({ repos, isDarkTheme }) => {
    return (
        <Container isDarkTheme={isDarkTheme}>
            {repos.map((repo) => (
                repo.description && repo.language &&
                <li key={repo.id}>
                    <Language>{`<${repo.language} />`}</Language>
                    <Description>{repo.description}</Description>
                    <LinkIcon isDarkTheme={isDarkTheme}>
                        {repo.html_url && <a href={repo.html_url} target="_blank"><Link /></a>}
                    </LinkIcon>
                </li>
            ))}
        </Container>
    )
}

export default Repos;