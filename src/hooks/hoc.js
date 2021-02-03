import React from "react";

function toggle(init) {
  return (Com) => {
    return class A extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          on: init,
        };
      }
      toggle = () => {
        this.setState({
          on: !this.state.on,
        });
      };
      render() {
        const newProps = {
          ...this.props,
          on: this.state.on,
          toggle: this.toggle,
        };
        return <Com {...newProps} />;
      }
    };
  };
}

function Page({ on, toggle }) {
  return (
    <>
      <button onClick={toggle}>点击修改</button>
      <div>看看状态：{on.toString()}</div>
    </>
  );
}

@toggle(false)
class Content extends React.Component {
  render() {
    return <Page {...this.props}></Page>;
  }
}

export default Content;
