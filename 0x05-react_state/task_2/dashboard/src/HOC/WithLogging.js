import React from "react";

const withLogging = (wrappedComponent) => {
    const getDisplayName = (wrappedComponent) => wrappedComponent.displayName || wrappedComponent.name || "Component";
    class WithLogging extends React.Component {
        constructor(props) {
            super(props);
        }
        componentDidMount() {
            console.log(`Component ${getDisplayName(wrappedComponent)} is mounted`);
        }
        componentWillUnmount() {
            console.log(`Component ${getDisplayName(wrappedComponent)} is going to unmount`);
        }
        render() {
            return(
                <wrappedComponent {...this.props}/>
            );
        }
    }
    WithLogging.displayName = `WithLogging(${getDisplayName(wrappedComponent)})`;
    return WithLogging;
}

export default withLogging;