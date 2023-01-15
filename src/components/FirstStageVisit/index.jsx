import './style.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FirstStageVisit =  () => {
    return (
            <Box className="visit-Box">

                <Box className="Initial-visit">
                    <Typography variant="h6" component="h2">
                        نوبت اولیه
                    </Typography>
                </Box>
                <Box className="Next-visit">
                    <Typography variant="h6" component="h2">
                        نوبت بعدی
                    </Typography>
                </Box>
                
            </Box>
    );
}

export default FirstStageVisit;