import React, { Fragment } from "react";
import { getFunName } from "../helpers";
class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = event => {
    // 1. stop the form from submitting
    event.preventDefault();
    console.log("go to store");
    // 2. get the text from the input
    console.log(this.myInput.value.value);
    const storeName = this.myInput.value.value;
    // 3. change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <Fragment>
        <h1>I'm a header</h1>
        <form className="store-selector" onSubmit={this.goToStore}>
          {console.log("i'm Javascript")}
          {/* This is a comment */}
          <h2>Please enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="store Name"
            defaultValue={getFunName()}
          />
          <button type="Submit"> Visit Store</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
