import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import BaseCard from "./baseCard/BaseCard";
import getEnseigne from "@/pages/api/getEnseigne";





const enseigneTable = () => {
const [enseigne,setEnseigne]=useState()
getEnseigne([enseigne,setEnseigne]);
if (enseigne!==null){
  console.log(enseigne)
}
  return (
    <BaseCard title="Product Perfomance">
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Id_enseigne
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Id proprietaire
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Nom
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Logo
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {enseigne !== null? enseigne.map((enseigne) => (
            <TableRow key={enseigne.id_enseigne}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {enseigne.id_enseigne}
                </Typography>
              </TableCell>
              <TableCell>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {enseigne.id_proprietaire}
                    </Typography>                    
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {enseigne.nom_enseigne}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {enseigne.logo}
                </Typography>
              </TableCell>
            </TableRow>
          )):console.log('rien comme enseigne')}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default enseigneTable;
