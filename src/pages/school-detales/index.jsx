import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Modal from "../../components/modal";
import AddClass from "./add-class";
import './style.scss'

const SchoolDetales = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [openManageSchoolClasses, setOpenManageSchoolClasses] = useState(false)
    const schoolsList = useSelector(state => state.SchoolReducer.schoolsList)
    const [school, setSchool] = useState({
        schoolName: '',
        director: '',
        address: '',
        contact: '',
        emailAddress: '',
        teachersMaxCount: 0,
        peopleMaxCount: 0,
        teachersList: [],
        peopleList: [],
        classList: [],
        fund: 0
    })

    useEffect(() => {
        schoolsList.forEach((item, index) => {
            if (index === +id) {
                setSchool(item)
            }
        });
    }, [schoolsList])
    // dasaran avelacnelu button
    const handleCloseModal = () => {
        setOpenManageSchoolClasses(false)
    }
    const handleAddClass = () => {
        setOpenManageSchoolClasses(true)
    }
    useEffect(() => {
        let list = JSON.parse(localStorage.getItem('school-list'))
        console.log(list)
        if (list) {
            dispatch({ type: 'SET_SCHOOL_LIST_FROM_STORAGE', payload: list })
        }
    }, [])
    useEffect(() => {
        if (schoolsList.length) {
            localStorage.setItem('school-list', JSON.stringify(schoolsList))
        }
    }, [schoolsList])


    return <div className="G-page-detales">
        <h2 className="G-detales-title school-detales-title">{school.schoolName}</h2>
        <p className="G-detales-main  school-detalis-main">Ղեկավար․ <span className="G-detales-main-left"> {school.director}</span> </p>
        <p className="G-detales-main  school-detalis-main">Հասցե․ <span className="G-detales-main-left">{school.address}</span> </p>
        <p className="G-detales-main school-detalis-main">Հեռախոսահամար․ <span className="G-detales-main-left">{school.contact}</span> </p>
        <p className="G-detales-main school-detalis-main">Էլ․հասցե <span className="G-detales-main-left"> {school.emailAddress}</span></p>
        <p className="G-detales-main school-detalis-main">Ուսուցիչների թիվ․ <span className="G-detales-main-left">{school.teachersMaxCount}</span> </p>
        <p className="G-detales-main school-detalis-main">Աշակերտների թիվ․  <span className="G-detales-main-left">{school.peopleMaxCount}</span></p>

        {/* <p className="G-detales-main school-detalis-main">Ուսուցիչների ցանկ․
            <span className="G-detales-main-left">{school.teachersList}</span>
        </p>
        <p className="G-detales-main school-detalis-main">Աշակերտների ցանկ․
            <span className="G-detales-main-left">{school.peopleList}</span> 
        </p>  */}
        <p className="G-detales-main school-detalis-main">Բյուջե․ <span className="G-detales-main-left">{school.fund}</span> </p>
        <div>
            <button className="add-class-btn" onClick={handleAddClass}>Ավելացնել դասարան</button>
        </div>
        <div className="added-classes">
            {school.classList.map((item, index) => {
                return <div key={index} className="added-class">
                    <div className="G-flex">
                        <p>Դասարան _</p>
                        <p> {item.className}</p>
                    </div>
                    <div className="G-flex">
                        <p>Դասղեկ _</p>
                        <p>{item.teacher ? item.teacher.firstName : '-'}</p>
                    </div>
                    <div className="G-flex">
                        <p>Աշակերտների քանակ _</p>
                        <p>{item.peopleList.length}</p>
                    </div>
                </div>
            })}


        </div>

        {openManageSchoolClasses ? <Modal onClose={handleCloseModal}>
            <AddClass schoolIndex={id} onClose={handleCloseModal} />
        </Modal> : null}
    </div>
}
export default SchoolDetales