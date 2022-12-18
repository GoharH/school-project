import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CustomInput from "../../../../components/custom-input";
import './style.scss'

const TeacherFillForm = ({ selectedTeacher, index, handleCloseModal }) => {
    const dispatch = useDispatch()
    const [teacher, setTeacher] = useState({
        firstName: '',
        lastName: '',
        profession: '',
        phoneNumber: '',
        salery: '',
        experience: ''
    })
    const [errorTeacher, seterrorTeacher] = useState({
        firstName: '',
        lastName: '',
        profession: '',
        phoneNumber: '',
        salery: '',
        experience: ''
    })

    useEffect(() => {
        if (selectedTeacher) {
            setTeacher(selectedTeacher)
        }
    }, [])
    const handleChange = (e) => {
        setTeacher({ ...teacher, [e.target.name]: e.target.value })
        seterrorTeacher({ ...errorTeacher, [e.target.name]: '' })
    }
    const validation = () => {
        let isValidate = true
        const newErrors = {
            firstName: '',
            lastName: '',
            profession: '',
            phoneNumber: '',
            salery: '',
            experience: ''
        }
        if (!teacher.firstName.trim().length) {
            newErrors.firstName = 'Լրացրեք ուսուցչի անունը'
            isValidate = false
        }
        if (!teacher.lastName.trim().length) {
            newErrors.lastName = 'Լրացրեք ուսուցչի ազգանունը'
            isValidate = false
        }
        if (!teacher.profession.trim().length) {
            newErrors.profession = 'Լրացրեք ուսուցչի մասնագիտությունը'
            isValidate = false
        }
        if (!teacher.phoneNumber.length) {
            newErrors.phoneNumber = 'Լրացրեք ուսուցչի հեռախոսահամարը'
            isValidate = false
        }
        if (!teacher.salery.trim().length) {
            newErrors.salery = 'Լրացրեք ուսուցչի աշխատավարձը'
            isValidate = false
        }
        if (!teacher.experience.length) {
            newErrors.experience = 'Լրացրեք ուսուցիչների աշխատանքային փորձ'
            isValidate = false
        }
        seterrorTeacher(newErrors)
        return isValidate
        //return true
    }
    const handleConfirmClick = () => {
        if (validation()) {

            if (selectedTeacher) {
                dispatch({ type: 'EDIT_TEACHER', payload: { teacherData: teacher, index } })
            } else {
                dispatch({ type: 'ADD_TEACHER', payload: teacher })
            }
            setTeacher({
                firstName: '',
                lastName: '',
                profession: '',
                phoneNumber: '',
                salery: '',
                experience: ''
            })
            handleCloseModal()
        }

    }
    return <div className="G-form-page teach-page-form">
        <div className="G-fill-section teach-fill-section">
            {/* 
            hamematutyan hamar_______ type-y componentum default text e, aystex vory text e karox enq chgrel, vory text che grelu enq
            <label>
                <p className="G-input-title teach-input-title">Անուն</p>
                <input type="text" value={teacher.firstName} name='firstName' onChange={handleChange} />
                {errorTeacher.firstName ? <p className="G-error-text">{errorTeacher.firstName}</p> : null}
            </label> */}

            <CustomInput label={'Անուն'}
                error={!!errorTeacher.firstName}
                errorText={errorTeacher.firstName}
                name={'firstName'}
                value={teacher.firstName}
                onChange={handleChange} />

            <CustomInput label={'Ազգանուն'}
                error={!!errorTeacher.lastName}
                errorText={errorTeacher.lastName}
                name={'lastName'}
                value={teacher.lastName}
                onChange={handleChange} />

            <CustomInput label={'Մասնագիտություն'}
                error={!!errorTeacher.profession}
                errorText={errorTeacher.profession}
                name={'profession'}
                value={teacher.profession}
                onChange={handleChange} />
            <CustomInput label={'Կոնտակտ'}
                error={!!errorTeacher.phoneNumber}
                errorText={errorTeacher.phoneNumber}
                name={'phoneNumber'}
                value={teacher.phoneNumber}
                type={'number'}
                onChange={handleChange} />
            <CustomInput label={'Աշխատավարձ'}
                error={!!errorTeacher.salery}
                errorText={errorTeacher.salery}
                name={'salery'}
                value={teacher.salery}
                type={'number'}
                onChange={handleChange} />
            <CustomInput label={'Աշխատանքային փորձ'}
                error={!!errorTeacher.experience}
                errorText={errorTeacher.experience}
                name={'experience'}
                value={teacher.experience}
                type={'number'}
                onChange={handleChange} />
            <button onClick={handleConfirmClick} className='teach-button'>{selectedTeacher ? 'Պահպանել' : 'Հաստատել'}</button>
        </div>
    </div>
}
export default TeacherFillForm