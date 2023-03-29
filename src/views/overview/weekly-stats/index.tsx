import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import * as Icons from "@mui/icons-material";

import axios from "axios";

import { WeeklyStats } from "@/types/weekly-stats";

const WeeklyStats = () => {
  const [data, setData] = useState<WeeklyStats[]>([]);

  useEffect(() => {
    axios.get("/api/weekly-stats").then((res) => setData(res.data));
  }, []);

  const renderCards = () => {
    return data.map((item) => {
      const CardIcon = Icons[item.icon] || Icons.HomeOutline;
      const TrendIcon =
        item.trendDir === "down"
          ? Icons.TrendingDownOutlined
          : Icons.TrendingUpOutlined;

      return (
        <Grid item xs={12} md={3} key={item.title}>
          <Card>
            <CardHeader
              title={item.title}
              titleTypographyProps={{ variant: "h6" }}
              avatar={
                <Avatar
                  sx={{
                    "& svg": { color: "common.white" },
                    backgroundColor: `${item.avatarColor}.main`,
                  }}
                >
                  <CardIcon />
                </Avatar>
              }
            />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h5">{item.stats}</Typography>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& svg, .MuiTypography-root": {
                        color:
                          item.trendDir === "down"
                            ? "error.main"
                            : "success.main",
                      },
                    }}
                  >
                    <TrendIcon
                      sx={{
                        mr: 0.5,
                      }}
                    />
                    <Typography variant="body2">{item.trendStat}</Typography>
                  </Box>
                  <Typography variant="caption">In Last 7 Days</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  };

  return data.length ? (
    <Grid container spacing={2}>
      {renderCards()}
    </Grid>
  ) : null;
};

export default WeeklyStats;
