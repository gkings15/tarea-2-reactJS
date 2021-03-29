import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const CollectionInfo = ({ item }) => {
  const { fullName, logo, city, nickname, allStar, leagues } = item[0];
  const { confName } = leagues.standard;
  const clase = confName.toLowerCase().trim() === "west" ? "card_w" : "card_e";
  const imgSrc = logo
          ? logo
          : "https://i.ibb.co/tQMy0GC/page-not-found.png";
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <Card className={clase}>
            <div className="body text-white">
              <h1 className="text-center">{fullName}</h1>
              <p>{`City: ${city}`}</p>
              <p>{`NickName: ${nickname}`}</p>
              <p>{`AllStar: ${allStar}`}</p>
            </div>
          </Card>
        </Grid>
        <Grid item sm={12} md={6}>
          <div className="main-container">
            <img src={imgSrc} alt={fullName} width="50%" />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

CollectionInfo.displayName = "CollectionInfo";

export default CollectionInfo;
