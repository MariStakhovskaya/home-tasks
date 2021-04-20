
const LOADING = 'LOADING'
export type actionType =
    | ReturnType<typeof loadingAC>

export type LoadingStateType = {
    isLoading: boolean
}

const initState = {
        isLoading: false
};

export const loadingReducer = (state = initState, action: actionType): LoadingStateType => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {...state,
                isLoading: action.isLoading
            } ;
        }
        default: return state;
    }
};

export const loadingAC = (isLoading: boolean) => ({type: LOADING, isLoading: isLoading} as const); // fix any