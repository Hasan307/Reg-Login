"use client"
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {

    const [formValue,SetFormValue]=useState({email:"email@email.com",password:"123"})
    const router=useRouter();

    const inputChange = (name,value) => {
        SetFormValue(formValue=>(
            {
                ...formValue,
                [name]:value
            }
        ))
    }

    const Submit = async (e) => {
        e.preventDefault();
        if(formValue.email.length===0){
            alert("Email Required")
        }
        else if(formValue.password.length===0){
            alert("Password Required")
        }
        else{
            const config = {method: 'POST', body: JSON.stringify(formValue)}
            const response = await fetch("/api/login", config)
            const json=await response.json();
            if(json['status']===true){
                router.replace("/dashboard")
            }
            else {
                alert(json['message'])
            }

        }
    }



    return (

        <div className="w-full max-w-xs">
               <form onSubmit={Submit}  className="card p-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">User Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formValue.email} onChange={(e)=>inputChange('email',e.target.value)} type="email" placeholder="example@example.com"/>
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">User Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formValue.password} onChange={(e)=>inputChange('password',e.target.value)} type="password" placeholder="XXXXXXX"/>
                        </div>
                        <input className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded" type="submit" value="Login" />

                    
                    </form>
                    
            
           
        </div>

    );
};

export default Page;