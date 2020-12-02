import 'bootstrap/dist/css/bootstrap.min.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'

import './App.css';
import SubApp1 from './components/SubApp1';
import SubApp2 from './components/SubApp2';

function TabApps() {
  return (
    <Tabs className="tab-height90">
      <TabList>
        <Tab>SubApp1</Tab>
        <Tab>SubApp2</Tab>
      </TabList>

      {/* <TabPanel className="tabpanel-height100"> */}
      <TabPanel>
        <SubApp1></SubApp1>
      </TabPanel>
      {/* <TabPanel className="tabpanel-height100"> */}
      <TabPanel>
        <SubApp2></SubApp2>
      </TabPanel>
    </Tabs>
  )
}

function App() {
  return (
    <div className="App">
      {/* <SubApp1></SubApp1> */}
      <TabApps></TabApps>
    </div>
  );
}

export default App;
