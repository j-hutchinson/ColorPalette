import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;
    border-bottom: 1px solid #DCDCDC;
    margin: 48px auto;
    padding-bottom: 40px;
`;

export const StyledInput = styled.input`
    border-radius: 8px 0px 0px 8px;
    border: 1px solid #E7E7E7;
    font-family: 'Roboto' sans-serif;
    font-size: 20px;
    height: 40px;
    padding: 4px 24px;
    width: 200px;
    margin: auto;
`;

export const StyledLabel = styled.p`
    margin: 0;
`;

export const StyledSubmit = styled.input`
    padding: 12px 24px;
    font-family: 'Roboto' sans-serif;
    background: #DCDCDC;
    border: 1px solid #E7E7E7;
    border-radius: 0px 8px 8px 0px;
    font-size: 20px;
`;

export const StyledIcon = styled.span`
    color: #3D3D3D;
    margin: auto 0 auto 24px;
`;