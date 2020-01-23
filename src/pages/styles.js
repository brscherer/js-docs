import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    float: right;
    height: 100vh;
    text-align: center;
    font-weight: bold;
    color: #FFFFFF;
    background-color: #282C35;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Title = styled.h1`
    text-decoration: underline;
    text-decoration-color: #FF9900;
    font-weight: bold;
    margin-bottom: 0;

    @media (max-width: 768px) {
        padding-top: 26px;
    }
`;

export const Paragraph = styled.p`
    padding: 26px 13px 18px 13px;
    max-width: 70%;
    margin: 0 auto;
    font-weight: 300;

    @media (max-width: 768px) {
        max-width: 100%;
        margin: 26px 13px 18px 13px;
        padding: 0;
    }
`

export const Iframe = styled.div`
    width: 45%;
    border: 0; 
    margin: 0 auto;
    border-radius: 15px;

    @media (max-width: 768px) {
      width: 100%;
    }
    
    & iframe {
        width: 100%;
        height: 285px;
        border: none;

        @media (max-width: 768px) {
            width: 90%;
        }
    }
`;

export const Links = styled.div`
    padding: 10px 0 10px 0;

    & a {
        color: #fff;
        text-decoration: none;
        font-style: italic;                
    }
`;

export const ContentInfos = styled.div`
    padding-bottom: 25px;
`;