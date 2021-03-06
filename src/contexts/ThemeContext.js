import React from "react"

export const ThemeContext = React.createContext()

class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: true,
        dark: {
            bg: "#222529",
            txt: "#ced4da",
            hover: "rgba(120,120,120,0.75)",
            shadow: "1px 10px 18px #343a40",
            darkDisplay: "none"
        },
        light: {
            bg: "#ffffff",
            txt: "#495057",
            hover: "rgba(248,248,248,0.75)",
            shadow: "1px 10px 18px #adb5bd",
            lightDisplay: "none"
        }
    }

    changeTheme = () => {
        this.setState({isDarkTheme: !this.state.isDarkTheme})
      }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, changeTheme: this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }

}

export default ThemeContextProvider