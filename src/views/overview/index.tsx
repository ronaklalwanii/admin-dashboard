import Grid from "@mui/material/Grid";

import GoalChart from "./goal-chart";
import TopProducts from "./top-products";
import WeeklyStats from "./weekly-stats";
import RevenueChart from "./revenue-chart";
import RecentTransactions from "./recent-transactions";

const Overview = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <WeeklyStats />
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <RevenueChart />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <GoalChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <RecentTransactions />
      </Grid>
      <Grid item xs={12} md={6}>
        <TopProducts />
      </Grid>
    </Grid>
  );
};

export default Overview;
