/**
 * @author Abhishek Bhemisetty <abhishek.bhemisetty@zemosolabs.com>
 */

import Grid from '@mui/material/Grid';
import ProgressItem from '../../molecules/ProgressItem';
import DoneIcon from '@mui/icons-material/Done';
import { styled } from '@mui/material';

interface TabProps {
  pageId?: number;
}

interface ProgressProps {
  value: string | React.ReactNode;
  label: string;
  status: string;
}

const TabItem = styled(Grid)({
  marginRight: '15px',
});

const TabPanel: React.FC<TabProps> = ({ pageId }) => {
  const Tabdata: Array<ProgressProps> = [
    {
      value: '1',
      label: 'Your Location',
      status: 'Current',
    },
    {
      value: '2',
      label: 'Job Location',
      status: 'Future',
    },
    {
      value: '3',
      label: 'Your Skills',
      status: 'Future',
    },
  ];

  if (pageId === 1) {
    Tabdata[0].value = <DoneIcon />;
    Tabdata[1].status = 'Current';
  } else if (pageId === 2) {
    Tabdata[0].value = <DoneIcon />;
    Tabdata[1].status = 'Current';
    Tabdata[1].value = <DoneIcon />;
    Tabdata[2].status = 'Current';
  } else {
    Tabdata[1].status = 'Future';
    Tabdata[1].value = '2';
    Tabdata[2].status = 'Future';
    Tabdata[2].value = '3';
  }

  const Tabs = () => {
    return Tabdata.map((tab: ProgressProps, id: number) => {
      return (
        <TabItem item key={id}>
          <ProgressItem value={tab.value} label={tab.label} status={tab.status}></ProgressItem>
        </TabItem>
      );
    });
  };

  return (
    <Grid container spacing={2} direction='row'>
      {Tabs()}
    </Grid>
  );
};

export default TabPanel;
