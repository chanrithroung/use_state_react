import { useState } from "react";

const person = {
    id: 1,
    name: "Chanrith",
    postion: "Teacher"
}

const newPerson = { ...person, postion: "Worker" }

const Profile = () => {
    const [user, setUser] = useState(person);
    
    return <>
        <article>
            <h1>{user.name}</h1>
            <h2>{user.postion}</h2>
            <button onClick={() => setUser(newPerson) }>Click Me</button>
        </article>
    </>
}

export default Profile;