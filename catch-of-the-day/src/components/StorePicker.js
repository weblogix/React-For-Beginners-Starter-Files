import React, { Fragment } from 'react';

class StorePicker extends React.Component {
    render() {
        return (
        <Fragment>
            <h1>I'm a header</h1>
            <form className="store-selector">
                { console.log('i\'m Javascript') }
                { /* This is a comment */ }
                <h2>Please enter a store</h2>            
                <input type="text" required placeholder="store Name" />
                <button type="Submit"> Visit Store</button>
            </form>            
        </Fragment>
        )
    }
}

export default StorePicker;