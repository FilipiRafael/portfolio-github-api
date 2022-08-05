/* eslint-disable react/jsx-no-target-blank */

import { Container, Project } from './styles';
import { Link } from '@mui/icons-material';

const Repos = ({ isDarkTheme }) => {

    const reposList = [
        {
            image: '/assets/images/doingdev.svg',
            title: 'Doing.dev',
            description: 'O projeto tem o objetivo final de ser um todoist mininalista com Lofi Music Player.',
            link: 'https://doing-dev.vercel.app/'
        },
        {
            image: '/assets/images/rocket-help.svg',
            title: 'Rocket Help',
            description: 'A ideia do projeto foi para aplicar, práticar e melhorar minhas habilidades técnicas em desenvolvimento mobile.',
            link: 'https://github.com/FilipiRafael/rocket-help'
        },
        {
            image: '/assets/images/first-portfolio.svg',
            title: 'Portfólio 2021',
            description: 'A ideia do projeto foi para utilizar no meu domínio público para fins de portfólio e apresentação profissional.',
            link: 'https://filipirafael.github.io/website-portfolio-2022/'
        },
        {
            image: '/assets/images/cinema-next.svg',
            title: 'Cinema Next',
            description: 'A ideia do website foi para aplicar, práticar e melhorar minhas habilidades técnicas em desenvolvimento web com ReactJS.',
            link: 'https://cinema-next.vercel.app/'
        },
        {
            image: '/assets/images/registration-page.svg',
            title: 'Página de Cadastro',
            description: 'A ideia do website foi para aplicar, práticar e melhorar minhas habilidades técnicas em desenvolvimento web.',
            link: 'https://filipirafael.github.io/registration-page/'
        },
        {
            image: '/assets/images/jobs-landing-page.svg',
            title: 'Página de Vagas',
            description: 'A ideia do website foi para aplicar, práticar e melhorar minhas habilidades técnicas em desenvolvimento web.',
            link: 'https://filipirafael.github.io/optimusTech/'
        },
    ]

    return (
        <Container>
        {reposList.map((repo) => (
            <Project isDarkTheme={isDarkTheme} repo={repo}>
                <div>
                    <h2>{repo.title}</h2>
                    <span>{repo.description}</span>
                    <a href={repo.link} target="_blank"><Link /></a>
                </div>
            </Project>
        ))}
        </Container>
    )
}

export default Repos;