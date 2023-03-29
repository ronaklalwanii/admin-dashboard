import mock from "./mock";

import { WeeklyStats } from "@/types/weekly-stats";

const data: WeeklyStats[] = [
  {
    trendDir: "up",
    trendStat: "16%",
    stats: "$718,353",
    title: "Total Revenue",
    avatarColor: "primary",
    icon: "AttachMoneyOutlined",
  },
  {
    trendDir: "down",
    trendStat: "0.4%",
    stats: "251,668",
    avatarColor: "info",
    icon: "GroupOutlined",
    title: "Total Customers",
  },
  {
    trendDir: "up",
    trendStat: "8%",
    stats: "10,555,123",
    avatarColor: "error",
    title: "Total Transaction",
    icon: "ReceiptLongOutlined",
  },
  {
    trendDir: "up",
    trendStat: "2%",
    stats: "15,000,000",
    avatarColor: "warning",
    title: "Total Inventory",
    icon: "Inventory2Outlined",
  },
];

mock.onGet("/api/weekly-stats").reply(() => [200, data]);
