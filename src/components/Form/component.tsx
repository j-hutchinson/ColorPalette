import { useState } from 'react';
import { StyledForm, StyledIcon, StyledInput, StyledLabel, StyledSubmit } from './styles';
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onRandom: () => void;
  onSubmit: (ev, input: number) => void;
}

const Form = ({ onRandom, onSubmit }: Props): JSX.Element => {
  const [input, setInput] = useState<string>(null);

  const onChange = (ev) => setInput(ev.target.value);

  return (
    <StyledForm onSubmit={(ev) => onSubmit(ev, Number(input))}>
      <StyledLabel>
        <StyledInput
          placeholder="Enter hue value"
          type="number"
          name="hueInput"
          min={1}
          max={360}
          onChange={onChange} />
      </StyledLabel>
      <StyledSubmit type="submit" value="Submit" />
      <StyledIcon onClick={onRandom}>
        <FontAwesomeIcon icon={faRandom} size="2x" />
      </StyledIcon>
    </StyledForm >
  );
}

export default Form;
