import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'
import NumberFormat from "react-number-format";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  navLink: {
    textDecoration: 'none',
  },
})

const GET_AVG_QUERY = gql`
{
  EURprices
}


`

export default function Deposits() {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_AVG_QUERY)
  if (error) return <p>Error</p>
  return (
    <React.Fragment>
      <Title>Average Price of Theme in year 2015</Title>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data.EURprices}


      </Typography>

      <Typography color="textSecondary" className={classes.depositContext}>
        EUR Prices
      </Typography>
    </React.Fragment>
  )
}
