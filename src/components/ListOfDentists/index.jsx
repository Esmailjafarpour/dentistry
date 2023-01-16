import './style.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dentist from '../Dentist';

const ListOfDentists = () => {

    return(

        <Box className="Box-List-Dentist">

                <Box className="List-Dentists">

                        <Typography className="title-secondpage" variant="h6" component="h2">
                        دندان پزشک مورد نظر خود را انتخاب کنید               
                        </Typography>

                        <Dentist/>
                </Box>
           
        </Box>

)}

export default ListOfDentists;
