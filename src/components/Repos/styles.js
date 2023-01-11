import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
    overflow: hidden;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`

export const Project = styled.div`
    position: relative;
    width: 360px;
    height: 220px;
    border-radius: 1rem;
    background-image: ${props => `url(${props.repo.image})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    z-index: 1;

    &:hover,
    &:focus {
        div {
            transform: translateY(0);
            opacity: 0.8;
        }
    }

    div {
        position: absolute;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        width: 100%;
        height: 100%;
        background-color: ${props => props.isDarkTheme ? 'var(--dark-theme-yellow)' : 'var(--light-theme-yellow)'};
        border-radius: 1rem;
        transition: all .5s;
        transform: translateY(100%);
        opacity: 0;

        h2 {
            color: #3D3D3D;
            font-size: 1.5rem;
        }

        span {
            color: #3D3D3D;
            font-size: 0.9rem;
            margin: 0.5rem 0;
        }

        a {
            text-decoration: none;
            color: #3D3D3D;
            width: 2.5rem;
            height: 2.5rem;
            background-color: #FFF;
            line-height: none;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`