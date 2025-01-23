import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import Grid from '@mui/material/Grid2';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditNoteIcon from '@mui/icons-material/EditNote';
import moment from 'moment';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import PackageBook from './Book';
import { useLocation } from 'react-router-dom';
import { sendWhatsappMessage } from 'src/service/whatsapp';
import { toast } from 'react-toastify';
import SendIcon from '@mui/icons-material/WhatsApp';
import { WhatsApp, Preview, ContentCopy, Share } from '@mui/icons-material';
import MoreActions from './MoreActions';
import { whatsAppMessage } from '../../../constants/messages';

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

      {/* <Box sx={{ flexGrow: 1 }} />
        <GridToolbarExport
          slotProps={{
            tooltip: { title: 'Export data' },
            button: { variant: 'outlined' },
          }}
        /> */}
    </GridToolbarContainer>
  );
};

const ClientTable = ({
  data = [],
  uId,
  loading,
  openConfirm,
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
      // ...def_column_config,
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
              // justifyContent="center"
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
      valueGetter: (value, row) => value.toDate(),
      renderCell: (params) => {
        return <span>{moment(params.value).format('Do MMM yyyy')}</span>;
      },
    },
    {
      ...def_column_config,
      field: 'packages',
      headerName: 'Enquiry Date',
      type: 'date',
      valueGetter: (value, row) => value.quotation.date.toDate(),
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
      ...def_column_config,
      field: 'status',
      headerName: 'Status',
    },
    {
      field: 'whatsapp',
      headerName: 'Whatsapp',
      headerClassName:'table-whatsapp-header',
      headerAlign: 'center',
      width: 180,
      renderCell: (params) => {
        return (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100%' }}
          >
            <Grid container direction="row" spacing={2}>
              {/* <Button
                size="small"
                variant="outlined"
                color="secondary"
                startIcon={<Preview color="secondary" />}
                onClick={() => handleNavigation(params.row)}
              >
                View
              </Button> */}
              <Button
                size="small"
                variant="outlined"
                disabled={params.row?.disable_whatsapp}
                color="success"
                startIcon={<Share color={params.row?.disable_whatsapp ? "disabled": "success"} />}
                onClick={() => handleShare(params.row)}
              >
                Share
              </Button>
              <IconButton
                size="small"
                onClick={() => copyWhatsappMessage(params.row)}
              >
                <ContentCopy color="success" />
              </IconButton>
            </Grid>
          </Grid>
        );
      },
    },
    {
      field: 'booking',
      headerName: 'Booking',
      headerAlign: 'center',
      // headerClassName: 'table-header',
      renderCell: (params) => {
        return (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100%' }}
          >
            <Grid container direction="row" spacing={1}>
              {params.row?.package_booked ? (
                <Button
                  size="small"
                  onClick={() =>
                    handleDataUpdate(params.row, { package_booked: null })
                  }
                >
                  Cancel
                </Button>
              ) : (
                <PackageBook
                  bookPackage={(p) =>
                    handleDataUpdate(params.row, { package_booked: p })
                  }
                />
              )}
            </Grid>
          </Grid>
        );
      },
    },
    {
      field: 'actions',
      headerName: '',
      // headerClassName: 'table-header',
      width: 180,
      renderCell: (params) => {
        return (
          <Grid container direction="row" spacing={1}>
            {/* <IconButton
              aria-label="delete"
              onClick={() => openConfirm(params.row)}
            >
              <DeleteIcon color="error" />
            </IconButton> */}

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
            {/* <IconButton
              aria-label="editnote"
              onClick={() => handleNotes(params.row)}
            >
              <EditNoteIcon color="warning" />
            </IconButton> */}
            {/* {params.row?.package_booked ? (
              <Button
                size="small"
                onClick={() => handleDataUpdate(params.row, { package_booked: null })}
              >
                Cancel Booking
              </Button>
            ) : (
              <PackageBook
                bookPackage={(p) =>
                  handleDataUpdate(params.row, { package_booked: p })
                }
              />
            )} */}
            <MoreActions
              row={params.row}
              openConfirm={openConfirm}
              handleDataUpdate={handleDataUpdate}
              handleNotes={handleNotes}
            />
          </Grid>
        );
      },
    },
  ];

  const copyWhatsappMessage = (row) => {
    const url = "https://portal.camrinfilms.com/packages/" + row?.id
    const message = decodeURIComponent(whatsAppMessage) + url
    navigator.clipboard.writeText(message)
  }

  const handleNavigation = (row) => {
    if (row?.id) {
      const url = location.origin + '/packages/' + row?.id;
      window.open(url, '_blank').focus();
    }
  };

  const handleShare = async (row) => {
    try {
      if (row?.customer_contact) {
        const res = await sendWhatsappMessage(row?.customer_contact, row?.id);
        handleDataUpdate(row, { status: 'Package Sent', disable_whatsapp: false });
        toast.success('Message sent successfully');
      } else {
        toast.error('Invalid phone number to send message');
      }
    } catch (err) {
      toast.error('Failed to send whatsapp message!');
      console.log(err);
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
