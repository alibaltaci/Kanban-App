import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    colors: {
        black_default: "#000000",
        white_default: "#FFFFFF",
        red_default: "#FF0000",
    },

    font:{
        primary: "'Roboto', sans-serif",
        secondary: "'Poppins', sans-serif"
    },

    btn:{
        small: "30px",
        medium: "40px",
        large: "50px",
        block: "100%"
    },

    screen:{
        mobile: "480px",
        tablet: "1200px",
        laptop: "1201px"
    },

    fontWeight:{
        bold: 700,
        semiBold: 600,
        medium:500,
        regular: 400,
        light: 300,
        extraLight: 200,
        thin: 100
    },

    borderRadius:{
        s: "10px",
        m: "15px",
        l: "20px",
        xl: "25px"
    },

    screenFontSizes:{
        // mobile:{
        //     min: "1.1rem",
        //     xs: "1.2rem",
        //     s: "1.3rem",
        //     m: "1.4rem",
        //     l: "1.5rem",
        //     xl: "1.6rem",
        //     "2xl": "1.7rem",
        //     "3xl": "1.8rem",
        //     "4xl": "1.9rem",
        //     "5xl": "2rem",
        //     max: "5.5rem"
        // },

        mobile: {
            min: "1.5rem",
            xs: "1.6rem",
            s: "1.7rem",
            m: "1.8rem",
            l: "1.9rem",
            xl: "2.0rem",
            "2xl": "1.7rem",
            "3xl": "2.2rem",
            "4xl": "2.4rem",
            "5xl": "2.6rem",
            max: "5.5rem",
        },

        tablet:{
            min: "1.2rem",
            xs: "1.3rem",
            s: "1.4rem",
            m: "1.5rem",
            l: "1.6rem",
            xl: "1.7rem",
            "2xl": "1.8rem",
            "3xl": "2.0rem",
            "4xl": "2.4rem",
            "5xl": "3.2rem",
            max: "5.5rem",
        },

        loptop:{
            min: "1.5rem",
            xs: "1.6rem",
            s: "1.7rem",
            m: "1.8rem",
            l: "1.9rem",
            xl: "2rem",
            "2xl": "1.7rem",
            "3xl": "2.2rem",
            "4xl": "2.4rem",
            "5xl": "2.6rem",
            max: "5.5rem",
        }
    }
}