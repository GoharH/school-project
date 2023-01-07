import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TeacherFillForm from './components/teach-fill-form';
import './style.scss';
import editIcon from '../../assets/images/edit.svg';
import teachIcon from '../../assets/images/teacher.png';
import delIcon from '../../assets/images/box-del1.png';
import ModalBox from "./components/modal-box";
import Modal from "../../components/modal";
import { Link } from "react-router-dom";

const Teachers = () => {
    const newTeacherList = useSelector(state => state.TeacherReducer.teachersList)
    const [openModal, setOpenModal] = useState(false)
    const [selectedTeacher, setSelectedTeacher] = useState(null)
    const [selectedTeacherIndex, setSelectedTeacherIndex] = useState(null)
    const [openManageTeacher, setOpenManageTeacher] = useState(false)
    const dispatch = useDispatch()

    const handleAddClick = () => {
        setOpenManageTeacher(true)
    }
    const handleEdit = (e, teacher, index) => {
        setSelectedTeacher(teacher)
        setSelectedTeacherIndex(index)
        setOpenManageTeacher(true)
        e.stopPropagation()
        e.preventDefault()
    }
    const handleDelete = (e, index) => {
        setOpenModal(true)
        e.stopPropagation()
        e.preventDefault()
    }

    const handleCloseModal = () => {
        setOpenManageTeacher(false)
        setSelectedTeacher(null)
        setSelectedTeacherIndex(null)
    }

    useEffect(() => {
        if (newTeacherList.length) {
            localStorage.setItem('teacher-list', JSON.stringify(newTeacherList))
        }
    }, [newTeacherList])


    return <div className="G-page-box">
        <div className="G-page-header">
            <h3 className="teacher-title">Ուսուցիչ</h3>
        </div>
        <div className="G-page-scroll-body">
            <div className="G-page-btn">
                <button className="teach-btn" onClick={handleAddClick}>Ավելացնել</button>
            </div>
            <div className="G-page-created-boxes">
                {newTeacherList.map((teacher, index) => {
                    return <div key={index}>
                        <Link to={`/teachers/teachers-detales/${index}`} className='G-created-box teacher-box'>
                            <p className="G-created-box-name">{teacher.firstName}</p>
                            <span className="edit-icon" onClick={(e) => handleEdit(e, teacher, index)} style={{ backgroundImage: `url('${editIcon}')` }}></span>
                            <span className="main-icon" style={{ backgroundImage: `url('${teachIcon}')` }}></span>
                            <span className="del-icon" onClick={(e) => handleDelete(e, index)} style={{ backgroundImage: `url('${delIcon}')` }}></span>
                        </Link>
                        {openModal ? <ModalBox info={teacher} openClose={() => setOpenModal(false)} index={index} /> : null}

                    </div>
                })}
            </div>
        </div>
        {openManageTeacher ? <Modal onClose={handleCloseModal}>
            <TeacherFillForm selectedTeacher={selectedTeacher} index={selectedTeacherIndex} handleCloseModal={handleCloseModal} />

        </Modal> : null}
    </div>
}
export default Teachers