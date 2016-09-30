// Constructor function
export default function (component) {
  const { state } = component;

  Object.getOwnPropertyNames(state).concat(Object.getOwnPropertySymbols(state))
  .forEach(prop => {
    // Define name identical properties to wrap state
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
  });

  return this;
}
