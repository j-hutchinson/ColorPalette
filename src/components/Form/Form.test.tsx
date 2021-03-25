import { shallow } from 'enzyme';
import Form from './component';
import { StyledForm, StyledIcon } from './styles';

describe('Form component', () => {
    const onRandom = jest.fn();
    const onSubmit = jest.fn();
    const event = {
        target: {
            value: 99,
        }
    }

    afterEach(() => {
        jest.resetAllMocks();
    })

    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<Form onRandom={onRandom} onSubmit={onSubmit} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('onSubmit called on form submission', () => {
        expect.assertions(2);

        const wrapper = shallow(<Form onRandom={onRandom} onSubmit={onSubmit} />);
        wrapper.find(StyledForm).simulate('submit', event)

        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(event);
    });

    test('onRandom called on Icon click', () => {
        expect.assertions(1);

        const wrapper = shallow(<Form onRandom={onRandom} onSubmit={onSubmit} />);
        wrapper.find(StyledIcon).simulate('click');

        expect(onRandom).toHaveBeenCalledTimes(1);
    });
});