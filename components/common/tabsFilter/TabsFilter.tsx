import { type FC, type SyntheticEvent, useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useThemeMode } from '../../../hooks/use-theme-mode';

interface TabsFilterProps {
  data: Array<string>;
}

const TabsFilter: FC<TabsFilterProps> = ({ data }) => {
  const [value, setValue] = useState(0);

  const theme = useThemeMode();
  const smallScreens = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {smallScreens ? (
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
      ) : (
        <Tabs centered value={value} onChange={handleChange} aria-label="tabs filter">
          {data.map((tabItem, index) => (
            <Tab label={tabItem} key={index} />
          ))}
        </Tabs>
      )}
    </>
  );
};

export default TabsFilter;
