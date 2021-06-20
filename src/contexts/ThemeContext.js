import React from "react"

export const ThemeContext = React.createContext()

class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: true,
        dark: {
            bg: "#222529",
            txt: "#e8eddf",
            hover: "rgba(120,120,120,0.75)",
            shadow: "1px 10px 18px #343a40",
            search: "#ced4da"
        },
        light: {
            bg: "#ffffff",
            txt: "#222529",
            hover: "rgba(248,248,248,0.75)",
            shadow: "1px 10px 18px #adb5bd",
            search: "#495057"
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }

}

export default ThemeContextProvider