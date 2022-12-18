import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './style.scss'

const TeacherDetales = () => {
    const { idd } = useParams()
    const teachersList = useSelector(state => state.TeacherReducer.teachersList)
    const [teacher, setTeacher] = useState({
        firstName: '',
        lastName: '',
        profession: '',
        phoneNumber: '',
        salery: '',
        experience: ''
    })
    useEffect(() => {
        //console.log(idd)
        teachersList.forEach((item, index) => {
            if (index === +idd) {
                setTeacher(item)
            }
        });
    }, [])
    return <div className="G-page-detales">
        <h2 className="G-detales-title teacher-detales-title">{teacher.firstName} {teacher.lastName}</h2>
        <p className="G-detales-main  teacher-detalis-main">Դասավանդման առարկա․ <span className="G-detales-main-left">{teacher.profession}</span> </p>
        <p className="G-detales-main teacher-detalis-main">Հեռախոսահամար․ <span className="G-detales-main-left">{teacher.phoneNumber}</span> </p>
        <p className="G-detales-main teacher-detalis-main">Աշխատավարձ. <span className="G-detales-main-left"> {teacher.salery}</span></p>
        <p className="G-detales-main teacher-detalis-main">Աշխատանքային փորձ. <span className="G-detales-main-left">{teacher.experience}</span>  <span className="teacher-experience">տարի</span> </p>
    </div>
}
export default TeacherDetales