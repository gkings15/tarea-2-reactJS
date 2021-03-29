import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./Player.styles.scss";

const Player = ({ players }) => {
  return (
    <Fragment>
      {players.map((player) => {
        const { firstName, playerId, lastName, heightInMeters,weightInKilograms,country } = player;
        const namePlayer = `${firstName} ${lastName}`
        return (
          <Grid key={playerId} item xs={12} sm={12} md={4}>
             {/* <Link to={`/games/details/${playerId}`} className="card-link" > */}
              <Card variant="outlined" className="card">
                <CardMedia
                  className="card-game-image"
                  image={"https://i.ibb.co/dW8nDj4/logo.jpg"}
                  title={namePlayer}
                />
                <CardContent className="card-game-content">
                  <div>
                    <h4 className="text-white">{namePlayer}</h4>
                    <p className="text-white">{`Height: ${heightInMeters ? heightInMeters : 'Not found'}`}</p>
                    <p className="text-white">{`Weight: ${weightInKilograms ? weightInKilograms : 'Not found'}`}</p>
                    <p className="text-white">{`Country: ${country ? country : 'Not found'}`}</p>
                  </div>
                  {/* <ul className="card-game-platforms">
                    {parent_platforms &&
                      parent_platforms.map((platform) => {
                        const { playerId, name } = platform.platform;
                        return (
                          <li key={playerId} className="card-game-platform">
                            <img
                              src={require(`./../../../assets/images/${playerId}.svg`)}
                              alt={name}
                              className="platform-logo"
                            />
                          </li>
                        );
                      })}
                  </ul> */}
                </CardContent>
              </Card>
            {/* </Link> */}
          </Grid>
        );
      })}
    </Fragment>
  );
};

Player.displayName = "Player";

export default Player;
