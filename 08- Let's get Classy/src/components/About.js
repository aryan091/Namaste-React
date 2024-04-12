import React from "react";
import { useState , useEffect } from "react";
import User from "./User";
import Shimmer from "./Shimmer"

const About = () => {

    const users = ["akshaymarch7", "aryan091","dhirajgupta12"];

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const fetchedUserData = [];
            for (const userName of users) {
                try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
                    if (!response) {
                        return
                    }
                    const userData = await response.json();
                    fetchedUserData.push(userData);
                } catch (error) {
                   return
                }
            }
            setUserData(fetchedUserData);
        };

        fetchData();
    }, []);

    console.log(userData);
    return  userData.length === 0 ? <Shimmer/> :(
        <div className="container">
            {userData.map((user, index) => (
                <User key={index} data={user} />
            ))}
        </div>
        
        

    )
}

export default About;