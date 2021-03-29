import React, { Fragment, useContext } from "react";
import { PlayersContext } from "./../../contexts/PlayersContext";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "./../../components/Common/ProgressBar/ProgressBar.component";
import CollectionInfo from "./../../components/Collection/CollectionInfo/CollectionInfo.component";
import Player from "./../../components/Players/Player/Player.component";

const TeamsDetail = () => {
  const { doneFetch, team, doneFetchPlayers, players } = useContext(PlayersContext);
  return (
    <Fragment>
      {doneFetch && doneFetchPlayers ? (
        <Fragment>
          <CollectionInfo item={team} />
          <Grid container spacing={3}>
            <Player players={players} />
          </Grid>
        </Fragment>
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

TeamsDetail.displayName = "TeamsDetail";

export default TeamsDetail;
