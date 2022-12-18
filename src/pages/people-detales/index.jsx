import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './style.scss'

const PeopleDetales = () => {
    const { id } = useParams()
    const peopleList = useSelector(state => state.PeopleReducer.peopleList)
    const [people, setPeople] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
    })
    useEffect(() => {
        peopleList.forEach((item, index) => {
            if (index === +id) {
                setPeople(item)
            }
        });

    }, [])
    return <div className="G-page-detales">
        <h2 className="G-detales-title people-detales-title">{people.firstName} {people.lastName}</h2>
        <p className="G-detales-main  people-detalis-main">Հասցե․ <span className="G-detales-main-left">{people.address}</span> </p>
        <p className="G-detales-main people-detalis-main">Հեռախոսահամար․ <span className="G-detales-main-left">{people.phoneNumber}</span> </p>
    </div>
}
export default PeopleDetales