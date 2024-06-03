import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useQuery } from 'react-query';

const fetchCompletedSaleOrders = async () => {
  return [
    {
      id: 2,
      customer_id: 11909,
      customer_profile: {
        id: 11909,
        name: "John Doe",
        email: "john_doe@example.com",
        location_name: "Delhi, India",
      },
      invoice_no: "Invoice-54321",
      invoice_date: new Date(),
      paid: true,
      items: [
        {
          sku_id: 221,
          price: 15,
          quantity: 10,
        },
      ],
    },
  ];
};

const CompletedSaleOrders = () => {
  const { data, isLoading, error } = useQuery('completedSaleOrders', fetchCompletedSaleOrders);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading completed sale orders</div>;

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>Customer Name</Th>
            <Th>Invoice No</Th>
            <Th>Invoice Date</Th>
            <Th>Paid</Th>
            <Th>Items</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(order => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customer_profile.name}</Td>
              <Td>{order.invoice_no}</Td>
              <Td>{new Date(order.invoice_date).toLocaleDateString()}</Td>
              <Td>{order.paid ? 'Yes' : 'No'}</Td>
              <Td>
                <ul>
                  {order.items.map(item => (
                    <li key={item.sku_id}>
                      SKU ID: {item.sku_id}, Price: {item.price}, Quantity: {item.quantity}
                    </li>
                  ))}
                </ul>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CompletedSaleOrders;



/*
import React from 'react';
import { Box } from '@chakra-ui/react';
import { useQuery } from 'react-query';

const fetchCompletedSaleOrders = async () => {
  return [
    {
      id: 2,
      customer_id: 11909,
      customer_profile: {
        id: 11909,
        name: "John Doe",
        email: "john_doe@example.com",
        location_name: "Delhi, India",
      },
      invoice_no: "Invoice-54321",
      invoice_date: new Date(),
      paid: true,
      items: [
        {
          sku_id: 221,
          price: 15,
          quantity: 10,
        },
      ],
    },
  ];
};

const CompletedSaleOrders = () => {
  const { data, isLoading, error } = useQuery('completedSaleOrders', fetchCompletedSaleOrders);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading completed sale orders</div>;

  return (
    <Box>
      {data.map(order => (
        <Box key={order.id} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
          <Box>
            <strong>Customer:</strong> {order.customer_profile.name} <br />
            <strong>Invoice No:</strong> {order.invoice_no} <br />
            <strong>Invoice Date:</strong> {new Date(order.invoice_date).toLocaleDateString()} <br />
            <strong>Paid:</strong> {order.paid ? 'Yes' : 'No'} <br />
            <strong>Items:</strong>
            <ul>
              {order.items.map(item => (
                <li key={item.sku_id}>
                  SKU ID: {item.sku_id}, Price: {item.price}, Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CompletedSaleOrders;

*/
