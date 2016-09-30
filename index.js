export default function (component) {
  const { state } = component;

  for (const prop in state) {
    if ({}.hasOwnProperty.call(state, prop)) {
      Object.defineProperty(this, prop, {
        get: (function () {
          return this.state[prop];
        }).bind(component),
        set: (function (value) {
          const stateSetter = {};
          stateSetter[prop] = value;
          this.setState(stateSetter);
        }).bind(component),
        enumerable: false,
        configurable: false
      });
    }
  }

  return this;
}
