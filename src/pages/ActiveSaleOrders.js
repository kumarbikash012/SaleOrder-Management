import React, { useState } from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import SaleOrderForm from '../components/SaleOrderForm';

const fetchSaleOrders = async () => {
  return [
    {
      id: 1,
      customer_id: 11908,
      customer_profile: {
        id: 11908,
        name: "Ram",
        email: "jesus_christ@church.com",
        location_name: "Mumbai, Maharashtra, India",
      },
      invoice_no: "Invoice-12345",
      invoice_date: new Date(),
      paid: false,
      items: [
        {
          sku_id: 220,
          price: 12,
          quantity: 12,
        },
      ],
    },
    {
      id: 2,
      customer_id: 11909,
      customer_profile: {
        id: 11909,
        name: "kalculusGuy",
        email: "kalculus@gmail.com",
        location_name: "Santasi, Kumasi, Ghana",
      },
      invoice_no: "Invoice-12346",
      invoice_date: new Date(),
      paid: true,
      items: [
        {
          sku_id: 230,
          price: 22,
          quantity: 2,
        },
      ],
    },
    {
      id: 3,
      customer_id: 11910,
      customer_profile: {
        id: 11910,
        name: "Sarah",
        email: "Sara@gmail.com",
        location_name: "Santasi, Kumasi, Ghana",
      },
      invoice_no: "Invoice-12345",
      invoice_date: new Date(),
      paid: false,
      items: [
        {
          sku_id: 220,
          price: 12,
          quantity: 12,
        },
      ],
    },
    {
      id: 4,
      customer_id: 11911,
      customer_profile: {
        id: 11911,
        name: "TommyLee",
        email: "tomlee@gmail.com",
        location_name: "Santasi, Kumasi, Ghana",
      },
      invoice_no: "Invoice-12346",
      invoice_date: new Date(),
      paid: true,
      items: [
        {
          sku_id: 230,
          price: 22,
          quantity: 2,
        },
      ],
    },
  ];
};

const ActiveSaleOrders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const { data, isLoading, error } = useQuery('saleOrders', fetchSaleOrders);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading sale orders</div>;

  const handleEdit = (order) => {
    setSelectedOrder(order);
    onOpen();
  };

  return (
    <Box>
      <Button colorScheme="blue" onClick={() => handleEdit(null)}>+ Sale Order</Button>
      <Box mt={4}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Order ID</Th>
              <Th>Customer Name</Th>
              <Th>Invoice No</Th>
              <Th>Invoice Date</Th>
              <Th>Paid</Th>
              <Th>Items</Th>
              <Th>Actions</Th>
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
                <Td>
                  <Button onClick={() => handleEdit(order)}>Edit</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedOrder ? 'Edit Sale Order' : 'Create Sale Order'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SaleOrderForm order={selectedOrder} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ActiveSaleOrders;