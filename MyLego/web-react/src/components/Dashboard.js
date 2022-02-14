import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import RatingsChart from './RatingsChart'
import UserCount from './UserCount'
import RecentReviews from './RecentReviews'
export default function Dashboard() {
  const theme = useTheme()

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    }
  }))
  const classes = useStyles(theme)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

/*  const neo4j = require("neo4j-driver");
  const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "2623"), {
     encrypted: 'ENCRYPTION_OFF'
});

  const query = `
  MATCH (n) return Count(n) AS num
  `;

//const params = { category: "Dairy Products" };

const session = driver.session({ database: "neo4j" });

session
    .run(query)
    .then((result) => {
        result.records.forEach((record) => {
            console.log(record);
        });
        session.close();
        driver.close();
    })
    .catch((error) => {
        console.error(error);
    });*/


  return (
    <React.Fragment>
      <Grid container spacing={4}>
        {/* Ratings Chart */}
        <Grid item xs={12} md={8} lg={7}>
          <Paper className={fixedHeightPaper}>
            <RatingsChart />
          </Paper>
        </Grid>
        {/* User Count */}
        <Grid item xs={12} md={4} lg={5}>
          <Paper className={fixedHeightPaper}>
            <UserCount />
          </Paper>
        </Grid>
        {/* Recent Reviews */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <RecentReviews />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
