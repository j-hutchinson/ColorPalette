import { ChangeEvent, useState } from 'react';
import EmptyState from "../EmptyState";
import Form from "../Form";
import Socials from "../Socials";
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
      <Socials />
      <Form onRandom={onRandom} onSubmit={onSubmit} />
      {colors.length ?
        <StyledContainer>
          {colors.map((item, index) =>
            <StyledItem key={index} hex={item.hex}>
              <StyledText>
                <StyledHeader>
                  {item.name}
                </StyledHeader>
                <StyledLabel>
                  {item.hex}
                </StyledLabel>
              </StyledText>
            </StyledItem>)}
        </StyledContainer>
        :
        <EmptyState />
      }
    </StyledAppWrapper>
  )
};

export default App;
