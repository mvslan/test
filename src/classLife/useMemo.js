import React from "react";

class Memo extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }
  change = () => {
    let num = this.state.num;
    num++;
    this.setState({
      num,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.change}>点击增加</button>
        <div>{this.state.num}</div>
        <Son />
      </>
    );
  }
}

class Son extends React.Component {
  componentDidUpdate() {
    console.log(" update son");
  }
  render() {
    console.log(" render son");
    return <div>son</div>;
  }
}

export default Memo;
