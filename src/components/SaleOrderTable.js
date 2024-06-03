import { Box, Table, Tbody, Td, Th, Thead, Tr, IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const SaleOrderTable = ({ orders, onEdit, isLoading, isCompleted }) => {
  if (isLoading) return <Box>Loading...</Box>;

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Invoice No</Th>
          <Th>Customer</Th>
          <Th>Invoice Date</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {orders.map((order) => (
          <Tr key={order.id}>
            <Td>{order.invoice_no}</Td>
            <Td>{order.customer_profile.name}</Td>
            <Td>{order.invoice_date}</Td>
            <Td>
              {isCompleted ? (
                "Read-Only"
              ) : (
                <IconButton
                  icon={<EditIcon />}
                  onClick={() => onEdit(order)}
                />
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SaleOrderTable;
