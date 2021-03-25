import styled from 'styled-components';

export const StyledAppWrapper = styled.div`
    max-width: 1360px;
    margin: auto;
    position: relative;
`;

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 24px;
    width: 100%;
    margin-top: 48px;
`;

export const StyledItem = styled.div`
    background: ${(props: { hex: string }) => props.hex};
    border-radius: 20px;
    box-shadow: 0 0 14px ${(props: { hex: string }) => props.hex};
    display: flex;
    flex-direction: column;
    height: 200px;

    :hover {
        box-shadow: 0 0 30px ${(props: { hex: string }) => props.hex};
    }
`;

export const StyledText = styled.div`
    margin: auto;
    text-align: center;
`;

export const StyledHeader = styled.h2`
    font-size: 20px;
    margin: 8px auto;
`;

export const StyledLabel = styled.p`
    color: black;
    margin: auto;
    font-size: 16px;
    text-transform: uppercase;
`;