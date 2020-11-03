import React, { useState, useEffect } from 'react';
import {DatePicker} from '@material-ui/pickers';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

function DairyPickCalendar(props){

    const [date, setDate] = useState()

    const materialTheme = createMuiTheme({
        overrides:{
            MuiPickersToolbar: {
                toolbar: {
                    backgroundColor: '#f8a706'
                }
            },
            MuiInput: {
                underline: {
                    '&&:after': {
                        borderColor: '#f8a706'
                    }
                }
            },
            MuiPickersDay:{
                daySelected:{
                    backgroundColor:'#f8a706',
                    '&&:hover': {
                        backgroundColor: '#f8a706'
                    }
                },
                current:{
                    backgroundColor:'none'
                }
            }
            }
        })

    return(
        <div className="calendar" >
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <ThemeProvider theme={materialTheme}>
                    <DatePicker openTo="date" format="dd/MM/yyyy" label="choose day"
                    views={["year", "month", "date"]} value={date} name="day" onChange={(e) => {setDate(e); props.getData(e, 'calendar')}}/>
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default DairyPickCalendar