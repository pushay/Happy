import React, {useState} from 'react';
import {TimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

function DairyPickTime(props){

    const [hourDate, setHourDate] = useState();

    const materialTheme = createMuiTheme({
        overrides:{
            MuiPickersToolbar: {
                toolbar: {
                    backgroundColor: '#f8a706 !important'
                }
            },
            MuiInput:{
                underline:{
                    borderBottom:'none'
                }
            },
            MuiPickersClock:{
               pin:{
                   backgroundColor:'#f8a706'
               }
            },
            MuiInput: {
                underline: {
                    '&&:after': {
                        borderColor: '#f8a706'
                    }
                }
            },
            MuiPickersClockPointer:{
                pointer:{
                    backgroundColor:'#f8a706'
                },
                thumb: {
                    borderColor: '#f8a706'
                }
            ,
            MuiPickersDay:{
                daySelected:{
                    backgroundColor:'#f8a706',
                },
                current:{
                    backgroundColor:'#f8a706',
                }
        }}}
    })

    return(
        <div className="dairyPickTime">
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <ThemeProvider theme={materialTheme}>
                    <TimePicker variant="inline" label="choose time" value={hourDate} onChange={(e) => {setHourDate(e); props.getData(e, 'time')}} />
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default DairyPickTime