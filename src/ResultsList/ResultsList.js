import React, { Component } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import './ResultsList.css'

let id = 0;
function createData(name, phone, title, email) {
  id += 1;
  return { id, name, phone, title, email };
}

export default class ResultsList extends Component{
    render(){
        //must pass in returned data from API
        const {resNum, res} = this.props;
        let rows = [];
        for(let i = 0; i<resNum;i++){
            if(res.phone[i] == null | res.phone[i] == ''){
                res.phone[i] = '--';
            }
            
            rows[i] = createData(res.name[i], res.phone[i], res.title[i], res.email[i])
        }
        return(
            <Table>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Position</Th>
                        <Th>Phone/Ext</Th>
                        <Th>Email</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {rows.map(row => (
                        <Tr key={row.id}
                            className={(row.id % 2 == 0 ? "shade" : "plain")}>
                            <Td>{row.name}</Td>
                            <Td>{row.title}</Td>
                            <Td>{row.phone}</Td>
                            <Td>
                                <a href={"mailto:"+row.email}>{row.email}</a>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        )
    }
}