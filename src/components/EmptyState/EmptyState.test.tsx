import { shallow } from 'enzyme';
import EmptyState from './component';

describe('EmptyState component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<EmptyState />);

        expect(wrapper).toMatchSnapshot();
    });
});