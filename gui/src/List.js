import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items ? props.items : []
        }
    }

    render() {
        var {items = []} = this.state;
        
        return <ul> { 
            items.map((item) => <li key={item.id}>
                <div>
                    <EditableField value={ item.name }
                        onChange={ (v) => this.setState({...this.state,
                            items: items.map( i => i.id == item.id ? {...i, name: v} : i )
                            })
                        }
                    > { item.name } </EditableField> 
                    <button onClick={ () => this.props.onDelete(item.id) }>Delete</button>
                    <button onClick={
                        () => {
                            this.setState({...this.state, editing: false});
                            this.props.onSave(item.id, item.name);
                        }
                    }>Save</button>
                </div>
            </li>)
            } 
         </ul>;
    }
}

class EditableField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            value: props.value
        };
    }
    
    render() {
        console.log('EditableField');
        var {value, onChange} = this.props;
        return this.state.editing ? <input
            type="text"
            value={this.state.value}
            onChange={
                (e) => {
                    this.setState({...this.state, value: e.target.value});
                    onChange(e.target.value);
                }
            }
            onBlur={ () => this.setState({...this.state, editing: false}) }
        /> : <span onClick={ () => this.setState({...this.state, editing: true}) }> { value } </span>
    }
}