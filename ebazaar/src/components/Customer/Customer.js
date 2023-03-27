import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';




function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  
  
  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
  ];
function Customer() {

///////////////////////Table Pagination//////////////////////////////
const [page, setPage] = useState(0);
    
const [rowsPerPage, setRowsPerPage] = useState(10);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

////////////////////////////////Modal Add user/////////////////////////////////////////////
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
<>


        <div style={{marginLeft:"8vw",width:"70vw"}}>
       
       <h3 style={{textAlign:"center",marginTop:"2vw"}}>Customer information table </h3>
        <Paper style={{marginTop:'2vw'}} sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer  sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                
                  <TableCell align="center"> User Id </TableCell>
                  <TableCell align="center"> Name </TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center"> Role</TableCell>
                  <TableCell align="center"> Action </TableCell>
                  <TableCell align="center"> Action </TableCell>
                  
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
               {city}
            </TableCell>
            <TableCell  align="center">
            {state}
         </TableCell>
         <TableCell align="center">
         <FormControlLabel control={<Switch defaultChecked />} label="Active" />
       
         
      </TableCell>
      <TableCell align="center">
  
   
      
                  
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
        </>
    );
}

export default Customer;