// 实现Promise

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function Promise(executor) {
  this.status = PENDING;
  this.onFulfilled = [];
  this.onRejected = [];

  function resolve(value) {
    // 1，为什么要判断状态？因为这个状态只能使用一次，不能重复使用
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      this.onFulfilled.forEach((fn) => fn());
    }
  }
  function reject(reason) {
    if (status === PENDING) {
      this.status = REJECTED;
      this.value = reason;
      this.onRejected.forEach((fn) => fn());
    }
  }
  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  let self = this;
  if (promise2 === x) {
    reject(new TypeError("Chaining cycle"));
  }
  if ((x && typeof x.then === "object") || typeof x === "function") {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (res) => {
            resolvePromise(promise2, res, resolve, reject);
          },
          (rej) => {
            reject(rej);
          }
        );
      } else {
        resolve(x);
      }
    } catch (err) {
      reject(err);
    }
  } else {
    resolve(x);
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  let self = this;
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : (value) => value;
  onRejected = typeof onRejected === "function" ? onRejected : (value) => value;

  let promise2 = new Promise((resolve, reject) => {
    if (self.status === PENDING) {
      self.onFulfilled.push(()=>{
        setTimeout(() => {
          try {
            let x = onFulfilled(self.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      })
      self.onRejected.push(()=>{
        setTimeout(() => {
          try {
            let x = onRejected(self.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      }

    } else if (self.status === FULFILLED) {
      setTimeout(() => {
        try {
          let x = onFulfilled(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (err) {
          reject(err);
        }
      }, 0);
    } else if (self.status === REJECTED) {
      setTimeout(() => {
        try {
          let x = onRejected(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (err) {
          reject(err);
        }
      }, 0);
    }
  });

  return promise2;
};

Promise.resolve=function(){

}
Promise.reject=function(){

}



