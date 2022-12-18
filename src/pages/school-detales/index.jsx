import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './style.scss'

const SchoolDetales = () => {
    const { id } = useParams()
    const schoolsList = useSelector(state => state.SchoolReducer.schoolsList)
    const teachersList = useSelector(state => state.TeacherReducer.teachersList)
    const peopleList = useSelector(state => state.PeopleReducer.peopleList)
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
        fund: 0
    })

    useEffect(() => {
        console.log(id)
        schoolsList.forEach((item, index) => {
            if (index === +id) {
                setSchool(item)
            }
        });
    }, [])
    return <div className="G-page-detales">
        <h2 className="G-detales-title school-detales-title">{school.schoolName}</h2>
        <p className="G-detales-main  school-detalis-main">Ղեկավար․ <span className="G-detales-main-left"> {school.director}</span> </p>
        <p className="G-detales-main  school-detalis-main">Հասցե․ <span className="G-detales-main-left">{school.address}</span> </p>
        <p className="G-detales-main school-detalis-main">Հեռախոսահամար․ <span className="G-detales-main-left">{school.contact}</span> </p>
        <p className="G-detales-main school-detalis-main">Էլ․հասցե <span className="G-detales-main-left"> {school.emailAddress}</span></p>
        <p className="G-detales-main school-detalis-main">Ուսուցիչների թիվ․ <span className="G-detales-main-left">{school.teachersMaxCount}</span> </p>
        <p className="G-detales-main school-detalis-main">Աշակերտների թիվ․  <span className="G-detales-main-left">{school.peopleMaxCount}</span></p>
        <p className="G-detales-main school-detalis-main">Ուսուցիչների ցանկ․
            <select>
                {teachersList.map((item, index) => {
                    return <option value={index}>{item.firstName}</option>
                })}
            </select>
            {/* <span className="G-detales-main-left">{school.teachersList}</span> */}
        </p>
        <p className="G-detales-main school-detalis-main">Աշակերտների ցանկ․

            {/* <span className="G-detales-main-left">{school.peopleList}</span>  */}
        </p>
        <div className="people-list-in-school">
            {peopleList.map((item, index) => {
                return <div className="people-in-school">
                    <p>{item.firstName} {item.lastName}</p>
                    <input type="radio" value={index} name='people-check' />
                </div>
            })}
        </div>
        <p className="G-detales-main school-detalis-main">Բյուջե․ <span className="G-detales-main-left">{school.fund}</span> </p>

    </div>
}
export default SchoolDetales