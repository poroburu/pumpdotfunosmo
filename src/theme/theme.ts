import { WormholeConnectPartialTheme } from "@wormhole-foundation/wormhole-connect";

const customized: WormholeConnectPartialTheme = {
    mode: "light",
    primary: {
        50: "#e0f2f1",
        100: "#b2dfdb",
        200: "#80cbc4",
        300: "#4db6ac",
        400: "#26a69a",
        500: "#009688", // Teal shade for primary color
        600: "#00897b",
        700: "#00796b",
        800: "#00695c",
        900: "#004d40",
        A100: "#a7ffeb",
        A200: "#64ffda",
        A400: "#1de9b6",
        A700: "#00bfa5",
    },
    secondary: {
        50: "#fce4ec",
        100: "#f8bbd0",
        200: "#f48fb1",
        300: "#f06292",
        400: "#ec407a",
        500: "#e91e63", // Pink shade for secondary color
        600: "#d81b60",
        700: "#c2185b",
        800: "#ad1457",
        900: "#880e4f",
        A100: "#ff80ab",
        A200: "#ff4081",
        A400: "#f50057",
        A700: "#c51162",
    },
    divider: "#009688",
    background: {
        default: "#a7ffeb00",
    },
    text: {
        secondary: "#004d40",
        primary: "#c2185b",
    },
    button: {
        // Lightened the shade of green for the primary button
        primary: "#26a69a",
        primaryText: "#ffffff",
        disabled: "#004d40",
        disabledText: "#a7ffeb",
        action: "#1de9b6",
        actionText: "#004d40",
        hover: "#64ffda",
    },
};

export default customized;
