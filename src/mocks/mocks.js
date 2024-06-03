import { customers, products, saleOrders } from './data';
import { useQuery } from 'react-query';

export const useCustomers = () => {
  return useQuery('customers', () => customers);
};

export const useProducts = () => {
  return useQuery('products', () => products);
};

export const useSaleOrders = () => {
  return useQuery('saleOrders', () => saleOrders);
};

export const useCreateSaleOrder = () => {
  return (newOrder) => {
    saleOrders.push(newOrder);
  };
};

export const getActiveSaleOrders = () => {
  return saleOrders.filter(order => !order.paid);
};

export const getCompletedSaleOrders = () => {
  return saleOrders.filter(order => order.paid);
};

/*
import { customers, products, saleOrders } from './data';
import { useQuery } from 'react-query';

// Exporting mock data as hooks for React Query
export const useCustomers = () => {
  return useQuery('customers', () => customers);
};

export const useProducts = () => {
  return useQuery('products', () => products);
};

export const useSaleOrders = () => {
  return useQuery('saleOrders', () => saleOrders);
};

export const useCreateSaleOrder = () => {
  return (newOrder) => {
    saleOrders.push(newOrder);
  };
};

// Define and export the functions to get active and completed sale orders
export const getActiveSaleOrders = () => {
  return saleOrders.filter(order => !order.paid);
};

export const getCompletedSaleOrders = () => {
  return saleOrders.filter(order => order.paid);
};
*/