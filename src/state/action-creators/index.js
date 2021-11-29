export const depositMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({ 
            type:"deposit",
            payload:amount
        })
    }
}

export const withdrawMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({ 
            type:"withdraw",
            payload:amount
        })
    }
}


export * from "./translateAction"
export * from "./themeAction"
export * from "./authAction"