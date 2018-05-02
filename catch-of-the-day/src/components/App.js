import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Randy is cool" age={1}></Header>
                </div>
                <Order></Order>
                <Inventory></Inventory>
            </div>
        )
    }
}
export default App;