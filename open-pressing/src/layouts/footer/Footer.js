import React from "react";
import { Box, Typography } from "@mui/material";
import Copyright from "@/components/Copyright";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Copyright />
    </Box>
  );
};

export default Footer;
