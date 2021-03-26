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
  const [showAtIndex, setShowAtIndex] = useState<number>(null);

  const onSubmit = async (ev: ChangeEvent<HTMLInputElement>, input: number): Promise<void> => {
    ev.preventDefault();
    const value = colorPicker(input).slice(0, 9).join(',');
    await fetchColorNames(value).then(resp => setColors(resp));
  }

  const onRandom = async (): Promise<void> => {
    const randomHue = randomHueNumber();
    const value = colorPicker(randomHue).slice(0, 9).join(',');
    await fetchColorNames(value).then(resp => setColors(resp));
  }

  const onItemClick = (index) => {
    if (showAtIndex === index) {
      setShowAtIndex(null);
    } else {
      setShowAtIndex(index)
    }
  }

  return (
    <StyledAppWrapper>
      <Socials />
      <Form onRandom={onRandom} onSubmit={onSubmit} />
      {colors.length ?
        <StyledContainer>
          {colors.map((item, index) =>
            <StyledItem key={index} hex={item.hex} onClick={() => onItemClick(index)} zoomIn={showAtIndex === index}>
              <StyledText>
                <StyledHeader>
                  {item.name}
                </StyledHeader>
                <StyledLabel>
                  {
                    showAtIndex === index &&
                    (<>
                      <p>
                        {item.hex}
                      </p>
                      <p>
                        {`rgb(${item.rgb.r}, ${item.rgb.g}, ${item.rgb.b})`}
                      </p>
                    </>)
                  }
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
