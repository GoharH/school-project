import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CustomInput from "../../../../components/custom-input";
import './style.scss';

const SchoolForm = ({ selectedSchool, index, handleCloseModal }) => {
    const dispatch = useDispatch()

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
    const [errorSchool, setErrorSchool] = useState({
        schoolName: '',
        director: '',
        address: '',
        contact: '',
        emailAddress: '',
        teachersMaxCount: 0,
        peopleMaxCount: 0,
    })

    useEffect(() => {
        if (selectedSchool) {
            setSchool(selectedSchool)
        }
    }, [])

    const validation = () => {
        let isValidate = true
        const newErrors = {
            schoolName: '',
            director: '',
            address: '',
            contact: '',
            emailAddress: '',
            teachersMaxCount: 0,
            peopleMaxCount: 0,
        }
        if (!school.schoolName.trim().length) {
            newErrors.schoolName = 'Լրացրեք դպրոցի անվանումը'
            isValidate = false
        }
        if (!school.director.trim().length) {
            newErrors.director = 'Լրացրեք ղեկավարի անունը'
            isValidate = false
        }
        if (!school.address.trim().length) {
            newErrors.address = 'Լրացրեք հասցեն'
            isValidate = false
        }
        if (!school.contact.trim().length) {
            newErrors.contact = 'Լրացրեք հեռախոսահամարը'
            isValidate = false
        }
        if (!school.emailAddress.trim().length) {
            newErrors.emailAddress = 'Լրացրեք էլեկտրոնային հասցեն'
            isValidate = false
        }
        if (!school.teachersMaxCount.length) {
            newErrors.teachersMaxCount = 'Լրացրեք ուսուցիչների քանակը'
            isValidate = false
        }
        if (!school.peopleMaxCount.length) {
            newErrors.peopleMaxCount = 'Լրացրեք աշակերտների քանակը'
            isValidate = false
        }
        setErrorSchool(newErrors)
        return isValidate
        //return true
    }

    const handleChange = (e) => {
        setSchool({ ...school, [e.target.name]: e.target.value })
        setErrorSchool({ ...errorSchool, [e.target.name]: '' })
    }


    const handleConfirmClick = () => {
        if (validation()) {

            if (selectedSchool) {
                dispatch({ type: 'EDIT_SCHOOL', payload: { schoolData: school, index } })
            } else {
                dispatch({ type: 'ADD_SCHOOL', payload: school })
            }
        }
        setSchool({
            schoolName: '',
            director: '',
            address: '',
            contact: '',
            emailAddress: '',
            teachersMaxCount: 0,
            peopleMaxCount: 0,
        })
        handleCloseModal()
    }
    return <div className="G-form-page school-form">
        <div className="G-fill-section school-filling-section ">
            {/* <label>
                <p className="G-input-title input-title">Անվանում</p>
                <input type="text" value={school.schoolName} name='schoolName' onChange={handleChange} />
                {errorSchool.schoolName ? <p className="G-error-text">{errorSchool.schoolName}</p> : null}
            </label> */}

            <CustomInput label={'Անվանում'}
                error={!!errorSchool.schoolName}
                errorText={errorSchool.schoolName}
                name={'schoolName'}
                value={school.schoolName}
                onChange={handleChange} />

            <CustomInput label={'Ղեկավար'}
                error={!!errorSchool.director}
                errorText={errorSchool.director}
                name={'director'}
                value={school.director}
                onChange={handleChange} />
            <CustomInput label={'Հասցե'}
                error={!!errorSchool.address}
                errorText={errorSchool.address}
                name={'address'}
                value={school.address}
                onChange={handleChange} />
            <CustomInput label={'Կոնտակտ'}
                error={!!errorSchool.contact}
                errorText={errorSchool.contact}
                name={'contact'}
                value={school.contact}
                type={'number'}
                onChange={handleChange} />
            <CustomInput label={'Էլ․հասցե'}
                error={!!errorSchool.emailAddress}
                errorText={errorSchool.emailAddress}
                name={'emailAddress'}
                value={school.emailAddress}
                onChange={handleChange} />
            <CustomInput label={'Ուսուցիչների քանակ'}
                error={!!errorSchool.teachersMaxCount}
                errorText={errorSchool.teachersMaxCount}
                name={'teachersMaxCount'}
                value={school.teachersMaxCount}
                type={'number'}
                onChange={handleChange} />
            <CustomInput label={'Աշակերտների քանակ'}
                error={!!errorSchool.peopleMaxCount}
                errorText={errorSchool.peopleMaxCount}
                name={'peopleMaxCount'}
                value={school.peopleMaxCount}
                type={'number'}
                onChange={handleChange} />

            <button onClick={handleConfirmClick} className='school-button'>{selectedSchool ? 'Պահպանել' : 'Հաստատել'}</button>
        </div>

    </div>
}
export default SchoolForm