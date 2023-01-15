import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './style.css';

const Dentist = () => {

  return (

    <List className="list" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

      <ListItem className="item-dentist" alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="../../images/dentist1.png" />
        </ListItemAvatar>

        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />

      </ListItem>

      <ListItem className="item-dentist" alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="../../images/dentist2.png" />
        </ListItemAvatar>

        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />

      </ListItem>

      <ListItem className="item-dentist"  alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="../../images/dentist3.png" />
        </ListItemAvatar>

        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />

      </ListItem>

      <ListItem className="item-dentist" alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="../../images/dentist4.png" />
        </ListItemAvatar>

        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'  }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />

      </ListItem>

      <ListItem className="item-dentist" alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="../../images/dentist5.png" />
        </ListItemAvatar>

        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />

      </ListItem>

      <ListItem className="item-dentist" alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="../../images/dentist6.png" />
        </ListItemAvatar>

        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />

      </ListItem>


      <ListItem className="item-dentist" alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="../../images/dentist7.png" />
        </ListItemAvatar>

        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />

      </ListItem>

      <ListItem className="item-dentist" alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="../../images/dentist8.png" />
        </ListItemAvatar>

        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />

      </ListItem>

    </List>

  );

}

export default Dentist;