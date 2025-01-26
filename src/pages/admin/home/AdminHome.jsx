import Grid from '@mui/material/Grid2';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';

import { Button, useTheme } from '@mui/material';
import CFAppBar from 'components/CFAppBar';
import Loader from 'components/Loader';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from 'src/auth/AuthProvider';
import { db } from 'src/firebase';
import { UserPackageAPI } from '../../../service/UserPackageAPI';
import ClientTable from './ClientTable';
import ConfirmModel from './ConfirmModel';

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
  const theme = useTheme();
  const [rows, setRows] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logOut } = React.useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState();
  const [open, setOpen] = useState(false);

  const fetchStories = async () => {
    setLoading(true);
    //     const docSnap = await getDocs(collection(db, 'stories'));
    //     docSnap.docs.map(async (v,k) => {
    //       const d = v.data()
    //       const newD = {...d }
    //       var events = newD['events']
    // events.map((v,k) => {
    //   console.log(v['date'])
    // })
    //       // console.log(packages)
    //       await UserPackageAPI.update(newD['uid'], {packages: packages})

    //     })
    const d = await UserPackageAPI.getAllPackages();
    if (d && d.length > 0) {
      const data = _.map(d, (v) => {
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

  const handleAddClient = () => {
    navigate('/admin/client');
  };

  const handleNotes = (d) => {
    navigate('/admin/client/notes', { state: { id: d.id } });
  };

  const handleDelete = async () => {
    try {
      handleModelClose();
      setLoading(true);
      await deleteDoc(doc(db, 'stories', selectedRow?.id));
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
      // await updateDoc(doc(db, 'stories', row?.id), d);
      await UserPackageAPI.update(row?.id, d);
      await fetchStories();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
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

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleModelClose = () => {
    setOpen(false);
  };

  const handleNavigation = (uid) => {
    const url = location.origin + '/packages/' + uid;
    window.open(url, '_blank').focus();
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
            color="secondary"
            onClick={handleAddClient}
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
      <ToastContainer position="bottom-center" />
      {loading && <Loader />}
    </div>
  );
}
