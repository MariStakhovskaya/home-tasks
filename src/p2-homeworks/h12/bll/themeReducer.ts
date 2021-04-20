export type themeType='dark'| 'red'| 'some' | 'yellow'

export type initStateType ={
    themes: themeType
}

const initState = {
    themes: 'some' as const
};

export const themeReducer = (state:initStateType = initState, action: changeThemeCType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, themes: action.theme};
        }
        default: return state
    }
};

export const changeThemeC = (theme: themeType): any => ({
    type: "CHANGE-THEME",
    theme
} as const)

export type changeThemeCType= ReturnType<typeof changeThemeC>
