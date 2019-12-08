
import React from 'react';
import { throwStatement } from '@babel/types';



export class TodoComponent extends React.Component {


    constructor() {
        super();
        this.state = {
            inputvalue: '',
            inputArray: [],
            isPositive: 'correct',
            todoClass: '',
            description: '',
            name:'',
            nameDesc:''
        };
    }

    renderList = () => {
        let items = this.state.inputArray.map((item) =>
            <li className="list">
                <div>
                    <span className={this.state.isPositive} onClick={() => this.todoClass()} >
                        {item.name}
                    </span>
                    <button onClick={() => this.renderDetail(item)} >More..</button>
                    <button onClick={() => this.removeFrom(item)} >X</button>
                </div>
            </li>
        );
        return items;
    }

      renderDetail = (item) => {
        
       
       this.setState({ name: item.name });
       this.setState({ nameDesc: item.description });
               
         
    
        
    }

    todoClass = () => {
        let { isPositive } = this.state;
        if (isPositive === 'correct') {
            this.setState({ isPositive: 'incorrect' });
        } else {
            this.setState({ isPositive: 'correct' });
        }

    }

    removeFrom = (item) => {
        debugger;
        console.log('this.state.inputArray = ', this.state.inputArray);
        const newArray = this.state.inputArray;
        let index = -1;
        if (this.state.inputArray) {
            for (let i = 0; i < this.state.inputArray.length; i++) {
                if (this.state.inputArray[i].name === item.name) {
                    index = i;
                }
            }
            if (index > -1) {
                newArray.splice(index, 1);
            }
            this.setState({ inputArray: newArray });
        }

        this.setState({ inputvalue: '' });
    }

    handleChange = (event) => {
        this.setState({ inputvalue: event.target.value });
    }
    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }
    addTodo = () => {
        console.log('this.state.inputvalue = ', this.state.inputvalue);
        
        let newArray = [];
        if (this.state.inputvalue ) {
             newArray = [...this.state.inputArray];
            // newArray.push(this.state.inputvalue);
            newArray.push({
                name: this.state.inputvalue,
                description: this.state.description
            });
            this.setState({ inputArray: newArray });
        }
        this.setState({ inputArray: newArray });
        console.log('this.state.inputArray = ', this.state.inputArray);

        this.setState({ inputvalue: '' });
        this.setState({ description: '' });
    }
    render() {
        return (
            <div >
                <div>
                    <header className="header" >TO DO</header>
                    <input className="textbox"
                        type="text"
                        value={this.state.inputvalue}
                        placeholder="TO DO…"
                        onChange={this.handleChange}
                    />
                    <div>
                        <textarea className="textbox"
                            type="text"
                            value={this.state.description}
                            placeholder="Description…"
                            onChange={this.handleDescriptionChange}
                        />
                    </div>
                    <button className="button" onClick={() => this.addTodo()} > ADD </button>
                    <ul className="ulist" >
                        {this.renderList()}
                    </ul>
                    <div>
                        <label>Name: </label>
                        <span>
                            {this.state.name}
                        </span>
                    </div><div>
                        <label>Description: </label>
                        <span>
                            {this.state.nameDesc}
                        </span>
                    </div>
                </div>
            </div>
        )

    }
}

export default TodoComponent;
