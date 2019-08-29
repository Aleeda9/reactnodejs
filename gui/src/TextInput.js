import React from 'react';

export default class TextInput extends React.Component {
    constructor(){
        super();
        this.state = {value: ''};
    }

    render() {
        console.log('TextInput render');
        return <div>
            <input type="text"
                onChange={e => this.setState({value: e.target.value})}
                value={this.state.value}
            />
            <button onClick={
                () => {
                    this.props.onChange(this.state.value);
                    this.setState({value: ''});
                }}
            >Add</button>
        </div>
    }
}