import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'


const AttendanceTable =()=>{

    const Container = styled.div`
        width: 75%;
        border: 1px solid black; 
        h3{
            line-height: 1;
            font-weight: normal;
            margin-top: 5px;
            margin-left:1rem;
        }   
        hr{
            width: 50%;
        }
      
    `

    const useStyles = makeStyles({
        table: {
            minWidth: 650, 
        },
    });

    
        /*************** STATES ************************/ 
    const [attendanceArray, setAttendanceArray] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    function createData(name, time, date) {  
        return { name, time,date };
    }

   
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/get_attendance_table')
            .then(response => response.json())
            .then(response => {
                setAttendanceArray(response)
                console.log(attendanceArray)
                setIsLoaded(true)
            })
    },[isLoaded]);
    
    const attendanceCopy = attendanceArray.slice(-5);
    // console.log(attendanceCopy);
    
    const rows = attendanceCopy.map(row=> createData(`${row[0]}`,`${row[1]}`,`${row[2]}`));

    const classes = useStyles();

    return (
        <>
            <Container>
            {/* <h3>Katılım Kaydı</h3>
            <hr /> */}
            <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>Ad/ID</TableCell>
                    <TableCell align="center">Zaman</TableCell>
                    <TableCell align="right">Tarih</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="center">{row.time}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </Container>
        </>
    );
}

export default AttendanceTable;



     
    //**fetch the attendance records from the API and pass it to the createData function**//
    //**Map each CreateData function outputs to the rows array**//
    // const getData = ()=>{
    //     if(! isLoaded ){
    //         fetch('http://127.0.0.1:5000/get_attendance_table')
    //         .then(response => response.json())
    //         .then(response => {
    //             setAttendanceArray(response)
    //             console.log(attendanceArray)
    //             setIsLoaded(true)
    //         })
    //     }
    // }
   
    // getData();

    // const now =new Date();
    // const year = now.getFullYear();
    // const month = now.getMonth()+1;
    // const day = now.getDate();
    // const today = `${year}-${month}-${day}`;
    // // console.log(today);
    // let rows= attendanceArray.filter(entry=> entry[2]=== today)
    // .map((row)=> createData(`${row[0]}`,`${row[1]}`,`${row[2]}`));

