"use client"
import { ChangeEvent, useState } from "react"


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div>

            <form className="w-2/5 border p-10">
            <h2>LOGIN</h2>
            <input type="text" placeholder="Enter Username" required className="border w-full px-4 py-6 border-gray-500 rounded-xl mt-4"
            onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
            />
            <br/>
            <input type="password" placeholder="Enter Password" required className="border w-full px-4 py-6 border-gray-500 rounded-xl mt-4"/>
            <br/>
            <button type="submit" className="rounded-xl bg-green-500 text-white cursor-pointer mt-4 px-6 py-4">Submit</button>


            </form>
        </div>
    )
}
export default Login;

