import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarRetailer from '../../files/NavbarRetailer';
import SidebarRetailer from '../../files/SidebarRetailer';

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  
  
  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
  ];
  

 export default function BookingDetails() {

  ///////////////////////////////////////Table pagination//////////////////////////////
  const [page, setPage] = useState(0);
    
  const [rowsPerPage, setRowsPerPage] = useState(10);
 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
 
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    return (
      <>
      <NavbarRetailer/>
      <div style={{display:"flex"}}>
   
      <SidebarRetailer/> 
        <div style={{marginTop:"1vw",width:"65vw",marginLeft:"10vw"}}>
        <h3 style={{textAlign:"center",fontWeight:"normal",marginTop:"1vw"}}> Account Information </h3>
 
        <Paper style={{marginTop:'2vw'}} sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer  sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                
                  <TableCell align="center"> Product id </TableCell>
                  <TableCell align="center"> Product name</TableCell>
                  <TableCell align="center"> Quantity</TableCell>
                  <TableCell align="center"> Date </TableCell>
                  <TableCell align="center"> Status</TableCell>
                  <TableCell align="center"> Customer id</TableCell>
                  <TableCell align="center"> Customer name </TableCell>
                  <TableCell align="center"> Customer address </TableCell>
                 

                  
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row,index) => {
                console.log("index",index)
                  const {station_id, station_name, city, state, pin_code} = row
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell  align="center">
                     {station_id}
                  </TableCell>
                  <TableCell  align="center">
                  {station_name}
               </TableCell>
               <TableCell  align="center">
                  {station_name}
               </TableCell>
               <TableCell  align="center">
               {station_name}
            </TableCell>
        
      
        
       <TableCell align="center">
  
      <Container>
      <Row>
        <Col  sm  style={{margin:"0px",padding:"0px"}}><button style={{width:"2.5vw"}}  className='editbutton btn btn-primary btn-sm'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg>
        </button> 
        </Col>
      
      </Row>
    </Container>
      
                  
      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>   
        </div>
        </div>
        </>
    );
}

