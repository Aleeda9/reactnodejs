import React from 'react';

/**
 * class represents list of items with button Delete for each of them
 */
export default class List extends React.Component {
    render() {
        var {items = [], onSave = () => {}, onDelete = () => {}} = this.props;

        return <ul> {
            items.map((item) => <li key={ item.id }>
                <div>
                    <EditableField
                        value={ item.name }
                        onEnter={ (v) => onSave(item.id, v) }
                    >{ item.name }</EditableField> 
                    <button onClick={ () => onDelete(item.id) }>Delete</button>
                </div>
            </li>)
            } 
         </ul>;
    }
}

/**
 * class represents fild text of wich can be edited
 * allowEmpty property defines if field can save empty input value
 * state:
 * - editing - if field is currently editing
 * - error - if field is empty if allowEmpty == true
 */
class EditableField extends React.Component {
    constructor(props) {
        super(props);

        this.allowEmpty = props.allowEmpty ? props.allowEmpty : false;

        this.state = {
            editing: false,
            error: false
        };
    }
    
    render() {
        var {value, onEnter} = this.props;
        return this.state.editing ? <input
            type="text"
            defaultValue={ value }
            style={ this.state.error ? { borderColor: 'red' } : {} }
            onChange={ e => this.setState({...this.state, error: !e.target.value}) }
            onBlur={ e =>  {
                this.setState({...this.state, editing: false})
                onEnter(e.target.value);
            }}
            onKeyUp= { e => {
                if(e.keyCode != 13 || this.state.error)
                    return;

                this.setState({...this.state, editing: false});
                onEnter(e.target.value);
            }}
        /> : <span onClick={ () => this.setState({...this.state, editing: true}) }> { value } </span>
    }
}