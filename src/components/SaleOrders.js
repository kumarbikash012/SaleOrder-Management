import React, { useState } from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Button, Heading } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { useForm, useFieldArray } from 'react-hook-form';
import { getActiveSaleOrders, getCompletedSaleOrders } from '../mocks/mocks';
import SaleOrderForm from './SaleOrderForm';
import ActiveSaleOrders from '../pages/ActiveSaleOrders';
import CompletedSaleOrders from '../pages/CompletedSaleOrders';

const SaleOrders = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { handleSubmit, control } = useForm();
  const { append } = useFieldArray({
    control,
    name: 'orders',
  });

  const { data: activeSaleOrders } = useQuery('activeSaleOrders', getActiveSaleOrders);
  const { data: completedSaleOrders } = useQuery('completedSaleOrders', getCompletedSaleOrders);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
/*
  const onSubmit = (data) => {
    console.log(data);
  };
*/
  return (
    <Box p={4}>
      <Tabs index={tabIndex} onChange={handleTabsChange} isFitted variant="enclosed">
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ActiveSaleOrders orders={activeSaleOrders} />
          </TabPanel>
          <TabPanel>
            <CompletedSaleOrders orders={completedSaleOrders} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SaleOrders;
