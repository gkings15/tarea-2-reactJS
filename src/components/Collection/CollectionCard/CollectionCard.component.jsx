import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import "./CollectionCard.styles.scss";

const CollectionCard = ({ items, link }) => {
  return (
    <Fragment>
      {items.map((item) => {
        const { teamId, fullName, logo } = item;
        const imgSrc = logo
          ? logo
          : "https://i.ibb.co/tQMy0GC/page-not-found.png";
        return (
          <Grid item xs={12} sm={6} md={3} key={teamId}>
            <Link to={`/${link}/${teamId}`} className="collection-link">
              <Card
                style={{
                  backgroundColor: "#353535",
                  background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imgSrc}) center center/cover no-repeat`,
                }}
                className="collection-card"
              >
                <CardContent className="text-white">
                  <h2>{fullName}</h2>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Fragment>
  );
};

CollectionCard.displayName = "CollectionCard";

export default CollectionCard;
