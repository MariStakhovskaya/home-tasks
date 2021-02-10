export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {
            if (action.payload === "up"){

                return [...state].sort((a, b) => {

                    const nameA = a.name.toLocaleLowerCase()
                    const nameB = b.name.toLocaleLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                })


            } else if (action.payload === "down") {
               return [...state].sort((a, b) => {

                    const nameA = a.name.toLocaleLowerCase()
                    const nameB = b.name.toLocaleLowerCase()
                    if (nameA < nameB)
                        return 1
                    if (nameA > nameB)
                        return -1
                    return 0
                } )


        } else return state }

        case "check": {

            return [...state].filter(st => st.age > action.payload)
        }
        default: return state
    }
};