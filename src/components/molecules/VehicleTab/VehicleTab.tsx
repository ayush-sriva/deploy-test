import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Divider,
  Stack,
  Button
} from '@mui/material';
import theme from '../../../theme/index';
import Ola from '../../../assets/icons/ola.svg';
import Rapido from '../../../assets/icons/rapido.svg';
import Uber from '../../../assets/icons/uber.svg';
import TransportListItem  from '../transportListItem/index';
import mapImage from '../../../assets/icons/mapview.svg';
import Bus from '../../../assets/icons/bus.svg'
import Car from '../../../assets/icons/car.svg'
import Train from '../../../assets/icons/train.svg'
import Bike from '../../../assets/icons/bike.svg'
import Tab from "../../molecules/tabs/index"
import Icon from "../../atoms/icon/index"
import selectedbus from "../../../assets/icons/SelectedBus.svg";
import selectedcar from "../../../assets/icons/selectedCar.svg";
import {Circle} from '@mui/icons-material';
import {VEHICLE_TAB}  from '../../utils/constant';
const Transport= [
  { icon: Ola, cname: 'Ola', price: '45' },
  { icon: Rapido, cname: 'Ola', price: '45' },
  { icon: Uber, cname: 'Ola', price: '45' }
];
const VehicleTab: React.FC = () => {
  const cabTime = {
    fontSize: '14px',
    color: theme.palette.text.secondary,
  };
  const ETAStyles = {
    paddingRight: '0',
    paddingLeft: '0',
  };
  const tabs=[
    {
      value: 0,
      label: "",
      icon: <Icon src={Bike} />,
      disabled: true
    },
    {
      value: 1,
      label: "",
      icon: <Icon src={Bus} />,
      alticon: <Icon src={selectedbus} />
    },
    {
      value: 2,
      label: "",
      icon: <Icon src={Car} />,
      alticon: <Icon src={selectedcar} />
    },
    {
      value: 3,
      label: "",
      icon: <Icon src={Train} />,
      disabled: true
    },
  ]
  const [value, setValue] = useState(1);

  const handleClick = (val: any) => {
    setValue(val);
  };
  return (
    <div data-testid="vehicleTab">
      <Stack direction={'row'}>
      <Tab tabs={tabs} stateHandler={handleClick} />
      </Stack>
      <Divider></Divider>
      <Typography paddingTop={'2%'} variant="body2" color="black">
        {' '}
        {VEHICLE_TAB.METRO_TEXT}
      </Typography>
      <List component={Stack} direction={'row'}>
        <ListItem style={ETAStyles}>
          <Typography style={cabTime}> ₹{'100'}</Typography>
          <Circle sx={{ fontSize: '4px' }} htmlColor="grey" />
        </ListItem>
        <ListItem style={{ ...ETAStyles, ...cabTime }}>
          <Typography style={cabTime}> {'25kms'}</Typography>
        </ListItem>
        <ListItem style={{ ...ETAStyles }}>
          <ListItemIcon>
            <Typography style={cabTime}>{'1hr 20mins'}</Typography>
          </ListItemIcon>
        </ListItem>
      </List>
      {value==1 && (
        <div data-testid="busTab">
          <div>
            <img src={mapImage} style={{ maxWidth: '95%' }} alt="Google-map" />
          </div>
          <Button variant="text">
            <Typography variant="caption" color="#30A193">
              {' '}
              {VEHICLE_TAB.GOOGLE_MAPS}
            </Typography>
          </Button>
        </div>
      )}
      {value==2 && (
        <>
        {
        Transport.map(({icon,cname,price}) => (
          <TransportListItem icon={icon} cname={cname} price={price} /> 
        ))
        }
        </>      
      )}
    </div>
  );
};

export default VehicleTab;
