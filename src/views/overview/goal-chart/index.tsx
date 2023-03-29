import { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import MenuItem from "@mui/material/MenuItem";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { useTheme } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import MoreHorizOutlined from "@mui/icons-material/MoreHorizOutlined";

import ReactApexChart from "@/components/libs/ReactApexCharts";

import { ApexOptions } from "apexcharts";

const GoalChart = () => {
  const [duration, setDuration] = useState("3-months");

  const theme = useTheme();

  const series = [76, 67, 61];
  const options: ApexOptions = {
    chart: {
      height: 250,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,

        hollow: {
          margin: 10,
          size: "30%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.success.main,
      theme.palette.error.main,
    ],
    responsive: [
      {
        breakpoint: 400,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  const handleChange = (event: SelectChangeEvent) => {
    setDuration(event.target.value as string);
  };

  return (
    <Card>
      <CardHeader
        title="Activity Goal"
        action={
          <FormControl fullWidth size="small">
            <Select value={duration} onChange={handleChange}>
              <MenuItem value="3-months">3 Months</MenuItem>
              <MenuItem value="6-months">6 Months</MenuItem>
              <MenuItem value="12-months">12 Months</MenuItem>
            </Select>
          </FormControl>
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
          <Box>
            <Typography variant="h4">75%</Typography>
            <Typography variant="body2">Goal Completion</Typography>
          </Box>
          <Box>
            <Typography variant="h4">21/27</Typography>
            <Typography variant="body2">Verified Completion</Typography>
          </Box>
        </Box>
        <ReactApexChart
          height={250}
          series={series}
          type="radialBar"
          options={options}
        />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      mr: 1,
                      width: 14,
                      height: 14,
                      borderRadius: 1,
                      backgroundColor: "primary.main",
                    }}
                  ></Box>
                  <Typography>Code Review</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography>7/10</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "text.secondary" }}>70%</Typography>
              </TableCell>
              <TableCell>
                <MoreHorizOutlined />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      mr: 1,
                      width: 14,
                      height: 14,
                      borderRadius: 1,
                      backgroundColor: "success.main",
                    }}
                  ></Box>
                  <Typography>Support</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography>6/8</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "text.secondary" }}>75%</Typography>
              </TableCell>
              <TableCell>
                <MoreHorizOutlined />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: 0 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      mr: 1,
                      width: 14,
                      height: 14,
                      borderRadius: 1,
                      backgroundColor: "error.main",
                    }}
                  ></Box>
                  <Typography>Refunds</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ border: 0 }}>
                <Typography>8/9</Typography>
              </TableCell>
              <TableCell sx={{ border: 0 }}>
                <Typography sx={{ color: "text.secondary" }}>89%</Typography>
              </TableCell>
              <TableCell sx={{ border: 0 }}>
                <MoreHorizOutlined />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default GoalChart;
