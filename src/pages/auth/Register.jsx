import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { register, setStatus } from '../../../store/authSlice'
import { useDispatch,useSelector } from 'react-redux'
import STATUSES from '../../globals/status/statuses'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate()
  const {status}=useSelector((state)=> state.auth)
  const dispatch =useDispatch()
 const handleRegister=(data)=>{
  dispatch(register(data))

 }
 useEffect(()=>{
   //check the status value
  //status -->vlaue success-->navigate the to login page.
  if(status=== STATUSES.SUCCESS){
   
    dispatch(setStatus(null))
    navigate('/login')
  }
  // else{
  //    navigate('/register')
  // }
 },[status])
  return (
    <Form type='Register'onSubmit={handleRegister}/>
  )
}

export default Register