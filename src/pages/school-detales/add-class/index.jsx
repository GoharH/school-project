import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.scss'

const AddClass = ({ schoolIndex, onClose }) => {
    const dispatch = useDispatch()
    const teachersList = useSelector(state => state.TeacherReducer.teachersList)
    const peopleList = useSelector(state => state.PeopleReducer.peopleList)
    const [classModel, setClassModel] = useState({
        className: '',
        teacher: null,
        peopleListIndex: [],
        peopleList: []
    })

    const handleChange = (e) => {
        setClassModel({ ...classModel, [e.target.name]: e.target.value })
    }
    const handleClose = () => {
        //galis e cnoxic
        onClose()
    }

    const handleSaveClass = () => {
        console.log(classModel.peopleList)
        if (classModel.className.trim().length && classModel.teacher) {
            dispatch({ type: 'ADD_CLASS_LIST', payload: { classData: classModel, index: +schoolIndex } }) //ushadir, vor indexy ga tvayin
            onClose()
        }
    }

    // gtnum enq nshac usucchin
    const handleSelectTeacher = (e) => {
        // console.log(e.target.value)
        if (e.target.value || e.target.value === 0) {
            teachersList.forEach((item, index) => {
                if (index === +e.target.value) {
                    setClassModel({ ...classModel, teacher: item })
                }
            })
        } else {
            setClassModel({ ...classModel, teacher: null })
        }
    }

    const handleSelectPeople = (e) => {
        const newList = classModel.peopleListIndex
        let indexData = newList.indexOf(+e.target.value)
        if (indexData >= 0) {
            newList.splice(indexData, 1)
        } else {
            newList.push(+e.target.value)
        }

        const childrensList = []
        // const peopleName = []
        peopleList.forEach((item, index) => {
            if (newList.includes(index)) {
                childrensList.push(item)
            }
            // if (newList.includes(index)) {
            //     peopleName.push(item.firstName)
            // }
            // console.log(peopleName)
        })

        setClassModel({ ...classModel, peopleListIndex: newList, peopleList: childrensList })
    }
    return <div className="add-class-section">
        <div className="G-flex ">
            <label className="class-name">
                <p>??????????????</p>
                <input type="text" name='className' value={classModel.className} onChange={handleChange} />
            </label>
            <label >
                <p>????????????</p>
                <select className="class-head" onChange={handleSelectTeacher}>
                    <option value="">???????????? ????????????</option>
                    {teachersList.map((item, index) => {
                        return <option value={index} key={index}>{item.firstName}</option>
                    })}
                </select>
            </label>
        </div>
        <div className="people-list">
            <p>????????????????????</p>
            <div className="people-list-item">
                {peopleList.map((item, index) => {
                    return <div className="people-in-school" key={index}>
                        <label className="people-inp">
                            <p>{item.firstName} {item.lastName}</p>
                            <input type="checkbox" checked={classModel.peopleListIndex.includes(index)} value={index} onChange={handleSelectPeople} />
                        </label>
                    </div>
                })}
            </div>
        </div>
        <div className="class-btns">
            <button className="class-btn" onClick={handleClose}>??????????</button>
            <button className="class-btn" onClick={handleSaveClass}>????????????????</button>
        </div>
    </div>

}
export default AddClass