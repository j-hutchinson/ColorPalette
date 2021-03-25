export interface Color {
    distance: number;
    hex: string;
    hsl: HSL;
    luminance: number;
    name: string;
    requestedHex: string;
    rgb: RGB;
}

interface RGB {
    r: number;
    g: number;
    b: number;
}

interface HSL {
    h: number;
    s: number;
    l: number;
}