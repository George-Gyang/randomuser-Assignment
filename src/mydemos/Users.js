import React, { useEffect, useState } from "react";


function Users() {

    // set state for API
    const [users, setUsers] = useState([])

    // useEffect(() => {
    //     fetch("https://randomuser.me/api/?results=10&inc=name")
    //         .then((res) => res.json())
    //         console.log(res)
    //         .then((data) => {
    //             setUsers(data)
    //         })
    //         .catch((e) =>console.log(e.message) )
    // }, [])

    // Handling error with asyn/await
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("https://randomuser.me/api/?results=10");
                // console.log(response)
                const data = await response.json();
                // const idd = data.results[0].id.value
                const randomUser = data.results[0].name
                const fullname = `${randomUser.title} ${randomUser.first} ${randomUser.last}`
                // console.log(data.results[0].name.first);
                setUsers(fullname)
            }
            catch (err) {
                console.log(err, "Data not Available!!!")
            };
        }
        fetchUser();
    }, []);

    return (
        <div>
            <div>
                {users}
            </div>
        </div>
    )
}



export default Users;