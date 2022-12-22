const initialState = {
    peopleList: []
}

const PeopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PEOPLE':
            {
                // const newPeopleList = JSON.parse(localStorage.getitem('peopleList'))
                // if (newPeopleList) {
                //     return {...state, peopleList: newPeopleList }
                // } else {
                //     return {...state, peopleList: [] }
                // }
                return {...state, peopleList: [...state.peopleList, action.payload] }
            }


        case 'DEL_PEOPLE':
            {
                // let localPeople = JSON.parse(localStorage.getItem('peopleList'))
                // const index = localPeople.indexOf(action.payload)
                // if (index === -1) {
                //     localPeople.splice(index, 1)
                // }
                // localStorage.setItem('peopleList', JSON.stringify(localPeople))
                // return {...state, peopleList: localPeople }
                return {...state, peopleList: state.peopleList.filter((item, i) => i !== action.payload) }
            }




        case 'EDIT_PEOPLE':
            {
                const newUpdatedPeople = state.peopleList.map((item, i) => {
                    if (action.payload.index === i) {
                        item = action.payload.peopleData
                    }
                    return item
                })
                return {...state, peopleList: newUpdatedPeople }
            }
        default:
            {
                return state
            }
    }
}
export default PeopleReducer