import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  return (
    <section className='px-5 lg:px-0'>
<div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
<h3 className="text-headingColor text-[22px] text-center leading-9 font-bold mb-10">
Hello! <span className='text-primaryColor'>Welcome</span> Back 🔥 
</h3>
<form className="py-4 md:py-0">
<div className="mb-5">
<input type='email' placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer ' required/>
</div>
<div className="mb-5">
<input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer ' required/>
</div>

<div className='mt-7'>
<button type='submt' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Login</button>
</div>
<p className="mt-5 text-textColor text-center">
Don&apos;t have account? <Link to="/register" className='text-primaryColor font-medium ml-1'>Sign Up</Link>
</p>
</form>
</div>
    </section>
  )
}

export default Login 