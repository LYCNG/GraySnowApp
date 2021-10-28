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

//auth is Object {auth:Boolean,user:String}
export const authorize=(auth)=>{
    return (dispatch)=>{
        dispatch({
            type:"set_auth",
            payload:auth
        })
    }
}
export const unAuthorize=(auth)=>{
    return (dispatch)=>{
        dispatch({
            type:"remove_auth",
            payload:auth
        })
    }
}