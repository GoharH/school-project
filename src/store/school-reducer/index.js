const initialState = {
    schoolsList: []
}

const SchoolReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SCHOOL':
            {
                return {...state, schoolsList: [...state.schoolsList, action.payload] }
            }
        case 'DEL_SCHOOL':
            {
                return {...state, schoolsList: state.schoolsList.filter((item, i) => i !== action.payload) }
                //kam
                // state.schoolsList.splice(action.payload, 1)
                // return {...state, schoolsList:[...state.schoolsList]}
            }
        case 'EDIT_SCHOOL':
            {
                //console.log(action.payload);
                const newUpdatedSchools = state.schoolsList.map((item, i) => {
                    if (action.payload.index === i) {
                        item = action.payload.schoolData
                    }
                    return item
                })
                return {...state, schoolsList: newUpdatedSchools }
            }
        case 'ADD_CLASS_LIST':

            {
                const newUpdatedSchools = state.schoolsList.map((item, i) => {
                    if (action.payload.index === i) {
                        item.classList.push(action.payload.classData)
                    }
                    return item
                })
                return {...state, schoolsList: newUpdatedSchools }
            }
        default:
            {
                return state
            }
    }
}
export default SchoolReducer