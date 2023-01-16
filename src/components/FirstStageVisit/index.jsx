import './style.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";



const FirstStageVisit =  () => {

    const onListOfDentist = () => (
       
        <NavLink to="/ListOfDentists"/> 
    )
       
    
    return (
            <Box className="visit-Box">

                <Box 
                    className="Initial-visit"
                    onClick={()=>{
                        onListOfDentist()
                    }}
                >
                     

                    <Typography 
                        variant="h6"    
                        component="h6"
                        className="visit-title"
                        >                    
                      ویزیت                    
                    </Typography>
                </Box>
                <Box className="Next-visit">
                    <Typography className="visit-title"  variant="h6" component="h2">
                        نوبت بعدی
                    </Typography>
                </Box>
                
            </Box>
    );
}

export default FirstStageVisit;