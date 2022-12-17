const initialState = {
    teachersList: []
}

const TeacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TEACHER':
            {
                return {...state, teachersList: [...state.teachersList, action.payload] }
            }
        case 'DEL_TEACHER':
            {
                console.log(action)
                return {...state, teachersList: state.teachersList.filter((item, i) => i !== action.payload) }
            }
        case 'EDIT_TEACHER':
            {
                const newUpdatedTeacher = state.teachersList.map((item, i) => {
                    if (action.payload.index === i) {
                        item = action.payload.teacherData
                    }
                    return item
                })
                return {...state, teachersList: newUpdatedTeacher }
            }
        default:
            {
                return state
            }
    }
}
export default TeacherReducer