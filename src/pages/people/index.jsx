import React, { useState } from "react";
import { useSelector } from "react-redux";
import PeopleForm from './components/people-fill-form';
import editIcon from '../../assets/images/edit.svg';
import delIcon from '../../assets/images/box-del1.png';
import peopleIcon from '../../assets/images/people.png';
import ModalBox from './components/modal-box';
import './style.scss'
import Modal from "../../components/modal";
import { Link } from "react-router-dom";

const People = () => {
    const newPeopleList = useSelector(state => state.PeopleReducer.peopleList)
    const [selectedPeople, setSelectedPeople] = useState(null)
    const [selectedPeopleIndex, setSelectedPeopleIndex] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [openManagePeople, setOpenManagePeople] = useState(false)

    const handleAddClick = () => {
        setOpenManagePeople(true)
    }
    const handleEdit = (e, people, index) => {
        setSelectedPeople(people)
        setSelectedPeopleIndex(index)
        setOpenManagePeople(true)
        e.stopPropagation()
        e.preventDefault()
    }
    const handleDelete = (e) => {
        setOpenModal(true)
        e.stopPropagation()
        e.preventDefault()
    }
    const handleCloseModal = () => {
        setOpenManagePeople(false)
        setSelectedPeople(null)
        setSelectedPeopleIndex(null)
    }
    return <div className="G-page-box">
        <div className='G-page-header'>
            <h3 className="people-title">Աշակերտ</h3>
        </div>
        <div className="G-page-scroll-body">
            <div className="G-page-btn">
                <button className="people-btn" onClick={handleAddClick}> Ավելացնել</button>
            </div>
            <div className="G-page-created-boxes">
                {/* {openManagePeople ? <PeopleForm selectedPeople={selectedPeople} index={selectedPeopleIndex} handleCloseModal={handleCloseModal} /> : null} */}
                {newPeopleList.map((people, index) => {
                    return <>
                        <Link to={`/people/people-detales/${index}`} key={index} className='G-created-box people-box'>
                            <p className="G-created-box-name">{people.firstName}</p>
                            <span className="edit-icon" onClick={(e) => handleEdit(e, people, index)} style={{ backgroundImage: `url('${editIcon}')` }} ></span>
                            <span className="main-icon" style={{ backgroundImage: `url('${peopleIcon}')` }}></span>
                            <span className="del-icon" onClick={(e) => handleDelete(e, index)} style={{ backgroundImage: `url('${delIcon}')` }}></span>
                        </Link>
                        {openModal ? <ModalBox info={people} index={index} openClose={() => setOpenModal(false)} /> : null}
                    </>
                })}
            </div>
        </div>
        {/*unem Modal, vory bacum-pakum e , ira mej nor PeopleForm-y miji infon*/}
        {openManagePeople ? <Modal onClose={handleCloseModal} >
            <PeopleForm selectedPeople={selectedPeople} index={selectedPeopleIndex} handleCloseModal={handleCloseModal} />
        </Modal> : null}

    </div>
}
export default People
