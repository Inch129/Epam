import React,{Component} from "react";
import Modal from 'react-modal';

const customStyles = {
    content : {
        width: "75%",
        height: "75%"

    }
};
class ModalWindow extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {

    }

    closeModal() {
        this.setState({modalIsOpen: false});

    }

    render() {
        return (
            <div>
                <button className="addBookBtn" onClick={this.openModal}>Добавить книгу</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}

                    contentLabel="123">


                    <button onClick={this.closeModal}>Сохранить</button>
                    <button onClick={this.closeModal}>Отменить</button>

                    <form>
                        <span>Наименование</span>
                        <input />
                        <input/>

                    </form>
                </Modal>
            </div>
        );
    }
}

export default ModalWindow;
