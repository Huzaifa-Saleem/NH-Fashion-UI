import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../Tabs/tab.scss";
import Card from '../../Components/Card/index';
import data from '../../Components/Card/data';

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Best Sellers" {...a11yProps(0)} />
          <Tab label="New arrivals" {...a11yProps(1)} />
          <Tab label="Hot Sales" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <section  className='cardss'>
          {data.map(function value(val){
           return (<div className="container">
            <Card 
            img={val.img} 
            title={val.title} 
            price={val.price}
            openSpots={val.openSpots}
            sale={val.sale}
            version={val.version} /></div>
          );
        }
          )}
        </section>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <section  className='cardss'>
          {data.map(function value(val){
           return (<div className="container">
            <Card 
            img={val.img} 
            title={val.title} 
            price={val.price}
            openSpots={val.openSpots}
            sale={val.sale}
            version={val.version} /></div>
          );
        }
          )}
        </section>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <section  className='cardss'>
          {data.map(function value(val){
           return (<div className="container">
            <Card 
            img={val.img} 
            title={val.title} 
            price={val.price}
            openSpots={val.openSpots}
            sale={val.sale}
            version={val.version} /></div>
          );
        }
          )}
        </section>
      </TabPanel>
    </Box>
  );
}
