import React, { Component } from 'react';

class Counter extends Component {
   

    
    
    render() { 
        let classes = this.getBadgeClasses();
        
        return (
            <div> 
                
                <span className={classes}>{this.formatcount()}</span>
                <button onClick={() => this.props.onCount(this.props.counter)} className="btn btn-secondary btn-sm m-2">+</button> 
                <button onClick={() => this.props.onSub(this.props.counter)} className="btn btn-secondary btn-sm m-2">-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
            );
        }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatcount(){
        return this.props.counter.value ===0 ? 'Zero' : this.props.counter.value;
    }
}
 
export default Counter;