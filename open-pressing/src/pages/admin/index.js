import { Grid,Button } from "@mui/material";
import BlogCard from "../../components/dashboard/BlogCard";
import DailyActivity from "../../components/dashboard/DailyActivity";
import ProductPerfomance from "../../components/dashboard/ProductPerfomance";
import SalesOverview from "../../components/dashboard/SalesOverview";
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


    // <Stack sx={{ width: '100%' }} spacing={2}>
    //   <Alert severity="error">This is an error alert — check it out!</Alert>
    //   <Alert severity="warning">This is a warning alert — check it out!</Alert>
    //   <Alert severity="info">This is an info alert — check it out!</Alert>
    //   <Alert severity="success">Bienvenu</Alert>
    // </Stack>


export default function Index() {
  const [open, setOpen] = React.useState(true);
  return (
    <Grid container spacing={0}>
       <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 5 }}
        >
          Bienvenu !
        </Alert>
      </Collapse>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerfomance />
      </Grid>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
    </Grid>
  );
}
