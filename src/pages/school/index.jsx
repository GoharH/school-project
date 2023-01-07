import React, { useEffect, useState } from "react";
import './style.scss';
//import AddingButton from '../../components/adding-btn';
import SchoolForm from './components/school-fill-form';
import { useDispatch, useSelector } from "react-redux";
import editIcon from '../../assets/images/edit.svg';
import schoolIcon from '../../assets/images/school.png';
import delIcon from '../../assets/images/box-del1.png';
import ModalBox from './components/modal-box';
import Modal from "../../components/modal";
import { Link } from "react-router-dom";


const SchoolPage = () => {
    //map fralu list
    const newSchoolList = useSelector(state => state.SchoolReducer.schoolsList)
    // modal bacel pakel
    const [openModal, setOpenModal] = useState(false)
    // select scholl  foer  edit
    const [selectedSchool, setSelectedSchool] = useState(null)
    // finde cuurent  school data from school list
    const [selectedSchoolIndex, setSelectedSchoolIndex] = useState(null)
    const [openManageSchool, setOpenManageSchool] = useState(false)

    const handleClick = () => {
        setOpenManageSchool(true)

    }
    const handleEdit = (e, school, index) => {
        setSelectedSchool(school)
        setSelectedSchoolIndex(index)
        setOpenManageSchool(true)
        e.stopPropagation()
        e.preventDefault()
    }
    const handleDelete = (e, index) => {
        // dispatch({ type: "DEL_SCHOOL", payload: index })
        setOpenModal(true)
        e.stopPropagation()
        e.preventDefault()
    }

    const handleCloseModal = () => {
        setOpenManageSchool(false)
        setSelectedSchool(null)
        setSelectedSchoolIndex(null)
    }

    useEffect(() => {
        if (newSchoolList.length) {
            localStorage.setItem('school-list', JSON.stringify(newSchoolList))
        }
    }, [newSchoolList])



    return <div className="G-page-box">
        <div className='G-page-header'>
            <h3 className="school-title">Դպրոց</h3>
        </div>
        <div className="G-page-scroll-body">
            <div className="G-page-btn">
                {/* <button className="school-btn" onClick={handleClick}>Ավելացնել</button> */}
                <div className="G-wave-btn" onClick={handleClick}>
                    <span>Դպրոց</span>
                    <div className="liquid"></div>
                </div>
            </div>
            <div className="G-page-created-boxes">
                {newSchoolList.map((school, index) => {
                    return <div key={index}>
                        <Link to={`/school-detales/${index}`} className='G-created-box school-box'>
                            <p className="G-created-box-name">{school.schoolName}</p>
                            <span className="edit-icon" onClick={(e) => handleEdit(e, school, index)} style={{ backgroundImage: `url('${editIcon}')` }}></span>
                            <span className="main-icon" style={{ backgroundImage: `url('${schoolIcon}')` }}></span>
                            <span className="del-icon" onClick={(e) => handleDelete(e, index)} style={{ backgroundImage: `url('${delIcon}')` }}></span>
                        </Link>
                        {openModal ? <ModalBox info={school} openClose={() => setOpenModal(false)} index={index} /> : null}
                    </div>
                })}
            </div>
        </div>
        {openManageSchool ? <Modal onClose={handleCloseModal}>
            <SchoolForm selectedSchool={selectedSchool} index={selectedSchoolIndex} handleCloseModal={handleCloseModal} />

        </Modal> : null}
    </div>

}
export default SchoolPage