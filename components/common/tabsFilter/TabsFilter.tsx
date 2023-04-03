import { type FC, type SyntheticEvent, useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabsFilterProps {
  data: Array<string>;
}

const TabsFilter: FC<TabsFilterProps> = ({ data }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs filter"
          variant="scrollable"
          scrollButtons="auto"
        >
          {data.map((tabItem, index) => (
            <Tab label={tabItem} key={index} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Tabs centered value={value} onChange={handleChange} aria-label="tabs filter">
          {data.map((tabItem, index) => (
            <Tab label={tabItem} key={index} />
          ))}
        </Tabs>
      </Box>
    </>
  );
};

export default TabsFilter;
