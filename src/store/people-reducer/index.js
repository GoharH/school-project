const initialState = {
    peopleList: []
}

const PeopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PEOPLE':
            {
                console.log(action.payload)
                return {...state, peopleList: [...state.peopleList, action.payload] }
            }


        case 'DEL_PEOPLE':
            {

                return {...state, peopleList: state.peopleList.filter((item, i) => i !== action.payload) }
            }

        case 'SET_LIST_FROM_STORAGE':
            {
                return {...state, peopleList: action.payload }
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
                return {...state }
            }
    }
}
export default PeopleReducer