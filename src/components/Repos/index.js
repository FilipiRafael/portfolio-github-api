/* eslint-disable react/jsx-no-target-blank */

import { Container, Project } from './styles';
import { Link } from '@mui/icons-material';

const Repos = ({ isDarkTheme }) => {

    const reposList = [
        {
            image: '/assets/images/doingdev.svg',
            title: 'Doing.dev',
            description: 'The project has the ultimate goal of being a minimalist todoist with Lofi Music Player.',
            link: 'https://doing-dev.vercel.app/'
        },
        {
            image: '/assets/images/doingdev-mobile.svg',
            title: 'Doing.dev Mobile App',
            description: 'The project has the ultimate goal of being a minimalist todoist App.',
            link: 'https://github.com/FilipiRafael/doingdev-mobile-app'
        },
        {
            image: '/assets/images/firebasechat.svg',
            title: 'Chat App',
            description: 'The idea of the project was to apply, practice and improte my technical skills in mobile development and Firebase.',
            link: 'https://github.com/FilipiRafael/chat-app'
        },
        {
            image: '/assets/images/ecommercecontext.png',
            title: 'Ecommerce App',
            description: 'The idea of the project was to apply, practice and improte my technical skills in mobile development.',
            link: 'https://github.com/FilipiRafael/ecommerce-app'
        },
        {
            image: '/assets/images/robinfood.png',
            title: 'RobinFood',
            description: 'The idea of the project was to apply, practice and improte my technical skills in mobile development.',
            link: 'https://github.com/FilipiRafael/robinfood'
        },
        {
            image: '/assets/images/gatitopetshop.png',
            title: 'Gatito Petshop',
            description: 'The idea of ​​the project was to apply, practice and improve my technical skills in mobile development.',
            link: 'https://github.com/FilipiRafael/petshop-app'
        },
        {
            image: '/assets/images/instaclone.png',
            title: 'Instagram Clone',
            description: 'The idea of the project was to apply, practice and improte my technical skills in mobile development.',
            link: 'https://github.com/FilipiRafael/insta-clone-react-native'
        },
        {
            image: '/assets/images/rocket-help.svg',
            title: 'Rocket Help',
            description: 'The idea of ​​the project was to apply, practice and improve my technical skills in mobile development.',
            link: 'https://github.com/FilipiRafael/rocket-help'
        },
        {
            image: '/assets/images/cambly-clone.png',
            title: 'Cambly Clone',
            description: 'The idea of the project was to apply, practice and improte my technical skills in web development.',
            link: 'https://cambly-ui-clone.vercel.app/'
        },
        {
            image: '/assets/images/alura-space.png',
            title: 'Alura Space',
            description: 'The idea of ​​the project was to apply, practice and improve my technical skills in web development.',
            link: 'https://alura-space-xi.vercel.app/'
        },
        {
            image: '/assets/images/jordan-ecommerce.svg',
            title: 'Jordan Shoes',
            description: 'The project has the ultimate goal of being an ecommerce with responsive design.',
            link: 'https://jordanshoes-ecommerce.vercel.app/'
        },
        {
            image: '/assets/images/card-design.svg',
            title: 'Card Design UI',
            description: 'The idea of the project was to apply, practice and improte my technical skills in web development.',
            link: 'https://filipirafael.github.io/frontendmentor-challenge/'
        },
        {
            image: '/assets/images/first-portfolio.svg',
            title: 'Portfólio 2021',
            description: 'The idea of the project was to use site in my domain for portfolio and professional presentation purposes.',
            link: 'https://filipirafael.github.io/website-portfolio-2022/'
        },
        {
            image: '/assets/images/cinema-next.svg',
            title: 'Movies App',
            description: 'The idea of the project was to apply, practice and improve my technical skills in web development and ReactJS',
            link: 'https://cinema-next.vercel.app/'
        },
        {
            image: '/assets/images/registration-page.svg',
            title: 'Registration Page',
            description: 'The idea of the project was to apply, practice and improve my technical skills in web responsive design.',
            link: 'https://filipirafael.github.io/registration-page/'
        },
        {
            image: '/assets/images/jobs-landing-page.svg',
            title: 'Jobs Page',
            description: 'The idea of the project was to apply, practice and improve my technical skills about web responsive design.',
            link: 'https://filipirafael.github.io/optimusTech/'
        },
    ]

    return (
        <Container>
        {reposList.map((repo) => (
            <Project key={repo.link} isDarkTheme={isDarkTheme} repo={repo}>
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