type InitialStateType={
    loading:boolean
}

const initState = {
    loading: false
}

export const loadingReducer = (state:InitialStateType = initState, action: LoadingACType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state,loading:action.payload.loading}
        }
        default:
            return state
    }
}
export type LoadingACType=ReturnType<typeof loadingAC>
export const loadingAC = (loading:boolean) => {
    return {
        type: 'SET-LOADING',
        payload:{
            loading
        }as const
    }

} // fix any