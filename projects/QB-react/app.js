function App() {
    return React.createElement(
        "ul",
        { "class": "navbar" },
        React.createElement(
            "li",
            null,
            "Home"
        ),
        React.createElement(
            "li",
            null,
            "Away"
        )
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));