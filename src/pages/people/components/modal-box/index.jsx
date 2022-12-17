import React from "react";
import './style.scss';
import closeImg from '../../../../assets/images/box-del1.png';
import { useDispatch, useSelector } from "react-redux";

const ModalBox = ({ info, index, openClose }) => {
    const selectedPeople = useSelector(state => state.PeopleReducer.peopleList)
    const dispatch = useDispatch()

    const handleDeleteClick = (index) => {
        dispatch({ type: 'DEL_PEOPLE', payload: index })
        openClose()
    }
    return <div className="modal-box">
        <div className="modal-bg" onClick={openClose}> </div>
        <span
            style={{ backgroundImage: `url('${closeImg}')` }}
            className="close-icon"
            onClick={openClose}></span>
        <div className="modal-text">
            <h3>Ցանկանո՞ւմ եք ջնջել {info.firstName}-ը</h3>
            <div className="G-flex">
                <button onClick={() => handleDeleteClick(index)}>Այո</button>
                <button onClick={openClose}>Ոչ</button>
            </div>
        </div>
    </div>
}
export default ModalBox