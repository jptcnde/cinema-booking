import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { TextField, Grid as MuiGrid } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';
import { Field, useFormikContext } from 'formik';
import { FIELD_NAMES } from './constants';

const Grid = styled(MuiGrid)(spacing);

// eslint-disable-next-line
function Input({ field, form, ...props }) {
  return (
    <TextField
      // eslint-disable-next-line react/jsx-props-no-spreading, react/prop-types
      {...field}
      // eslint-disable-next-line react/jsx-props-no-spreading, react/prop-types
      {...props}
      // eslint-disable-next-line react/prop-types
      helperText={form.touched[field.name] && form.errors[field.name]}
      // eslint-disable-next-line react/prop-types
      error={form.touched[field.name] && form.errors[field.name]}
    />
  );
}

function CheckoutForm(props) {
  const { onFormChange } = props;
  const { values, isValid, touched, errors } = useFormikContext();

  useEffect(() => {
    const canSubmit = isValid || (!isEmpty(touched) && isEmpty(errors));
    onFormChange(values, canSubmit);
  }, [values, isValid, touched, errors, onFormChange]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Field
          type="text"
          name={FIELD_NAMES.name}
          fullWidth
          label="Name"
          component={Input}
          color="secondary"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      <Grid item xs={12}>
        <Field
          type="text"
          name={FIELD_NAMES.email}
          fullWidth
          label="Email"
          component={Input}
          color="secondary"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
    </Grid>
  );
}

CheckoutForm.propTypes = {
  onFormChange: PropTypes.func.isRequired
};

export default CheckoutForm;
