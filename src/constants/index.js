//Base URL
// const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
const base_url = "https://api-nba-v1.p.rapidapi.com/";

export const getConfTeams = conf => `${base_url}teams/confName/${conf}`;
export const getPlayerTeam = teamid => `${base_url}players/teamId/${teamid}`;
export const getTeamId = teamid => `${base_url}teams/teamId/${teamid}`; //Cuando se antepone los CORS_ANYWHERE se cae la llamada.

export const teamsWest = [
    {
        "city": "Dallas",
        "fullName": "Dallas Mavericks",
        "teamId": "8",
        "nickname": "Mavericks",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b8/Mavericks_de_Dallas_logo.svg/150px-Mavericks_de_Dallas_logo.svg.png",
        "shortName": "DAL",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Southwest"
            }
        }
    },
    {
        "city": "Denver",
        "fullName": "Denver Nuggets",
        "teamId": "9",
        "nickname": "Nuggets",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Nuggets_de_Denver_2018.png/180px-Nuggets_de_Denver_2018.png",
        "shortName": "DEN",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Northwest"
            }
        }
    },
    {
        "city": "Golden State",
        "fullName": "Golden State Warriors",
        "teamId": "11",
        "nickname": "Warriors",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/1200px-Warriors_de_Golden_State_logo.svg.png",
        "shortName": "GSW",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Pacific"
            }
        }
    },
    {
        "city": "Houston",
        "fullName": "Houston Rockets",
        "teamId": "14",
        "nickname": "Rockets",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Houston_Rockets_logo_2003.png/330px-Houston_Rockets_logo_2003.png",
        "shortName": "HOU",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Southwest"
            }
        }
    },
    {
        "city": "LA",
        "fullName": "LA Clippers",
        "teamId": "16",
        "nickname": "Clippers",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/d/d6/Los_Angeles_Clippers_logo_2010.png",
        "shortName": "LAC",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Pacific"
            }
        }
    },
    {
        "city": "Los Angeles",
        "fullName": "Los Angeles Lakers",
        "teamId": "17",
        "nickname": "Lakers",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png",
        "shortName": "LAL",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Pacific"
            }
        }
    },
    {
        "city": "Memphis",
        "fullName": "Memphis Grizzlies",
        "teamId": "19",
        "nickname": "Grizzlies",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png",
        "shortName": "MEM",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Southwest"
            }
        }
    },
    {
        "city": "Minnesota",
        "fullName": "Minnesota Timberwolves",
        "teamId": "22",
        "nickname": "Timberwolves",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d9/Timberwolves_du_Minnesota_logo_2017.png/200px-Timberwolves_du_Minnesota_logo_2017.png",
        "shortName": "MIN",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Northwest"
            }
        }
    },
    {
        "city": "New Orleans",
        "fullName": "New Orleans Pelicans",
        "teamId": "23",
        "nickname": "Pelicans",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/2/21/New_Orleans_Pelicans.png/200px-New_Orleans_Pelicans.png",
        "shortName": "NOP",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Southwest"
            }
        }
    },
    {
        "city": "Oklahoma City",
        "fullName": "Oklahoma City Thunder",
        "teamId": "25",
        "nickname": "Thunder",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Thunder_d%27Oklahoma_City_logo.svg/1200px-Thunder_d%27Oklahoma_City_logo.svg.png",
        "shortName": "OKC",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Northwest"
            }
        }
    },
    {
        "city": "Phoenix",
        "fullName": "Phoenix Suns",
        "teamId": "28",
        "nickname": "Suns",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/5/56/Phoenix_Suns_2013.png",
        "shortName": "PHX",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Pacific"
            }
        }
    },
    {
        "city": "Portland",
        "fullName": "Portland Trail Blazers",
        "teamId": "29",
        "nickname": "Trail Blazers",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png",
        "shortName": "POR",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Northwest"
            }
        }
    },
    {
        "city": "Sacramento",
        "fullName": "Sacramento Kings",
        "teamId": "30",
        "nickname": "Kings",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png",
        "shortName": "SAC",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Pacific"
            }
        }
    },
    {
        "city": "San Antonio",
        "fullName": "San Antonio Spurs",
        "teamId": "31",
        "nickname": "Spurs",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/0/0e/San_Antonio_Spurs_2018.png",
        "shortName": "SAS",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Southwest"
            }
        }
    },
    {
        "city": "Team",
        "fullName": "Team LeBron",
        "teamId": "35",
        "nickname": "Team LeBron",
        "logo": "",
        "shortName": "LBN",
        "allStar": "1",
        "nbaFranchise": "0",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "West"
            }
        }
    },
    {
        "city": "Utah",
        "fullName": "Utah Jazz",
        "teamId": "40",
        "nickname": "Jazz",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/3/3b/Jazz_de_l%27Utah_logo.png",
        "shortName": "UTA",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "West",
                "divName": "Northwest"
            }
        }
    }
];
export const teamsEast = [
    {
        "city": "Atlanta",
        "fullName": "Atlanta Hawks",
        "teamId": "1",
        "nickname": "Hawks",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png",
        "shortName": "ATL",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Southeast"
            }
        }
    },
    {
        "city": "Boston",
        "fullName": "Boston Celtics",
        "teamId": "2",
        "nickname": "Celtics",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png",
        "shortName": "BOS",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Atlantic"
            }
        }
    },
    {
        "city": "Brooklyn",
        "fullName": "Brooklyn Nets",
        "teamId": "4",
        "nickname": "Nets",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/130px-Brooklyn_Nets_newlogo.svg.png",
        "shortName": "BKN",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Atlantic"
            }
        }
    },
    {
        "city": "Charlotte",
        "fullName": "Charlotte Hornets",
        "teamId": "5",
        "nickname": "Hornets",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f3/Hornets_de_Charlotte_logo.svg/1200px-Hornets_de_Charlotte_logo.svg.png",
        "shortName": "CHA",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Southeast"
            }
        }
    },
    {
        "city": "Chicago",
        "fullName": "Chicago Bulls",
        "teamId": "6",
        "nickname": "Bulls",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d1/Bulls_de_Chicago_logo.svg/1200px-Bulls_de_Chicago_logo.svg.png",
        "shortName": "CHI",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Central"
            }
        }
    },
    {
        "city": "Cleveland",
        "fullName": "Cleveland Cavaliers",
        "teamId": "7",
        "nickname": "Cavaliers",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/0/06/Cavs_de_Cleveland_logo_2017.png/150px-Cavs_de_Cleveland_logo_2017.png",
        "shortName": "CLE",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Central"
            }
        }
    },
    {
        "city": "Detroit",
        "fullName": "Detroit Pistons",
        "teamId": "10",
        "nickname": "Pistons",
        "logo": "",
        "shortName": "DET",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Central"
            }
        }
    },
    {
        "city": "Indiana",
        "fullName": "Indiana Pacers",
        "teamId": "15",
        "nickname": "Pacers",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/c/cf/Pacers_de_l%27Indiana_logo.svg/1180px-Pacers_de_l%27Indiana_logo.svg.png",
        "shortName": "IND",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Central"
            }
        }
    },
    {
        "city": "Miami",
        "fullName": "Miami Heat",
        "teamId": "20",
        "nickname": "Heat",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1c/Miami_Heat_-_Logo.svg/1200px-Miami_Heat_-_Logo.svg.png",
        "shortName": "MIA",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Southeast"
            }
        }
    },
    {
        "city": "Milwaukee",
        "fullName": "Milwaukee Bucks",
        "teamId": "21",
        "nickname": "Bucks",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/3/34/Bucks2015.png",
        "shortName": "MIL",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Central"
            }
        }
    },
    {
        "city": "New York",
        "fullName": "New York Knicks",
        "teamId": "24",
        "nickname": "Knicks",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/d/dc/NY_Knicks_Logo_2011.png",
        "shortName": "NYK",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Atlantic"
            }
        }
    },
    {
        "city": "Orlando",
        "fullName": "Orlando Magic",
        "teamId": "26",
        "nickname": "Magic",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/b/bd/Orlando_Magic_logo_2010.png",
        "shortName": "ORL",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Southeast"
            }
        }
    },
    {
        "city": "Philadelphia",
        "fullName": "Philadelphia 76ers",
        "teamId": "27",
        "nickname": "76ers",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/4/48/76ers_2016.png",
        "shortName": "PHI",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Atlantic"
            }
        }
    },
    {
        "city": "Team",
        "fullName": "Team Team Durant",
        "teamId": "34",
        "nickname": "Team Durant",
        "logo": "",
        "shortName": "DRT",
        "allStar": "1",
        "nbaFranchise": "0",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "East"
            }
        }
    },
    {
        "city": "Away",
        "fullName": "Away Team Wilbon",
        "teamId": "36",
        "nickname": "Team Wilbon",
        "logo": "",
        "shortName": "WLB",
        "allStar": "1",
        "nbaFranchise": "0",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "East"
            }
        }
    },
    {
        "city": "Home",
        "fullName": "Home Team Stephen A",
        "teamId": "37",
        "nickname": "Team Stephen A",
        "logo": "",
        "shortName": "SAS",
        "allStar": "1",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "East"
            }
        }
    },
    {
        "city": "Toronto",
        "fullName": "Toronto Raptors",
        "teamId": "38",
        "nickname": "Raptors",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/8/89/Raptors2015.png",
        "shortName": "TOR",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Atlantic"
            }
        }
    },
    {
        "city": "USA",
        "fullName": "USA USA",
        "teamId": "39",
        "nickname": "USA",
        "logo": "",
        "shortName": "USA",
        "allStar": "1",
        "nbaFranchise": "0",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "East"
            }
        }
    },
    {
        "city": "Washington",
        "fullName": "Washington Wizards",
        "teamId": "41",
        "nickname": "Wizards",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/archive/d/d6/20161212034849%21Wizards2015.png",
        "shortName": "WAS",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "Southeast"
            }
        }
    },
    {
        "city": "World",
        "fullName": "World World",
        "teamId": "42",
        "nickname": "World",
        "logo": "",
        "shortName": "WLD",
        "allStar": "1",
        "nbaFranchise": "0",
        "leagues": {
            "standard": {
                "confName": "East",
                "divName": "East"
            }
        }
    }
];

export const playersTeam = [
    {
        "firstName": "Clint",
        "lastName": "Capela",
        "teamId": "1",
        "yearsPro": "6",
        "collegeName": "Elan Chalon",
        "country": "Switzerland",
        "playerId": "92",
        "dateOfBirth": "1994-05-18",
        "affiliation": "Elan Chalon/Switzerland",
        "startNba": "2014",
        "heightInMeters": "2.08",
        "weightInKilograms": "108.9",
        "leagues": {
            "standard": {
                "jersey": "15",
                "active": "1",
                "pos": "C"
            }
        }
    },
    {
        "firstName": "Vince",
        "lastName": "Carter",
        "teamId": "1",
        "yearsPro": "0",
        "collegeName": "",
        "country": "",
        "playerId": "94",
        "dateOfBirth": "",
        "affiliation": "",
        "startNba": "0",
        "heightInMeters": "",
        "weightInKilograms": "",
        "leagues": {
            "standard": {
                "jersey": "15",
                "active": "1",
                "pos": "G-F"
            }
        }
    },
    {
        "firstName": "Dewayne",
        "lastName": "Dedmon",
        "teamId": "1",
        "yearsPro": "0",
        "collegeName": "",
        "country": "",
        "playerId": "131",
        "dateOfBirth": "",
        "affiliation": "",
        "startNba": "0",
        "heightInMeters": "",
        "weightInKilograms": "",
        "leagues": {
            "standard": {
                "jersey": "14",
                "active": "1",
                "pos": "C"
            }
        }
    },
    {
        "firstName": "Malcolm",
        "lastName": "Delaney",
        "teamId": "1",
        "yearsPro": "2",
        "collegeName": "Virginia Tech",
        "country": "USA",
        "playerId": "133",
        "dateOfBirth": "1989-03-11",
        "affiliation": "Virginia Tech/USA",
        "startNba": "2016",
        "heightInMeters": "1.9",
        "weightInKilograms": "86.2",
        "leagues": {
            "standard": {
                "jersey": "5",
                "active": "1",
                "pos": "G"
            }
        }
    },
    {
        "firstName": "Kris",
        "lastName": "Dunn",
        "teamId": "1",
        "yearsPro": "4",
        "collegeName": "Providence",
        "country": "USA",
        "playerId": "152",
        "dateOfBirth": "1994-03-18",
        "affiliation": "Providence/USA",
        "startNba": "2016",
        "heightInMeters": "1.9",
        "weightInKilograms": "93.0",
        "leagues": {
            "standard": {
                "jersey": "32",
                "active": "1",
                "pos": "G"
            }
        }
    },
    {
        "firstName": "Jeremy",
        "lastName": "Evans",
        "teamId": "1",
        "yearsPro": "7",
        "collegeName": "Western Kentucky",
        "country": "USA",
        "playerId": "162",
        "dateOfBirth": "1987-10-24",
        "affiliation": "Western Kentucky/USA",
        "startNba": "2010",
        "heightInMeters": "2.06",
        "weightInKilograms": "90.7",
        "leagues": {
            "standard": {
                "jersey": "6",
                "active": "1",
                "pos": "F"
            }
        }
    },
    {
        "firstName": "Danilo",
        "lastName": "Gallinari",
        "teamId": "1",
        "yearsPro": "11",
        "collegeName": "Olimpia Milano",
        "country": "Italy",
        "playerId": "181",
        "dateOfBirth": "1988-08-08",
        "affiliation": "Olimpia Milano/Italy",
        "startNba": "2008",
        "heightInMeters": "2.08",
        "weightInKilograms": "105.7",
        "leagues": {
            "standard": {
                "jersey": "8",
                "active": "1",
                "pos": "F"
            }
        }
    },
    {
        "firstName": "Solomon",
        "lastName": "Hill",
        "teamId": "1",
        "yearsPro": "7",
        "collegeName": "Arizona",
        "country": "USA",
        "playerId": "239",
        "dateOfBirth": "1991-03-18",
        "affiliation": "Arizona/USA",
        "startNba": "2013",
        "heightInMeters": "1.98",
        "weightInKilograms": "102.5",
        "leagues": {
            "standard": {
                "jersey": "18",
                "active": "1",
                "pos": "F"
            }
        }
    },
    {
        "firstName": "Kirk",
        "lastName": "Hinrich",
        "teamId": "1",
        "yearsPro": "12",
        "collegeName": "Kansas",
        "country": "USA",
        "playerId": "241",
        "dateOfBirth": "1981-01-02",
        "affiliation": "",
        "startNba": "2003",
        "heightInMeters": "1.93",
        "weightInKilograms": "86.2",
        "leagues": {
            "standard": {
                "jersey": "12",
                "active": "",
                "pos": "G"
            }
        }
    },
    {
        "firstName": "Lamar",
        "lastName": "Patterson",
        "teamId": "1",
        "yearsPro": "0",
        "collegeName": "Pittsburgh",
        "country": " ",
        "playerId": "413",
        "dateOfBirth": "1991-08-12",
        "affiliation": "",
        "startNba": "2015",
        "heightInMeters": "1.96",
        "weightInKilograms": "102.1",
        "leagues": {
            "standard": {
                "jersey": "13",
                "active": "",
                "pos": "G-F"
            }
        }
    },
    {
        "firstName": "Skylar",
        "lastName": "Mays",
        "teamId": "1",
        "yearsPro": "0",
        "collegeName": "Louisiana State",
        "country": "USA",
        "playerId": "2620",
        "dateOfBirth": "1997-09-05",
        "affiliation": "Louisiana State/USA",
        "startNba": "2020",
        "heightInMeters": "1.93",
        "weightInKilograms": "93.0",
        "leagues": {
            "standard": {
                "jersey": "4",
                "active": "1",
                "pos": "G"
            }
        }
    },
    {
        "firstName": "Onyeka",
        "lastName": "Okongwu",
        "teamId": "1",
        "yearsPro": "0",
        "collegeName": "Southern California",
        "country": "USA",
        "playerId": "2629",
        "dateOfBirth": "2000-12-11",
        "affiliation": "Southern California/USA",
        "startNba": "2020",
        "heightInMeters": "2.03",
        "weightInKilograms": "106.6",
        "leagues": {
            "standard": {
                "jersey": "17",
                "active": "1",
                "pos": "F-C"
            }
        }
    },
    {
        "firstName": "Augusto",
        "lastName": "Binelli",
        "teamId": "1",
        "yearsPro": "0",
        "collegeName": "",
        "country": "",
        "playerId": "2693",
        "dateOfBirth": "",
        "affiliation": "",
        "startNba": "0",
        "heightInMeters": "",
        "weightInKilograms": "",
        "leagues": {
            "standard": {
                "jersey": "",
                "active": "1",
                "pos": "C"
            }
        }
    },
    {
        "firstName": "Alain",
        "lastName": "Digbeau",
        "teamId": "1",
        "yearsPro": "0",
        "collegeName": "",
        "country": "",
        "playerId": "2700",
        "dateOfBirth": "",
        "affiliation": "",
        "startNba": "0",
        "heightInMeters": "",
        "weightInKilograms": "",
        "leagues": {
            "standard": {
                "jersey": "",
                "active": "1",
                "pos": "G"
            }
        }
    },
    {
        "firstName": "Marcus",
        "lastName": "Eriksson",
        "teamId": "1",
        "yearsPro": "0",
        "collegeName": "",
        "country": "",
        "playerId": "2708",
        "dateOfBirth": "",
        "affiliation": "",
        "startNba": "0",
        "heightInMeters": "",
        "weightInKilograms": "",
        "leagues": {
            "standard": {
                "jersey": "",
                "active": "1",
                "pos": "F"
            }
        }
    },
];

export const arregloTeam = [
    {
        "city": "Atlanta",
        "fullName": "Atlanta Hawks",
        "teamId": "1",
        "nickname": "Hawks",
        // "logo": "",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png",
        "shortName": "ATL",
        "allStar": "0",
        "nbaFranchise": "1",
        "leagues": {
            "standard": {
                "confName": "EAST",
                "divName": "Southeast"
            },
            "vegas": {
                "confName": "summer",
                "divName": ""
            },
            "utah": {
                "confName": "Utah",
                "divName": ""
            }
        }
    }
];