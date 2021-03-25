import { StyledForm, StyledIcon, StyledInput, StyledLabel } from './styles';
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onRandom: () => void;
  onSubmit: (ev) => void;
}

const HueForm = ({ onRandom, onSubmit }: Props): JSX.Element => (
  <StyledForm onSubmit={onSubmit}>
    <StyledLabel>
      <StyledInput placeholder="Enter hue value" type="text" name="hueInput" />
    </StyledLabel>
    <input type="submit" value="Submit" />
    <StyledIcon onClick={onRandom}>
      <FontAwesomeIcon icon={faRandom} size="2x" />
    </StyledIcon>
  </StyledForm >
);

export default HueForm;
