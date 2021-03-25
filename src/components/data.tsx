import axios from 'axios';
import { Color } from './types';

async function fetchColorNames(colors: string): Promise<Color[]> {
    const url = `https://api.color.pizza/v1/?values=${colors}`;
    const response = await axios.get(url);
    return response.data.colors;
}

export { fetchColorNames };