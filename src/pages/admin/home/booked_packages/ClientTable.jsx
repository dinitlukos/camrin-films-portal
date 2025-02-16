import { ContentCopy, Preview } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridToolbarQuickFilter
} from '@mui/x-data-grid';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { sendWhatsappMessage } from 'src/service/whatsapp';
import { whatsAppMessage } from 'constants/messages';

const CustomToolbar = () => {
  return (
    <GridToolbarContainer sx={{ p: 3 }}>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector
        slotProps={{ tooltip: { title: 'Change density' } }}
      />
      <Box sx={{ flexGrow: 1 }}></Box>
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
};

const ClientTable = ({
  data = [],
  uId,
  loading,
  openConfirm,
  openRejection,
  handleEdit,
  handleDataUpdate,
  handleNotes,
}) => {
  const locations = useLocation();
  const theme = useTheme();
  const def_column_config = {
    flex: 1,
    headerClassName: 'table-header',
  };
  const columns = [
    {
      ...def_column_config,
      field: 'groom_name',
      headerName: 'Groom',
    },
    {
      ...def_column_config,
      field: 'bride_name',
      headerName: 'Bride',
    },
    {
      field: 'customer_contact',
      headerName: 'Phone Number',
      headerClassName: 'table-header',
      width: 200,
      renderCell: (params) => {
        return (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100%' }}
          >
            <Grid
              container
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Typography variant="body2" component="span">
                {params.value}
              </Typography>
              <IconButton
                size="small"
                onClick={() => navigator.clipboard.writeText(params.value)}
              >
                <ContentCopy sx={{ height: '20px' }} color="secondary" />
              </IconButton>
            </Grid>
          </Grid>
        );
      },
    },
    {
      ...def_column_config,
      field: 'customer_email',
      headerName: 'Email',
    },
    {
      ...def_column_config,
      field: 'wedding_date',
      headerName: 'Wedding Date',
      valueGetter: (value, row) => value,
      renderCell: (params) => {
        return <span>{moment(params.value).format('Do MMM yyyy')}</span>;
      },
    },
    {
      ...def_column_config,
      field: 'package_booked',
      headerName: 'Booked Package',
    },
    {
      field: 'booking',
      headerName: 'Booking',
      headerAlign: 'center',
      renderCell: (params) => {
        return (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100%' }}
          >
            <Grid container direction="row" spacing={1}>
                <Button
                  size="small"
                  onClick={() =>
                    handleDataUpdate(params.row, { package_booked: null })
                  }
                >
                  Cancel
                </Button>
              
            </Grid>
          </Grid>
        );
      },
    },
    {
      field: 'actions',
      headerName: '',
      width: 180,
      renderCell: (params) => {
        return (
          <Grid container direction="row" spacing={1}>
            <IconButton
              aria-label="view"
              onClick={() => handleNavigation(params.row)}
            >
              <Preview color="secondary" />
            </IconButton>

            <IconButton
              aria-label="edit"
              onClick={() => handleEdit(params.row)}
            >
              <EditIcon color="secondary" />
            </IconButton>
            <IconButton
              aria-label="notes"
              onClick={() => handleNotes(params.row)}
            >
              <EditNoteIcon color="secondary" />
            </IconButton>
          </Grid>
        );
      },
    },
  ];

  const handleNavigation = (row) => {
    if (row?.id) {
      const url = location.origin + '/packages/' + row?.id;
      window.open(url, '_blank').focus();
    }
  };

  return (
    <Box
      sx={{
        '& .table-header': {
          backgroundColor: theme.palette.warning.main,
          color: '#fff',
          justifyContent:'center'
        },
        '& .table-whatsapp-header': {
          backgroundColor: theme.palette.success.main,
          color: '#fff'
        },
      }}
    >
      <DataGrid
        columns={columns}
        rows={data}
        loading={loading}
        slots={{ toolbar: CustomToolbar }}
        getRowHeight={() => 'auto'}
        initialState={{
          sorting: {
            sortModel:[{field:'packages', sort:'desc'}]
          }
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
  );
};

export default ClientTable;
