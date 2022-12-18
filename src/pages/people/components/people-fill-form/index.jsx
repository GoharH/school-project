import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CustomInput from "../../../../components/custom-input";
import './style.scss';


const PeopleForm = ({ selectedPeople, index, handleCloseModal }) => {
    const dispatch = useDispatch()
    const [people, setPeople] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
    })

    const [errorPeople, setErrorPeople] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
    })

    useEffect(() => {
        if (selectedPeople) {
            setPeople(selectedPeople)
        }

    }, [])

    const handleChange = (e) => {
        setPeople({ ...people, [e.target.name]: e.target.value })
        setErrorPeople({ ...errorPeople, [e.target.name]: '' })
    }
    const handleConfirmClick = () => {
        console.log(people);
        if (validation()) {
            if (selectedPeople) {
                dispatch({ type: 'EDIT_PEOPLE', payload: { peopleData: people, index } })
            } else {
                dispatch({ type: 'ADD_PEOPLE', payload: people })
            }
            setPeople({
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: ''
            })
            handleCloseModal()
        }

    }

    // onChange={handleChange //=>e}
    const validation = () => {
        let isValidate = true
        let isDisabled = false
        const newErrors = {
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: ''
        }
        if (!people.firstName.trim().length) {
            newErrors.firstName = 'Լրացրեք անունը'
            isValidate = false
        }
        if (!people.lastName.trim().length) {
            newErrors.lastName = 'Լրացրեք ազգանունը'
            isValidate = false
        }
        if (!people.address.trim().length) {
            newErrors.address = 'Լրացրեք  հասցեն'
            isValidate = false
        }
        if (!people.phoneNumber.length) {
            newErrors.phoneNumber = 'Լրացրեք հեռախոսահամարը'
            isValidate = false
        }

        setErrorPeople(newErrors)
        return isValidate
        //return true
    }


    return <div className="G-form-page people-form">
        <div className="G-fill-section people-filling-section ">
            <CustomInput label={'Անուն'}
                error={!!errorPeople.firstName}
                errorText={errorPeople.firstName}
                name={'firstName'}
                disabled={selectedPeople}
                value={people.firstName}
                onChange={handleChange} />

            <CustomInput label={'Ազգանուն'}
                error={!!errorPeople.lastName}
                errorText={errorPeople.lastName}
                name={'lastName'}
                value={people.lastName}
                onChange={handleChange} />

            <CustomInput label={'Հասցե'}
                error={!!errorPeople.address}
                errorText={errorPeople.address}
                name={'address'}
                value={people.address}
                onChange={handleChange}
            />

            <CustomInput label={'Կոնտակտ'}
                error={!!errorPeople.phoneNumber}
                errorText={errorPeople.phoneNumber}
                name={'phoneNumber'}
                value={people.phoneNumber}
                type={'number'}
                // disabled={true}
                onChange={(e) => handleChange(e)} />

            <button className='people-button' onClick={handleConfirmClick} >{selectedPeople ? 'Պահպանել' : 'Հաստատել'} </button>
        </div>

    </div>
}
export default PeopleForm