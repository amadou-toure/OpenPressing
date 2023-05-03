import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import user1 from "../../assets/images/backgrounds/u2.jpg";

import getEnseigne from "@/pages/api/getEnseigne";


const customCard = (props) => {
  const enseigne = props.enseigne
  return (
    
      typeof enseigne !== "undefined" ?
        <Grid container>
          <Grid
            item
            lg={4}
            sx={{
              display: "flex",
              alignItems: "stretch",
              width:"100%"
            }}
          >
            <Card
              sx={{
                p: 0,
                width: "100%",
              }}
            >
              <Image src={user1} alt="img" />
              <CardContent
                sx={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "h4.fontSize",
                    fontWeight: "500",
                  }}
                >
                  {enseigne.nom_enseigne}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: "15px",
                  }}
                  color='primary'
                >
                  modifier
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid> : <h1>aucun pressing</h1>

  );
};

export default customCard;
