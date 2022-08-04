import styled from 'styled-components';

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 2rem 0;

    li {
        list-style-type: none;
        margin: 2.5rem 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        a {
            display: block;
            color: ${props => props.isDarkTheme ? 'var(--dark-text-color)' : 'var(--light-text-color)'};
        }
    }
`

export const LinkIcon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${props => props.isDarkTheme ? 'var(--dark-theme-yellow)' : 'var(--light-theme-yellow)'};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    a {
        line-height: 0;
    }
    
    svg {
        color: #3D3D3D;
    }
`

export const Language = styled.span`
    font-weight: 500;
    margin-bottom: 0.5rem;
    display: block;
`

export const Description = styled.span`
    font-weight: 300;
`