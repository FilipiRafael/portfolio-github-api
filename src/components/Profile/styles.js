import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 425px) {
        max-width: 100vw;
        overflow-x: hidden;
    }

    @media screen and (max-width: 800px) {
        max-width: 100vw;
        overflow-x: hidden;
    }
`

export const Wrapper = styled.div`
    width: 45%;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 425px) {
        width: 80%;
        text-align: center;
        flex-direction: column;
    }

    @media screen and (max-width: 800px) {
        width: 70%;
        text-align: center;
        flex-direction: column;
    }

    @media screen and (min-width: 801px) and (max-width: 1220px) {
        width: 70%;
    }

    @media screen and (min-width: 1440px) {
        max-width: 700px;
    }
`

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid ${props => props.isDarkTheme ? 'var(--dark-theme-yellow)' : 'var(--light-theme-yellow)'};

    @media screen and (max-width: 425px) {
        width: 130px;
        height: 130px;
    }

    @media screen and (max-width: 425px) {
        width: 180px;
        height: 180px;
    }
`

export const Bio = styled.div`
    margin: 0 2rem;
    padding-top: 2rem;

    h1 {
        margin-bottom: 1rem;
    }

    span {
        font-weight: 300;
        font-size: 0.9rem;
    }

    @media screen and (max-width: 425px) {
        margin: 0 0.5rem;
    }

    @media screen and (max-width: 800px) {
            display: flex;
            align-items: center;
            flex-direction: column;
    }

    ul {
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        margin: 1rem 0;

        @media screen and (max-width: 425px) {
            width: 100%;
            margin-top: 2rem;
        }

        @media screen and (max-width: 800px) {
            width: 80%;
            margin-top: 2rem;
        }

        svg {
            cursor: pointer;
            color: ${props => props.isDarkTheme ? 'var(--dark-text-color)' : 'var(--light-text-color)'}
        }
    }
`

export const Informations = styled.ul`
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 0.9rem;

    @media screen and (max-width: 425px) {
        margin: 0;
        max-width: 100vw;
    }

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        text-align: center;
        margin: 0 2rem;
        
        span {
            font-weight: 300;
        }

        @media screen and (max-width: 425px) {
            margin: 0 1rem;
            width: auto;
        }
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 30%;
    margin-bottom: 1rem;

    @media screen and (max-width: 425px) {
        width: 100%;
        margin: 2rem 0;
    }

    @media screen and (min-width: 426px) and (max-width: 800px) {
        width: 100%;
        max-width: 80vw;
        margin: 2rem 0;
    }

    @media screen and (min-width: 801px) and (max-width: 1220px) {
        width: 100%;
        max-width: 80vw;
    }

    a {
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        margin: 1rem 0;
        text-decoration: none;
        color: #3D3D3D;
        background-color: #FFF;
        font-size: 0.9rem;
    }

    button {
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        margin: 1rem 0;
        font-size: 0.9rem;
        background-color: ${props => props.isDarkTheme ? 'var(--dark-theme-yellow)' : 'var(--light-theme-yellow)'};
        svg {
                font-size: 1rem;
                margin-left: 1rem;

                @media screen and (max-width: 800px) {
                       margin: 0;
                }
            }
    }
`

export const YoutubeButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    font-size: 0.9rem;
    background-color: #F70000;
    color: #FFF;
    text-decoration: none;
    z-index: ${props => props.showVideo ? 2 : 1};

    @media screen and (max-width: 425px) {
        width: 90%;
    }

    svg {
        font-size: 2rem;
        margin-right: 0.5rem;
    }
`;

export const YoutubeIframe = styled.iframe`
    width: 560px;
    height: 315px;
    border-radius: 0.5rem;
    transition: all 0.3s;
    opacity: 0;
    transform: translate(0, 100%);
    position: absolute;

    ${props => props.showVideo &&`
        opacity: 1;
        transform: translate(0, 65%);
    `}

    @media screen and (max-width: 600px) {
        width: 90%;
        height: 200px;

        ${props => props.showVideo &&`
            opacity: 1;
            transform: translate(0, 75%);
        `} 
    }
`;