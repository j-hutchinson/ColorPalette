import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

const StyledList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: -24px;
    right: 0;
`;

const StyledListItem = styled.li`
    padding: 0px;
`;

const StyledLink = styled.a`
    display: block;
    width: 33px;
    height: 33px;
`;


const Socials = () => (
    <StyledList >
        <StyledListItem>
            <StyledLink href="https://github.com.j-hutchinson" target="_blank" rel="noopener noreferrer" aria-label="Jack's Github">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </StyledLink>
        </StyledListItem>
    </StyledList>
);

export default Socials;