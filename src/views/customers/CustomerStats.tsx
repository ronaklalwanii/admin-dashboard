import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

import axios from "axios";

import { CustomerStats } from "@/types/customers";

const CustomerStats = () => {
  const [data, setData] = useState<CustomerStats | null>(null);

  useEffect(() => {
    axios.get("/api/customers-stats").then((res) => setData(res.data));
  }, []);

  const renderStats = () => {
    if (data) {
      return Object.keys(data as CustomerStats).map((key: string) => {
        const obj = data[key];
        const ArrowIcon =
          data[key].trendDir === "down"
            ? ArrowDownwardOutlinedIcon
            : ArrowUpwardOutlinedIcon;
        return (
          <Grid item xs={12} md={4} key={key}>
            <Card>
              <CardHeader title={obj.title} action={<MoreVertOutlined />} />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h4">{data[key].stats}</Typography>
                  <Chip
                    size="small"
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <ArrowIcon
                          sx={{
                            mr: 0.5,
                            width: 12,
                            height: 12,
                          }}
                        />
                        {data[key].trendStat}%
                      </Box>
                    }
                    sx={{
                      backgroundColor:
                        data[key].trendDir === "down"
                          ? "error.light"
                          : "success.light",
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        );
      });
    } else {
      return null;
    }
  };

  return data ? (
    <Grid container spacing={4}>
      {renderStats()}
    </Grid>
  ) : null;
};

export default CustomerStats;
