import React from 'react'
import { useQuery, gql } from '@apollo/client'

import Title from './Title'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'


const GET_USER = gql`
{
  ItemList{
      image
      themeName

    }
}
`

export default function UserList() {
  const { loading, error, data } = useQuery(GET_USER)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Item List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Item Image</TableCell>
            <TableCell> Theme Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.ItemList.map((row) => (
            <TableRow key={row.id}>
            <TableCell><img src={row.image} height="60" width="60"/></TableCell>
            <TableCell>{row.themeName}</TableCell>



            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
