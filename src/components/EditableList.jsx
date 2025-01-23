import { AddCircleOutlineOutlined, Delete, Edit } from '@mui/icons-material';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import _ from 'lodash';
import { useState } from 'react';
import InputText from 'components/InputText';

const EditableList = ({
  data,
  handleDataUpdate,
  label = 'label',
  size = { xs: 12, md: 6 },
}) => {
  const [checked, setChecked] = useState([0]);
  const [services, setServices] = useState(data);

  const handleHeadUpdate = (k, field, value) => {
    const d = data;
    d[k][field] = value;
    handleDataUpdate(d);
    setServices([...d]);
  };

  const handleAddItem = (k, value) => {
    const d = data;
    const last = _.last(d[k]['items']);
    const id = last ? last['id'] : 0;
    d[k]['items'].push({
      id: id + 1,
      label: value,
      status: true,
    });
    handleHeadUpdate(k, 'add', false);
  };

  const handleDeleteItem = (k, value) => {
    const d = data;
    const index = _.indexOf(d[k]['items'], value);
    d[k]['items'].splice(index, 1);
    setServices([...d]);
  };

  const handleItemUpdate = (k, ck, field, value) => {
    const d = data;
    d[k]['items'][ck][field] = value;
    handleDataUpdate(d);
    setServices([...d]);
  };
  const handleInputChange = (k, ck, v) => {
    handleItemUpdate(k, ck, 'label', v);
    handleItemUpdate(k, ck, 'editing', false);
  };

  return (
    <Grid container spacing={4}>
      {(data ?? []).map((v, k) => (
        <Grid
          container
          direction="row"
          spacing={2}
          sx={{ width: '100%', pr: 0, mr: 0 }}
          size={size}
          key={k}
        >
          <Grid>
            <Grid container alignItems="center">
              <Typography variant="h6">
                {_.capitalize(v[label] ?? '')}
              </Typography>
              <IconButton
                color="primary"
                onClick={() => handleHeadUpdate(k, 'add', true)}
              >
                <AddCircleOutlineOutlined />
              </IconButton>
            </Grid>
            {v?.add && (
              <Grid>
                <InputText onUpdate={(v) => handleAddItem(k, v)} />
              </Grid>
            )}
            <Grid>
              {v?.items.map((ch, ck) => (
                <ListItem key={ck} disableGutters disablePadding dense>
                  <ListItemIcon>
                    <Checkbox
                      // edge="start"
                      color="secondary"
                      checked={ch?.status}
                      onChange={() =>
                        handleItemUpdate(k, ck, 'status', !ch?.status)
                      }
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <Grid container>
                    {ch?.editing ? (
                      <InputText
                        iniitalValue={ch?.label}
                        onUpdate={(v) => handleInputChange(k, ck, v)}
                      />
                    ) : (
                      <Grid>
                        <Typography variant="span">{ch?.label}</Typography>

                        {ch?.status && (
                          <span>
                            <IconButton
                              size="small"
                              onClick={() =>
                                handleItemUpdate(k, ck, 'editing', true)
                              }
                              edge="end"
                              color="secondary"
                            >
                              <Edit />
                            </IconButton>
                            <IconButton
                              size="small"
                              onClick={() => handleDeleteItem(k, ch)}
                              edge="end"
                              color="error"
                            >
                              <Delete />
                            </IconButton>
                          </span>
                        )}
                      </Grid>
                    )}
                  </Grid>
                </ListItem>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default EditableList;
