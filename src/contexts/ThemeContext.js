import React from "react"

export const ThemeContext = React.createContext()

class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: true,
        dark: {
            bg: "#222529",
            txt: "#d65f5f",
            hover: "rgba(248,248,248,0.75)"
        },
        light: {
            bg: "#222529",
            txt: "#d65f5f",
            hover: "rgba(248,248,248,0.75)"
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }

}

export default ThemeContextProvider