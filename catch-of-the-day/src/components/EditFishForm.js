import React from "react";

class EditFishForm extends React.Component {
    handleChange = event => {
        console.log(event.currentTarget.value);
        // Update that fish
        // 1. take a copy of the current fish
        const updatedFish = { 
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index,updatedFish);
    }
    render() {
        return <div className="fish-edit">
            <input type="text" onChange={this.handleChange} name="name" value={this.props.fish.name} />            
            <input type="text" onChange={this.handleChange} name="price" value={this.props.fish.price} />
            <select onChange={this.handleChange} name="status" value={this.props.fish.status}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea type="text" onChange={this.handleChange} name="desc" value={this.props.fish.desc}></textarea>
            <input type="text" onChange={this.handleChange} name="image" value={this.props.fish.image}/>
        </div>
    }
}

export default EditFishForm;