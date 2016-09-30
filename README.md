# react-state-wrapper

Are you tired of `this.setState()` everywhere?
this one is for you!

## what

Extremely simple and tiny utility with no external dependencies to never write this.setState again.

## usage

Import the constructor function:

	import Wrapper from 'rootToDependency';

In the react component whose state you want to wrap constructor's create the wrapper using the imported function and sending this as a parameter:

```javascript
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      loggedIn: null
    };

    // Create the state wrapper
    this.stateWrapper = new Wrapper(this);
  }
```

Then you can just replace any access to state with the new wrapper object.

Getting state data:
```javascript
    let isLoggedIn = this.stateWrapper.loggedIn;
```
Setting state data:
```javascript
    this.stateWrapper.loggedIn = false;
```    
And thats it.

The state wrapper will call `this.setState({ loggedIn: false })` for you.

Enjoy 😎
