import { useEffect, useState } from "react"



export default function GithubProfileFinder(){
    const [userName,setUserName]=useState('JenkinHe')

    function handleSubmit(){

    }

    async function fetchGithubUserData(){
        const response =await fetch(`https://api.github.com/users/${userName}`)
        const data= await response.json()
    }

    useEffect(()=>{
        fetchGithubUserData()
    },[])

    return <div className="github-profile-container">
        <div className="input-wrapper">
            <input name="search-by-username" type="text" placeholder="search github username.." value={userName} onChange={(event)=>setUserName(event.target.value)}/>
            <button onClick={handleSubmit}>Search</button>

            
        </div>

    </div>
}