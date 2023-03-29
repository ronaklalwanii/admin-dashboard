import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";

import axios from "axios";

import { RecentTransactions } from "@/types/recent-transactions";
const RecentTransactions = () => {
  const [data, setData] = useState<RecentTransactions[]>([]);

  useEffect(() => {
    axios.get("/api/recent-transactions").then((res) => setData(res.data));
  }, []);

  return (
    <Card>
      <CardHeader title="Recent Transactions" action={<MoreVertOutlined />} />
      <CardContent>
        <Table
          sx={{
            borderRadius: 1,
            borderCollapse: "unset",
            border: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Customer ID</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ "& .MuiTableCell-root": { border: 0 } }}>
            {data.length
              ? data.map((tnx) => {
                  return (
                    <TableRow key={tnx.customerId}>
                      <TableCell>
                        <Tooltip
                          placement="top"
                          title={
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Avatar
                                sx={{ mr: 1 }}
                                src={`/images/avatars/${tnx.avatar}`}
                              />
                              <Box>
                                <Typography>{tnx.customerName}</Typography>
                                <Typography variant="caption">
                                  {tnx.country}
                                </Typography>
                              </Box>
                            </Box>
                          }
                        >
                          <Typography
                            href="/"
                            component={Link}
                            onClick={(e) => e.preventDefault()}
                          >
                            #{tnx.customerId}
                          </Typography>
                        </Tooltip>
                      </TableCell>
                      <TableCell>
                        <Typography>{tnx.productName}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{tnx.date}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>${tnx.price}</Typography>
                      </TableCell>
                    </TableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
