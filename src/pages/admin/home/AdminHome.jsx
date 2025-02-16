import Grid from '@mui/material/Grid2';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import CFAppBar from 'components/CFAppBar';
import Loader from 'components/Loader';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from 'src/auth/AuthProvider';
import { UserPackageAPI } from '../../../service/UserPackageAPI';
import ClientTable from './ClientTable';
import ConfirmModel from './ConfirmModel';
import PackageRejectionModel from './PackageRejectionModel';

const COL_KEYS = [
  'id',
  'bride_name',
  'groom_name',
  'wedding_date',
  'package_booked',
  'packages',
  'uid',
  'events',
  'customer_contact',
  'customer_email',
  'status',
  'disable_whatsapp',
];

export default function AdminHome() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const { logOut } = React.useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState();
  const [open, setOpen] = useState(false);
  const [openPackageRejection, setOpenPackageRejection] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  const fetchStories = async () => {
    setLoading(true);
    const filter = {
      package_booked: { $eq: null },
      reject: { $exists: false },
    };
    const d = await UserPackageAPI.filter(filter);
    if (d && d.length > 0) {
      const fd = _.filter(d, (e) => !e?.reject);
      const data = _.map(fd, (v) => {
        return _.pick({ ...v, id: v.uid }, COL_KEYS);
      });
      setRows(data);
    } else {
      navigate('/', { replace: true });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleEdit = (d) => {
    navigate('/admin/client', { state: { id: d.id } });
  };

  const handleRoutes = (path) => {
    navigate(path);
  };

  const handleNotes = (d) => {
    navigate('/admin/client/notes', { state: { id: d.id } });
  };

  const handleDelete = async () => {
    try {
      handleModelClose();
      setLoading(true);
      await UserPackageAPI.deletePackageById(selectedRow?.id);
      await fetchStories();
      setSelectedRow(null);
      setLoading(false);
    } catch (err) {
      handleModelClose();
      setSelectedRow(null);
      setLoading(false);
    }
  };

  const handleDataUpdate = async (row, d) => {
    try {
      setLoading(true);
      await UserPackageAPI.update(row?.id, d);
      await fetchStories();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const handleRejection = async (reason, type) => {
    setOpenPackageRejection(false);
    await handleDataUpdate(selectedRow, {
      status: 'Package Rejected',
      reject: true,
      rejectionDetails: reason ?? '',
      rejectionReason: type,
    });
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logOut();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const openConfirm = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const openPackageRejectionModal = (row) => {
    setSelectedRow(row);
    setOpenPackageRejection(true);
  };

  const handleModelClose = () => {
    setOpen(false);
  };
  const handleRejectionModelClose = () => {
    setOpenPackageRejection(false);
    setRejectionReason('');
  };

  return (
    <div>
      <CFAppBar
        title="Admin Home"
        handleLogout={handleLogout}
        enableBack={false}
      />
      <Grid container spacing={3} justifyContent="end">
        <Grid container spacing={3} paddingRight={6} paddingTop={4}>
          <Button
            variant="contained"
            color="info"
            onClick={() => handleRoutes('/admin/booked')}
          >
            Booked Packages
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleRoutes('/admin/chat')}
          >
            Whatsapp Messages
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => handleRoutes('/admin/offers')}
          >
            Offers
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleRoutes('/admin/client')}
          >
            Add Client
          </Button>
        </Grid>
      </Grid>
      <Grid padding={3}>
        <ClientTable
          data={rows}
          loading={loading}
          openConfirm={openConfirm}
          openRejection={openPackageRejectionModal}
          handleEdit={handleEdit}
          handleDataUpdate={handleDataUpdate}
          handleNotes={handleNotes}
        />
      </Grid>
      <ConfirmModel
        open={open}
        handleDelete={handleDelete}
        handleModelClose={handleModelClose}
      />
      <PackageRejectionModel
        open={openPackageRejection}
        handleRejection={handleRejection}
        handleModelClose={handleRejectionModelClose}
      />
      <ToastContainer position="bottom-center" />
      {loading && <Loader />}
    </div>
  );
}
