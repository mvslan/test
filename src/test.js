import React, { useEffect } from "react";
import { unstable_batchedUpdates } from "react-dom";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }
  handle = () => {
    setTimeout(() => {
      unstable_batchedUpdates(() => {
        this.change();
      });
    }, 0);
  };
  change() {
    console.log(this.state.num);
    this.setState(
      {
        num: this.state.num + 1,
      },
      () => {
        console.log(this.state);
      }
    );
    console.log(this.state.num);
    this.setState(
      {
        num: this.state.num + 1,
      },
      () => {
        console.log(this.state);
      }
    );
    console.log(this.state.num);
    this.setState({
      num: this.state.num + 1,
    });
    console.log(this.state.num);
  }
  render() {
    return (
      <div>
        <div>{this.state.num}</div>
        <button onClick={this.handle}>点击动起来</button>
      </div>
    );
  }
}

const Test2 = () => {
  return {
    componentDidMount() {
      console.log("gogogo");
    },
    render() {
      return <div>我来啦</div>;
    },
  };
};

const Son_1 = () => {
  return <div>son1</div>;
};

const Son_2 = () => {
  return <div>son2</div>;
};

class Test3 extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [1],
      type: true,
    };
  }
  componentDidMount() {
    // 选择需要观察变动的节点
    const targetNode = document.getElementById("obs");

    // 观察器的配置（需要观察什么变动）
    const config = { attributes: true, childList: true, subtree: true };

    // 当观察到变动时执行的回调函数
    const callback = function (mutationsList, observer) {
      console.log(mutationsList);
      // Use traditional 'for loops' for IE 11
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
          console.log(
            "The " + mutation.attributeName + " attribute was modified."
          );
        }
      }
    };
    // 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(callback);

    // 以上述配置开始观察目标节点
    observer.observe(targetNode, config);
  }
  handle = () => {
    let list = [2];
    this.setState({
      list: list,
      type: false,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handle}>点击</button>
        {this.state.type ? (
          <div>
            <Son_1 key="1" />
            <Son_2 key="2" />
          </div>
        ) : (
          <div>
            <Son_2 key="2" />
            <Son_1 key="1" />
          </div>
        )}
        <div id="obs">
          {this.state.list.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Test;
