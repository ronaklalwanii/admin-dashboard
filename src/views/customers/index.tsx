import Grid from "@mui/material/Grid";

import CustomerStats from "./CustomerStats";
import CustomerTable from "./CustomerTable";
const Customers = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <CustomerStats />
      </Grid>
      <Grid item xs={12}>
        <CustomerTable />
      </Grid>
    </Grid>
  );
};

export default Customers;
