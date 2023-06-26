import styled, { css } from 'styled-components';
import { devices } from './devices';

const Frame = styled.div`
    width: 740px;
    height: 100%;
    border: 1px solid lightgrey;
    box-shadow: 2px 2px 2px #eee;
    overflow: hidden;
    @media screen and ${devices.md} {
        width: 90%;
    }
    @media only screen and (min-device-width: 320px) and (max-device-height: 812px) {
        height: 90%;
    }
`;

const Column = styled.div`
    width: 12.4%;
    height: 40px;
`;

const Header = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 10px 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => (props.initial && '#ffffff') || '#f5f6fa'};
    height: ${(props) => (props.initial && '9%') || '6%'};
    }
`;

const Button = styled.div`
    cursor: pointer;
`;

const Body = styled.div`
    width: ${(props) => (props.initial && '87.6%') || '100%'};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: ${(props) => (props.workarea && 'scroll') || 'hidden'};
    height: ${(props) => (props.workarea && '63%') || 'auto'};
`;

const Hours = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 12.4%;
    height: 100%;
`

const BodyWork = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 87.6%;
    height: 100%;
    
`;

const Day = styled.div`
    width: 14.2%;
    height: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${(props) => (props.today && 'red' || 'transparent')};
    border-radius: ${(props) => (props.today && '50%' || '0%')};
    color: ${(props) => (props.today && '#ffffff' || '#000000')};
`;

const WorkBlock = styled.div`
    width: ${(props) => (props.hours && '100%') || '14.2%'};
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    padding: ${(props) => (props.hours && '0') || '2px'};
    background-color: #ffffff;  
    background-clip: ${(props) => (props.hours && 'border-box') || 'content-box'};
    border: ${(props) => (props.hours && 'none') || '0.5px solid #f5f6fa'};
    transform: ${(props) => (props.hours && 'translateY(50%)') || 'translateY(0)'};
    @media only screen and (min-device-width: 320px) and (max-device-height: 812px) {
        font-size: 28px;
    }
`

const HeaderBlock = styled.div`
    cursor: pointer;
`

const FooterBlock = styled.div`
    display: ${(props) => (props.deleteBtn && 'none') || 'flex'};
    cursor: pointer;
`



export {Frame, Day, Header, Button, Body, Column, WorkBlock, Hours, BodyWork, FooterBlock, HeaderBlock};