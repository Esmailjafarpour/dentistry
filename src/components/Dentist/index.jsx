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
          <Avatar alt="Travis Howard" src={require(`../../images/dentist2.png`)} />
        </ListItemAvatar>

        <ListItemText
          className="ListItemText"
          primary="Dr. jafarpour"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Nader jafarpour
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />

      </ListItem>

      <ListItem className="item-dentist"  alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={require(`../../images/dentist3.png`)} />
        </ListItemAvatar>

        <ListItemText
          className="ListItemText"
          primary="Dr. Amirheydari"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                AliReza Amirheydari
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />

      </ListItem>

      <ListItem className="item-dentist" alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={require(`../../images/dentist4.png`)} />
        </ListItemAvatar>

        <ListItemText
          className="ListItemText"
          primary="Dr. Yazdampanah"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'  }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Farzad Yazdampanah
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />

      </ListItem>

      <ListItem className="item-dentist" alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Eng" src={require(`../../images/dentist1.png`)} />
        </ListItemAvatar>

        <ListItemText
          className="ListItemText"
          primary="Dr. Poorfar"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Poorfar
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />

      </ListItem>

      <ListItem className="item-dentist" alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={require(`../../images/dentist5.png`)}/>
        </ListItemAvatar>

        <ListItemText
          className="ListItemText"
          primary="Dr. Abasirad"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Shahab Abasirad
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />

      </ListItem>

      <ListItem className="item-dentist" alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={require(`../../images/dentist6.png`)} />
        </ListItemAvatar>

        <ListItemText
          className="ListItemText"
          primary="Dr. AhmadPour"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Mehrdad AhmadPour
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />

      </ListItem>


      <ListItem className="item-dentist" alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={require(`../../images/dentist7.png`)} />
        </ListItemAvatar>

        <ListItemText
          className="ListItemText"
          primary="Dr. pourjamfar"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ehsan pourjamfar
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />

      </ListItem>

      <ListItem className="item-dentist" alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={require(`../../images/dentist8.png`)} />
        </ListItemAvatar>

        <ListItemText
          className="ListItemText"
          primary="Dr. Amiri"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Mehdi Amiri
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