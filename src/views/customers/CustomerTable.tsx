import { useState, useEffect, MouseEvent, useCallback } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DialogTitle from "@mui/material/DialogTitle";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers, deleteCustomer, addCustomer } from "@/store/customers";

import SearchIcon from "@mui/icons-material/Search";
import ShareOutlined from "@mui/icons-material/ShareOutlined";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

import { Customer } from "@/types/customers";
import { RootState, AppDispatch } from "@/store";

interface CellType {
  row: Customer;
}

interface AddCustomerFormValues {
  id: number;
  name: string;
  plan: string;
  email: string;
  amount: string;
}

const DeleteCustomer = ({ id }: { id: number }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => dispatch(deleteCustomer(id));

  return (
    <IconButton size="small" onClick={handleDelete}>
      <DeleteOutlineOutlined />
    </IconButton>
  );
};

const columns = [
  {
    flex: 0.2,
    field: "id",
    headerName: "ID",
    renderCell: ({ row }: CellType) => {
      return <Typography noWrap>#{row.id}</Typography>;
    },
  },
  {
    flex: 0.2,
    field: "name",
    minWidth: 400,
    headerName: "Name",
    renderCell: ({ row }: CellType) => {
      const { name, email } = row;

      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src={`/images/avatars/${row.avatar}`} sx={{ mr: 2 }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography>{name}</Typography>
            <Typography noWrap variant="caption">
              {email}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.2,
    field: "plan",
    headerName: "Plan",
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap sx={{ textTransform: "capitalize" }}>
          {row.plan}
        </Typography>
      );
    },
  },
  {
    flex: 0.2,
    field: "date",
    headerName: "Joining Date",
    renderCell: ({ row }: CellType) => {
      return <Typography noWrap>{row.date}</Typography>;
    },
  },
  {
    flex: 0.2,
    field: "amount",
    headerName: "Wallet Amount",
    renderCell: ({ row }: CellType) => {
      return <Typography noWrap>${row.amount}</Typography>;
    },
  },
  {
    flex: 0.2,
    field: "actions",
    headerName: "Actions",
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <DeleteCustomer id={row.id} />
          <IconButton>
            <ShareOutlined />
          </IconButton>
        </Box>
      );
    },
  },
];

const showErrors = (field: string, valueLen: number, min: number) => {
  if (valueLen === 0) {
    return `${field} field is required`;
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`;
  } else {
    return "";
  }
};

const schema = yup.object().shape({
  name: yup.string().required(),
  plan: yup.string().required(),
  amount: yup.string().required(),
  email: yup.string().email().required(),
});

const defaultValues = {
  name: "",
  email: "",
  plan: "",
  amount: 0,
};

const CustomerTable = () => {
  const [page, setPage] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [pageSize, setPageSize] = useState<number>(10);
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector((state: RootState) => state.customers);
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    dispatch(
      fetchCustomers({
        q: inputValue,
      })
    );
  }, [dispatch, inputValue]);

  const handleFilter = useCallback((val: string) => {
    setInputValue(val);
  }, []);

  const handleDialogClose = () => {
    setOpenAddDialog(false);
    reset();
  };

  const onSubmit = (data: AddCustomerFormValues) => {
    if (store.customers.some((u: Customer) => u.email === data.email)) {
      store.customers.forEach((u: Customer) => {
        if (u.email === data.email) {
          setError("email", {
            message: "Email already exists!",
          });
        }
      });
    } else {
      dispatch(addCustomer({ ...data }));
      handleDialogClose();
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <Box
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <TextField
              size="small"
              value={inputValue}
              sx={{ mr: 2 }}
              placeholder="Search Customer"
              onChange={(e) => handleFilter(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" onClick={() => setOpenAddDialog(true)}>
              Add Customer
            </Button>
          </Box>
          <DataGrid
            autoHeight
            columns={columns}
            rows={store.customers}
            pageSizeOptions={[10, 25, 50]}
            paginationModel={{
              page,
              pageSize,
            }}
            onPaginationModelChange={(model) => {
              page !== model.page ? setPage(model.page) : null;
              pageSize !== model.pageSize ? setPageSize(model.pageSize) : null;
            }}
          />
        </CardContent>
      </Card>
      <Dialog open={openAddDialog} onClose={handleDialogClose}>
        <DialogTitle>Add New Customer</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    label="Name"
                    value={value}
                    onChange={onChange}
                    placeholder="John Doe"
                    error={Boolean(errors.name)}
                  />
                )}
              />
              {errors.name && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.name.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    type="email"
                    value={value}
                    label="Email"
                    onChange={onChange}
                    placeholder="johndoe@email.com"
                    error={Boolean(errors.email)}
                  />
                )}
              />
              {errors.email && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.email.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel
                id="validation-plan-select"
                error={Boolean(errors.plan)}
                htmlFor="validation-plan-select"
              >
                Plan
              </InputLabel>
              <Controller
                name="plan"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <Select
                    value={value}
                    label="Plan"
                    onChange={onChange}
                    error={Boolean(errors.plan)}
                    labelId="validation-plan-select"
                    aria-describedby="validation-plan-select"
                  >
                    <MenuItem value="basic">Basic</MenuItem>
                    <MenuItem value="premium">Premium</MenuItem>
                  </Select>
                )}
              />
              {errors.plan && (
                <FormHelperText
                  sx={{ color: "error.main" }}
                  id="validation-plan-select"
                >
                  This field is required
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth>
              <Controller
                name="amount"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    onChange={onChange}
                    label="Wallet Amount"
                    placeholder="$100.00"
                    error={Boolean(errors.amount)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              {errors.amount && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.amount.message}
                </FormHelperText>
              )}
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default CustomerTable;
