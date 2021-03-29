import React, { createContext, useState, useEffect } from 'react';
import { getPlayerTeam, getTeamId, playersTeam, arregloTeam } from './../constants';

export const PlayersContext = createContext();

const PlayersContextProvider = ({ children }) => {
    const teamid = window.location.pathname.split("/")[2];
    const [doneFetch, setDoneFetch] = useState();
    const [team, setTeam] = useState([]);
    const [doneFetchPlayers, setDoneFetchPlayers] = useState();
    const [players, setPlayers] = useState([]);

    useEffect(() => getTeam(teamid), [teamid]);
    useEffect(() => getPlayers(teamid), [teamid]);
    
    const getTeam = teamid => {
    //    fetch(getTeamId(teamid)
    //     , {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-key": "9ece9f0764msh963573b920062e4p1ed0e0jsn637307dfc71f",
    //             "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
    //         }
    //     }
    //     )
    //         .then(res => res.json())
    //         .then(data => {
    //             const { teams } = data.api;
    //             setDoneFetch(true);
    //             setTeam(teams)
    //             console.log(teams)
    //         })
    //         .catch(err => console.log(err));
        setDoneFetch(true);
        setTeam(arregloTeam);
    };

    const getPlayers = teamid => {
        // fetch(getPlayerTeam(teamid)
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
        //         const { players } = data.api;
        //         setDoneFetchPlayers(true);
        //         setPlayers(players)
        //         console.log(players)
        //     })
        //     .catch(err => console.log(err));
        setDoneFetchPlayers(true);
        setPlayers(playersTeam);
    };

    return (
        <PlayersContext.Provider value={{ doneFetch, team, doneFetchPlayers, players }}>
            {children}
        </PlayersContext.Provider>
    );
};

PlayersContextProvider.displayName = "PlayersContextProvider";

export default PlayersContextProvider;