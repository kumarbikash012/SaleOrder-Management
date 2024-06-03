import { Box, Button, Input, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SaleOrderForm = ({ order }) => {
  const { handleSubmit, register, setValue, watch, formState: { errors } } = useForm({
    defaultValues: order || {},
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newOrder) => {
      // Mimic an API call
      return new Promise((resolve) => setTimeout(resolve, 1000));
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("saleOrders");
      },
    }
  );

  const onSubmit = (data) => {
    mutation.mutate(data);
    console.log(data);
  };

  const invoiceDate = watch("invoice_date");

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl mb={3} isInvalid={errors.customer_id}>
        <FormLabel>Customer ID</FormLabel>
        <Input {...register("customer_id", { required: "Customer ID is required" })} />
        <FormErrorMessage>{errors.customer_id && errors.customer_id.message}</FormErrorMessage>
      </FormControl>

      <FormControl mb={3} isInvalid={errors.invoice_no}>
        <FormLabel>Invoice No</FormLabel>
        <Input {...register("invoice_no", { required: "Invoice No is required" })} />
        <FormErrorMessage>{errors.invoice_no && errors.invoice_no.message}</FormErrorMessage>
      </FormControl>

      <FormControl mb={3} isInvalid={errors.invoice_date}>
        <FormLabel>Invoice Date</FormLabel>
        <DatePicker
          selected={invoiceDate}
          onChange={(date) => setValue("invoice_date", date)}
          dateFormat="dd/MM/yyyy"
        />
        <FormErrorMessage>{errors.invoice_date && errors.invoice_date.message}</FormErrorMessage>
      </FormControl>

      <FormControl mb={3}>
        <FormLabel>Paid</FormLabel>
        <Input type="checkbox" {...register("paid")} />
      </FormControl>

      <FormControl mb={3} isInvalid={errors.items?.[0]?.sku_id}>
        <FormLabel>SKU ID</FormLabel>
        <Input {...register("items[0].sku_id", { required: "SKU ID is required" })} />
        <FormErrorMessage>{errors.items?.[0]?.sku_id && errors.items[0].sku_id.message}</FormErrorMessage>
      </FormControl>

      <FormControl mb={3} isInvalid={errors.items?.[0]?.price}>
        <FormLabel>Price</FormLabel>
        <Input {...register("items[0].price", { required: "Price is required" })} />
        <FormErrorMessage>{errors.items?.[0]?.price && errors.items[0].price.message}</FormErrorMessage>
      </FormControl>

      <FormControl mb={3} isInvalid={errors.items?.[0]?.quantity}>
        <FormLabel>Quantity</FormLabel>
        <Input {...register("items[0].quantity", { required: "Quantity is required" })} />
        <FormErrorMessage>{errors.items?.[0]?.quantity && errors.items[0].quantity.message}</FormErrorMessage>
      </FormControl>

      <Button type="submit" colorScheme="blue" isLoading={mutation.isLoading}>
        {order ? "Update" : "Create"} Sale Order
      </Button>
    </Box>
  );
};

export default SaleOrderForm;