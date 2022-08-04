import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 45%;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid ${props => props.isDarkTheme ? 'var(--dark-theme-yellow)' : 'var(--light-theme-yellow)'};
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

    ul {
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        margin: 1rem 0;

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
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    margin-bottom: 1rem;

    button {
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;

        svg {
            font-size: 1rem;
            margin-left: 1rem;
        }
    }

    .download-button {
       background-color: ${props => props.isDarkTheme ? 'var(--dark-theme-yellow)' : 'var(--light-theme-yellow)'};
    }
`