import ColorScheme from 'color-scheme';

export const colorPicker = (hue: number): string[] => {
    const scheme = new ColorScheme();
    scheme.from_hue(hue)
        .scheme('triade')
        .variation('soft');

    return scheme.colors();
};

export const randomHueNumber = () => {
    return Math.floor(Math.random() * (360 - 1 + 1) + 1);
}
