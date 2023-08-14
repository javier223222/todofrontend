import { Avatar, Typography } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const TypoImg = props => {
  return (
    <div className='d-flex flex-column align-items-center'>
        <Avatar sx={{m:1,bgcolor:"#0F9BF2"}}>
            <LockOutlinedIcon></LockOutlinedIcon>
        </Avatar>
        <Typography  component="h1" variant='h5' >
       {props.tittle}
        </Typography>
    </div>
  )
}



export default TypoImg