import mock from "./mock";

import { RecentTransactions } from "@/types/recent-transactions";

const data: RecentTransactions[] = [
  {
    price: 350,
    date: "09 Feb",
    customerId: 666666,
    avatar: "avatar-1.png",
    country: "United States",
    customerName: "Parker Camacho",
    productName: "Black Slim Fit Casual Shirt",
  },
  {
    price: 275,
    date: "10 Feb",
    country: "France",
    customerId: 678998,
    avatar: "avatar-2.png",
    customerName: "Paris Kelly",
    productName: "Pure Cotton T-shirt",
  },
  {
    price: 600,
    date: "10 Feb",
    customerId: 749878,
    country: "Germany",
    avatar: "avatar-3.png",
    customerName: "Frederic Atkinson",
    productName: " Black Slim Fit Jeans",
  },
  {
    price: 400,
    date: "11 Feb",
    customerId: 983546,
    avatar: "avatar-4.png",
    country: "United Kingdom",
    customerName: "Denise Banks",
    productName: " Slim Fit Cargo Trousers",
  },
  {
    price: 600,
    date: "12 Feb",
    country: "Japan",
    customerId: 264846,
    avatar: "avatar-5.png",
    customerName: "Chelsea Huang",
    productName: "Navy Blue Analogue Watch",
  },
];

mock.onGet("/api/recent-transactions").reply(() => [200, data]);
