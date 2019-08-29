import React from 'react';

import { connect } from 'react-redux';

export default class List extends React.Component {
    render() {
        console.log('List render');
        var {items = []} = this.props;
        
        return <ul> { 
            items.map((item, i) => <li key={item.id}>
                { item.name } 
                <button onClick={() => this.props.onDelete(item.id)}>Delete</button>
            </li>)
            } 
         </ul>;
    }
}