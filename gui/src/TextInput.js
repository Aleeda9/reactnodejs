import React from 'react';

/**
 * class represents text input with add button
 * state:
 * - value - current value of text input
 */
export default class TextInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }

    render() {
        var { onChange = () => {}} = this.props;

        return <div>
            <input type="text"
                value={this.state.value}
                onChange={e => this.setState({value: e.target.value})}
            />
            <button onClick={
                () => {
                    if(!this.state.value)
                        return;

                    onChange(this.state.value);
                    this.setState({value: ''});
                }}
            >Add</button>
        </div>
    }
}