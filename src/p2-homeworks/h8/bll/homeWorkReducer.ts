import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: GeneralType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT-UP': {
            return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
        }
        case 'SORT-DOWN': {

            return [...state].sort((a, b) => a.name > b.name ? -1 : 1)
        }
        case 'SORT-18': {
            return state.filter(f=>f.age>18)
        }
        default:
            return state
    }
}

type GeneralType = SortUpACType|SortDownACACType|Sort18ACType
type SortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: 'SORT-UP',
    } as const
}
type SortDownACACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: 'SORT-DOWN',
    } as const
}
type Sort18ACType = ReturnType<typeof sort18AC>
export const sort18AC = () => {
    return {
        type: 'SORT-18',
    } as const
}