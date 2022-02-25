import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useQuery, gql } from '@apollo/client'
import Title from './Title'
//import moment from 'moment'

const GET_THEMES_QUERY = gql`
  {

  PackagingList{
    name
    price
    image
  }

  }


`

export default function RecentReviews() {
  const { loading, error, data } = useQuery(GET_THEMES_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Item List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Item Name</TableCell>
            <TableCell>Item USD Price</TableCell>
            <TableCell> Item Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.PackagingList.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
            <TableCell><img src={row.image} height="60" width="60"/></TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
