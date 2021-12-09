import React,{useEffect, useLayoutEffect} from 'react'
import Box from '@mui/material/Box';
import { useTranslation} from 'react-i18next';
import {useSelector} from "react-redux"
import { useActions } from "../../hooks/useActions";

function AccountPage() {
    const { t } = useTranslation();
    let theme = useSelector(state => state.theme);//String
    let {auth,avatar,username} = useSelector(state => state.auth);//Boolean

    useEffect(()=>{
        if(!auth){
            window.location.href="#/"
            alert(t("account.noAuth"))
        }
    },[auth]);

    return (
        <Box>
            <h1 style={{color:theme==="Dark"?"white":"black"}}>{username}</h1>
            <div>
                <img alt="avatar" width="300px" height="300px"src={avatar} />
            </div>
        </Box>
    )
}

export default AccountPage
