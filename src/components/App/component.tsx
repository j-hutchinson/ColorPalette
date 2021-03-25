import { ChangeEvent, useState } from 'react';
import HueForm from "../Form";
import { fetchColorNames } from '../data';
import { colorPicker, randomHueNumber } from '../utils';
import { Color } from '../types';
import { StyledAppWrapper, StyledContainer, StyledHeader, StyledItem, StyledLabel, StyledText } from './styles';

const App = (): JSX.Element => {
  const [colors, setColors] = useState<Color[]>([]);

  const onSubmit = async (ev: ChangeEvent<HTMLInputElement>): Promise<void> => {
    ev.preventDefault();

    const value = colorPicker(21).slice(0, 9).join(',');
    await fetchColorNames(value).then(resp => setColors(resp));
  }

  const onRandom = async (): Promise<void> => {
    const randomHue = randomHueNumber();
    const value = colorPicker(randomHue).slice(0, 9).join(',');
    await fetchColorNames(value).then(resp => setColors(resp));
  }

  return (
    <StyledAppWrapper>
      <HueForm onRandom={onRandom} onSubmit={onSubmit} />
      <StyledContainer>
        {colors?.map((item, index) =>
          <StyledItem key={index} hex={item.hex}>
            <StyledText>
              <StyledHeader>
                {item.name}
              </StyledHeader>
              <StyledLabel>
                {item.hex}
              </StyledLabel>
            </StyledText>
          </StyledItem>
        )}
      </StyledContainer>
    </StyledAppWrapper>
  )
};

export default App;
