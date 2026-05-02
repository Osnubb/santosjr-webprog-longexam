import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', flex: 1, minWidth: 180 },
  { field: 'email', headerName: 'Email', flex: 1.2, minWidth: 220 },
  { field: 'role', headerName: 'Role', width: 130 },
  { field: 'department', headerName: 'Department', width: 170 },
  {
    field: 'status',
    headerName: 'Status',
    width: 130,
    renderCell: (params) => (
      <Chip
        label={params.value}
        size="small"
        color={params.value === 'Active' ? 'success' : 'default'}
        variant={params.value === 'Active' ? 'filled' : 'outlined'}
      />
    ),
  },
];

const rows = [
  { id: 1, name: 'Ariana Cruz', email: 'ariana.cruz@nu.edu.ph', role: 'Admin', department: 'Operations', status: 'Active' },
  { id: 2, name: 'Miguel Santos', email: 'miguel.santos@nu.edu.ph', role: 'Staff', department: 'Inventory', status: 'Active' },
  { id: 3, name: 'Lea Ramos', email: 'lea.ramos@nu.edu.ph', role: 'Staff', department: 'Support', status: 'Inactive' },
  { id: 4, name: 'Noel Garcia', email: 'noel.garcia@nu.edu.ph', role: 'Manager', department: 'Sales', status: 'Active' },
  { id: 5, name: 'Patricia Lim', email: 'patricia.lim@nu.edu.ph', role: 'Staff', department: 'Marketing', status: 'Active' },
  { id: 6, name: 'Cyril Dela Torre', email: 'cyril.delatorre@nu.edu.ph', role: 'Staff', department: 'Reports', status: 'Inactive' },
];

const UsersPage = () => {
  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 3, borderRadius: 4 }}>
        <Typography variant="overline" sx={{ letterSpacing: 3, color: 'text.secondary' }}>
          Users
        </Typography>
        <Typography variant="h4" sx={{ mt: 1, fontWeight: 700 }}>
          User list and details table
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760, lineHeight: 1.8 }}>
          This page uses the MUI Data Grid component to present a sample user table with names,
          emails, roles, departments, and account status.
        </Typography>
      </Paper>

      <Paper sx={{ p: 2, borderRadius: 4 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
          disableRowSelectionOnClick
          sx={{
            border: 0,
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#f8fafc',
            },
          }}
        />
      </Paper>
    </Stack>
  );
};

export default UsersPage;
