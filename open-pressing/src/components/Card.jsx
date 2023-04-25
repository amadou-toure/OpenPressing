import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import user1 from "../../assets/images/backgrounds/u2.jpg";

import getEnseigne from "@/pages/api/getEnseigne";


const customCard = () => {
  return (
    <Grid container>
      {getEnseigne().map((enseigne) => (
        <Grid
          key={enseigne.id_proprietaire}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
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
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default customCard;
