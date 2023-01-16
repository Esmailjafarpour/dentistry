import './style.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
import Date from '../Date';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const appointment = () => {

    return (
        <Box className="Appointment">

            <Box className="Dentist-title">
                <Typography 
                    variant="h6"    
                    component="h6"
                >                    
                    دندانپزشک علی مصفا                  
                </Typography>
            </Box>

            <Box className="date">
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>تاریخ نوبت</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>

                </Accordion>
            </Box>

            <Box className="shift">
                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>صبح یا عصر</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
                
            <Box className="time">
                <Accordion className="Accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    <Typography>ساعت</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box> 
        
        </Box>
    );
}

export default appointment;





