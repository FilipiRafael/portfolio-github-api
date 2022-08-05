import styled from 'styled-components';

export const Container = styled.main`
    height: 100%;
    width: 100vw;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all .5s;
    background-color: ${props => props.isDarkTheme ? 'var(--dark-background-color)' : 'var(--light-background-color)'};
    color: ${props => props.isDarkTheme ? 'var(--dark-text-color)' : 'var(--light-text-color)'};
`

export const DarkTheme = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .5s;
    background-color: ${props => props.isDarkTheme ? 'var(--dark-theme-icon-background-color)' : 'var(--light-theme-icon-background-color)'};
    color: ${props => props.isDarkTheme ? 'var(--dark-text-color)' : 'var(--light-text-color)'};
`

export const Copyright = styled.span`
    margin-top: 5rem;
    font-size: 1rem;
    font-weight: 500;
    /* color: #A3ABB2; */
    color: ${props => props.isDarkTheme ? '#A3ABB2' : '#575757'}
`