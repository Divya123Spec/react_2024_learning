import React from 'react';

// A class component extending React.PureComponent
class MyPureComponent extends React.PureComponent {
  render() {
    console.log('Rendering MyPureComponent');
    return (
      <div>
        <p>Value: {this.props.value}</p>
      </div>
    );
  }
}

// Example usage in a parent component
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  incrementValue = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementValue}>Increment Value</button>
        {/* Only re-renders MyPureComponent if value changes */}
        <MyPureComponent value={this.state.value} />
      </div>
    );
  }
}

export default ParentComponent;





// pure component is a component that implements a performance optimization by only re-rendering when its props or state change
// This is achieved by implementing a shallow comparison of the component’s props and state to determine if a re-render is necessary.
// Pure components are useful for optimizing performance in functional and class components/.
// Using React.memo for Functional Components