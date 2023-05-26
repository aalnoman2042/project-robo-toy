import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCard from '../tabcard/TabCard';


const AllTabs = () => {
  const [activeTab, setActiveTab] = useState('Educational');
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://robo-kit-toy-server-aalnoman2042.vercel.app/alltoys/${activeTab}`
        );
        setToys(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

    return (
       <>
       <h2 className='text-5xl text-center my-9'>Shop By Category!!</h2>
        <div className='flex items-center justify-center'>
          
          <Tabs data-aos="zoom-out-right">
 <TabList>
   <Tab>
   <button
       className={activeTab === 'Educational' ? 'active btn btn-active btn-ghost btn-lg' : 'btn btn-outline btn-sm'}
       onClick={() => handleTabClick('Educational')}
     >
       Educational
     </button>

   </Tab>
   <Tab>
   <button
       className={activeTab === 'Art' ? 'active btn btn-active btn-ghost btn-lg' : 'btn btn-outline btn-sm'}
       onClick={() => handleTabClick('Art')}
     >
       Art
     </button>
   </Tab>
   <Tab>
   <button
       className={activeTab === 'Construction' ? 'active btn btn-active btn-ghost btn-lg' : 'btn btn-outline btn-sm'}
       onClick={() => handleTabClick('Construction')}
     >
       Construction
     </button>
   </Tab>
 </TabList>

 <TabPanel>
  <div className='items-center gap-3 my-5 md:flex'>
 {
   toys.slice(0,3).map(toy => <TabCard key={toy._id} toy={toy}></TabCard>)
 }
  </div>
 </TabPanel>
 <TabPanel>
 <div className='items-center gap-3 my-5 md:flex'>
 {
   toys.slice(0,3).map(toy => <TabCard key={toy._id} toy={toy}></TabCard>)
 }
  </div>
 </TabPanel>
 <TabPanel>
 <div className='items-center gap-3 my-5 md:flex'>
 {
   toys.slice(0,3).map(toy => <TabCard key={toy._id} toy={toy}></TabCard>)
 }
  </div>
 </TabPanel>
</Tabs>
     </div>
       </>
    );
};

export default AllTabs;