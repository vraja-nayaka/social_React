import { red } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// A custom theme for this app
export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#556cd6",
        mainGradient: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
      },
      secondary: {
        main: "#19857b"
      },
      error: {
        main: red.A400
      }
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(",")
    }
  })
);

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#556cd6",
        mainGradient: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
      },
      secondary: {
        main: "#19857b"
      }
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(",")
    }
  })
);
