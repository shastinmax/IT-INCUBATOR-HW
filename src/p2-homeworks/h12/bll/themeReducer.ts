export type InitialStateType = {
    theme: string
}

const initState = {
    theme: 'some'
};

export const themeReducer = (state: InitialStateType = initState, action: ChangeThemeCType): InitialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,theme:action.payload.theme
            };
        }
        default:
            return state;
    }
};

type ChangeThemeCType=ReturnType<typeof changeThemeC>
export const changeThemeC = (theme:string)=> {
    return {
        type:'CHANGE-THEME',
        payload:{
            theme
        }
    }as const
}; // fix any