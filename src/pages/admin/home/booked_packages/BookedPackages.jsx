import Grid from '@mui/material/Grid2';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';

import { Button, useTheme } from '@mui/material';
import CFAppBar from 'components/CFAppBar';
import Loader from 'components/Loader';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from 'src/auth/AuthProvider';
import { UserPackageAPI } from 'src/service/UserPackageAPI';
import ClientTable from './ClientTable';
import { package_variants } from '../../../../constants/packages';
// import ConfirmModel from './ConfirmModel';
// import PackageRejectionModel from './PackageRejectionModel';

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

export default function BookedPackages() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [rows, setRows] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logOut } = React.useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState();
  const [open, setOpen] = useState(false);
  const [openPackageRejection, setOpenPackageRejection] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  const fetchStories = async () => {
    setLoading(true);
    const filter = {
        "package_booked": { "$exists": true, "$in": package_variants }
    }
    const d = await UserPackageAPI.filter(filter);
    if (d && d.length > 0) {
      const fd = _.filter(d,(e)=>!e?.reject && e?.package_booked)
      const data = _.map(fd, (v) => {
        return _.pick({ ...v, id: v.uid }, COL_KEYS);
      });
      setRows(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleEdit = (d) => {
    navigate('/admin/book', { state: { id: d.id, edit:true } });
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
      rejectionReason: type
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

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleModelClose = () => {
    setOpen(false);
  };
  const handleRejectionModelClose = () => {
    setOpenPackageRejection(false);
    setRejectionReason('');
  };

  const handleNavigation = (uid) => {
    const url = location.origin + '/packages/' + uid;
    window.open(url, '_blank').focus();
  };

  return (
    <div>
      <CFAppBar
        title="Booked Packages"
        handleLogout={handleLogout}
      />
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
      {/* <ConfirmModel
        open={open}
        handleDelete={handleDelete}
        handleModelClose={handleModelClose}
      />
      <PackageRejectionModel
        open={openPackageRejection}
        handleRejection={handleRejection}
        handleModelClose={handleRejectionModelClose}
      /> */}
      <ToastContainer position="bottom-center" />
      {loading && <Loader />}
    </div>
  );
}
