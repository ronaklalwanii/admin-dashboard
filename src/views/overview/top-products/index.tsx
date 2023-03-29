import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

const TopProducts = () => {
  return (
    <Card>
      <CardHeader title="Top Products" subheader="Top 3 products of the week" />
      <CardContent>
        <Grid
          container
          spacing={4}
          sx={{
            "& img": { maxWidth: "100%", borderRadius: 1 },
          }}
        >
          <Grid item xs={4}>
            <img src="/images/products/product-1.jpg" />
          </Grid>
          <Grid item xs={4}>
            <img src="/images/products/product-2.jpg" />
          </Grid>
          <Grid item xs={4}>
            <img src="/images/products/product-3.jpg" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TopProducts;
