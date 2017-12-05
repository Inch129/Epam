import React, {Component} from "react";
import element from "../ComponentsStyles/listElement.css";
import Modal from "react-modal";

class ListElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            element: {
                url: this.props.item.url,
                author: this.props.item.author,
                bookName: this.props.item.bookName,
                year: this.props.item.year
            }
        };
        this.changeButton = this.changeButton.bind(this);
    }

    changeButton() {


    }

    render() {

        return (

            <div className="element-container" style={element}>

                <img className="image" src={this.state.element.url}/>
                <div className="element-container__info">
                    <h3 className="bookName">{this.state.element.bookName}</h3>
                    <span className="author">{this.state.element.author}</span>
                    <span className="year">{this.state.element.year}</span>
                </div>
                <div className="element-container__buttons">
                    <button className="button-change" onClick={this.changeButton}>Редактировать</button>
                    <br/>
                    <button className="button-delete">Удалить</button>
                </div>
            </div>
        );
    }

}

export default ListElement;
