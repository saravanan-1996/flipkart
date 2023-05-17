import React, { useState } from 'react';
import './LoginModel.css';
import {RxCross2} from 'react-icons/rx';
import supabase from '../../supabase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../slices/userSlice';

const LoginModel = ({isOpen,setIsOpen}) => {
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [loginType,setLoginType] = useState(true);

const dispatch = useDispatch();

const signup = async()=>{
const {data} = await supabase.auth.signUp ({
    email,
    password,
});
if(data.user){
alert("Account Created, verify Your mail");
}
}

const login = async()=>{
    const {data,error} = await supabase.auth.signInWithPassword({
        email,
        password,
    });
if(error){
    alert(error.message);
return;
}
dispatch(setUser(data.user));
};

  return isOpen ? (
    <div className='overlay'>
<div className='loginModel'>
    <div className='left'>
        <div className='left-container'>
            <p className='login-title'>Login</p>
            <p className='login-dec'>
                Get access to your orders, wishlist and Recomendations
            </p>
        </div>
    </div>
    <div  className='right'>
        <input
        type='email'
        className='Login-input'
        placeholder='Email'
        required 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
         <input
        type='password'
        className='Login-input'
        placeholder='password'
        required 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <p className='termsandcon'>
            By continuing, you agree to Flipkarts(" ")
            <span style={{color:"blue"}}> Terms of Use</span> and
            <span style={{color:"blue"}}> Privacy Policy.</span>(" ")
        </p>
        
            {
            loginType ? (
                <button className='Login-btn' onClick={login}>Login</button>
            ):(
<button className='Login-btn' onClick={signup}>Signup</button>
            )}
            {
                loginType ? (
                    <p className='Login-signup' onClick={()=> setLoginType(false)}> New to Flipkart? create an account</p>
                ) : (
                    <p className='Login-signup' onClick={()=> setLoginType(true)}>
                         Alredy an user? Login an account</p>
                )
            }
    </div>
    <div className='close' onClick={()=>setIsOpen(false)}>
    <RxCross2/>
    </div>
</div>
    </div>
  ) : (<></>);
}
export default LoginModel;