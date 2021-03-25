import styled from 'styled-components';

const StyledEmptyState = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin: auto: 
`;

const EmptyState = (): JSX.Element => (
  <StyledEmptyState>
    Select a hue now ...
  </StyledEmptyState>
)


export default EmptyState;
