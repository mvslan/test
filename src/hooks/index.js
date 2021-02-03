import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: props.init,
    };
  }
  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };
  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}

function Page({ on, toggle }) {
  return (
    <>
      <button onClick={toggle}>点击修改</button>
      <div>看看状态：{on.toString()}</div>
    </>
  );
}

function Content() {
  return (
    <Toggle
      init={false}
      children={(props) => <Page {...props}></Page>}
    ></Toggle>
  );
}

export default Content;
