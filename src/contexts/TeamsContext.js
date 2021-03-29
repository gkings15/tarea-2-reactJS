import React, { createContext, useState, useEffect } from 'react';
import { getConfTeams, teamsWest, teamsEast } from './../constants';

export const TeamsContext = createContext();

const TeamsContextProvider = ({ children }) => {
    const q_conf = window.location.pathname.split("/")[2];
    const [doneFetch, setDoneFetch] = useState();
    const [teams, setTeams] = useState([]);
    const [conference, setConference] = useState('');

    useEffect(() => getTeams(q_conf), [q_conf]);

    const getTeams = q_conf => {
        // fetch(getConfTeams(q_conf)
        // , {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-key": "9ece9f0764msh963573b920062e4p1ed0e0jsn637307dfc71f",
        //         "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
        //     }
        // }
        // )
        //     .then(res => res.json())
        //     .then(data => {
        //         const { teams } = data.api;
        //         setDoneFetch(true);
        //         setTeams(teams)
        //         console.log(teams)
        // setConference(q_conf === 'west' ? 'Teams WEST' : 'Teams EAST')
        //     })
        //     .catch(err => console.log(err));
        setDoneFetch(true);
        setTeams(q_conf === 'west' ? teamsWest : teamsEast);
        setConference(q_conf === 'west' ? 'Teams WEST' : 'Teams EAST')
    };

    return (
        <TeamsContext.Provider value={{ doneFetch, teams, conference }}>
            {children}
        </TeamsContext.Provider>
    );
};

TeamsContextProvider.displayName = "TeamsContextProvider";

export default TeamsContextProvider;