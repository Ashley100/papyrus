import React from "react";
import { ThemeProvider } from "styled-components";
import cookie from "cookie";

const lightThemeColors = {
    white_1: "#fff",
    gray_1: "#f5f7f9",
    gray_2: "#eff3f6",
    gray_3: "#c4c4c4",
    gray_4: "#dddcd5",
    gray_5: "#ededed",
    black_1: "#000",
    black_2: "#696867",
    green_1: "#2b7b3b",
    green_2: "#edf2f1",
    green_3: "#a3c6aa",
    green_4: "#369b4a",
    green_5: "#52935f",
    red_1: "#eb001b",
    red_2: "#ff5d2c",
    red_3: "#f6eeed",
    red_4: "#fd7c55",
    orange_1: "#ffca40",
    orange_2: "#ffba07",
    orange_3: "#ffe49f",
    orange_4: "#ffe5a0",
    orange_5: "#fff6de",
    orange_6: "#ffd977",
    blue_1: "#132b81",
    blue_2: "#1e42bf",
    blue_3: "#132b81",
    d_white_1: "#eee",
    d_black_1: "#000",
    d_black_2: "#696867",
    d_orange_1: "#ffbb0",
}
const darkThemeColors = {
    dark: "#fff",
    dark1: "#fff",
    dark2: "#ccc",
}



function getTheme (mode = "light") {

    return {
        colors: mode === "dark" ? {...darkThemeColors} : {...lightThemeColors},
        fonts: ["sans-serif", "Roboto"],
        fontSizes: {
            small: "1em",
            medium: "2em",
            large: "3em"
        }
    }
}

const Theme = ({ children, mode }) => {
    console.log(mode);
    return <ThemeProvider theme={getTheme(mode)}>{children}</ThemeProvider>

}

export default Theme;