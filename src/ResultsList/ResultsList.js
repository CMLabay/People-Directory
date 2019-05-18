import React, { Component } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import './ResultsList.css'
import ResultItem from '../ResultItem/ResultItem'

let id = 0;
function createData(name, phone, email) {
  id += 1;
  return { id, name, phone, email };
}

export default class ResultsList extends Component{
    render(){
        //must pass in returned data from API
        const {name, phone, email, resNum } = this.props;
        let rows = [];
        for(let i = 0; i<resNum;i++){
            if(phone[i] == null | phone[i] == ''){
                phone[i] = '--';
            }
            rows[i] = createData(name[i], phone[i], email[i])
        }
        return(
            <Table>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Phone/Extension</Th>
                        <Th>Email</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {rows.map(row => (
                        <Tr key={row.id}>
                            <Td>{row.name}</Td>
                            <Td>{row.phone}</Td>
                            <Td>
                                <a href={"mailto:"+row.email}>{row.email}</a></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        )
    }
}