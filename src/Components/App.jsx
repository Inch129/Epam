import React, {Component} from 'react';
import '../ComponentsStyles/app.css';
import Modal from "react-modal";
import addBookBtn from "../ComponentsStyles/addBookBtn.css";
import ListElement from "./ListElement";

const customStyles = {
    content: {
        display: "flex",
        flexDirection: "column",
        width: "75%",
        height: "75%",
        position: "absolute",

    }
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            data: [
                {
                    url: "http://imagine.pics/images/119/119542.jpg",
                    author: "author",
                    bookName: "Тысячеликий герой",
                    year: 1970
                },
                {
                    url: "https://static8.depositphotos.com/1229718/999/i/950/depositphotos_9996162-stock-photo-grass-frame.jpg",
                    author: "Девид Сойер",
                    bookName: "Javascript и Jquery",
                    year: 2016
                }
            ]

        };
    }


    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    saveChanges = () => {
        this.setState((prevState, props) => {
            prevState.data
        });
    };


    render() {
        return (
            <div className="app">
                <h1>Книжная полка</h1>
                <button className={addBookBtn} onClick={this.openModal}>Добавить книгу</button>
                <Modal isOpen={this.state.modalIsOpen}
                       onRequestClose={this.closeModal}
                       style={customStyles}>
                    <h1>Добавить новую книгу</h1>
                    <span>Наименование</span>
                    <input placeholder="Название книги" type="text"/>
                    <span>Автор</span>
                    <input placeholder="Автор" type="text"/>
                    <span>Год выпуска</span>
                    <input placeholder="Год выпуска" maxLength="4" type="number"/>
                    <span>Изображение</span>
                    <input placeholder="Изображение" type="url"/>
                    <button onClick={this.closeModal}>Сохранить</button>
                    <button onClick={this.closeModal}>Отменить</button>
                </Modal>
                {this.state.data.map((item, i) => {
                    return <ListElement key={i} item={item}/>
                })}


            </div>
        );
    }
}

export default App;
