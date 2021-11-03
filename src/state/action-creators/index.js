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

export const translate = (language)=>{
    return (dispatch)=>{
        dispatch({ 
            type:"translate",
            payload:language
        })
    }
}

export const switchMode = (theme)=>{
    return (dispatch)=>{
        dispatch({ 
            type:"switch",
            payload:theme
        })
    }
}

export * from "./authActionCreators"