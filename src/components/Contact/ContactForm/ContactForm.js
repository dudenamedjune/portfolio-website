import { Grid, TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { PortfolioButton } from '../../PortfolioButton/PortfolioButton'
import { ContactSelect } from './ContactSelect/ContactSelect'
import { useStyles } from './style'

const reasons = [
  'Business',
  'Question',
  'Feedback',
  'Other'
]

// Component simply represents the contact form.
// Component is not responsible for managing anything else.
// Decoupled from validation schema.

export const ContactForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit
}) => {
  const classes = useStyles()

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container justify='center' direction='column'>

        <Grid item className={classes.formItem}>
          <TextField
            id='name'
            name='name'
            label="Name"
            variant='outlined'
            type='text'
            autoFocus
            fullWidth
            required

            value={values.name}
            helperText={touched.name ? errors.name : ''}
            error={Boolean(touched.name && errors.name)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid item className={classes.formItem}>
          <TextField
            id='email'
            name="email"
            label='Email'
            variant='outlined'
            type='text'
            fullWidth
            required

            value={values.email}
            helperText={touched.email ? errors.email : ''}
            error={Boolean(touched.email && errors.email)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid item className={classes.formItem}>
          <TextField
            id='phone'
            name="phone"
            label='Phone'
            variant='outlined'
            type='text'
            fullWidth

            value={values.phone}
            helperText={touched.phone ? errors.phone : ''}
            error={Boolean(touched.phone && errors.phone)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid item className={classes.formItem}>
          <ContactSelect
            id='reason'
            name='reason'
            label='Purpose'
            selections={reasons}
            fullWidth
            required

            value={values.reason}
            helperText={touched.reason ? errors.reason : ''}
            error={Boolean(touched.reason && errors.reason)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid item className={classes.formItem}>
          <TextField
            id='message'
            name="message"
            label='Message'
            variant='outlined'
            type='text'
            fullWidth
            required

            value={values.message}
            helperText={touched.message ? errors.message : ''}
            error={Boolean(touched.message && errors.message)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid item style={{ textAlign: 'center' }} className={classes.formItem}>
          {/* Mouse down needs to also handle the submit functionality because normally it only activates on mouse up.
          This is a problem because when clicking away from the label on the button text appears lowering where the button is
          rendered on the screen and moving the button away from the cursor. If the cursor is not in the button when it re-renders,
          correct validation functionality will not occur */}
          <PortfolioButton type='submit' onMouseDown={handleSubmit}>Submit</PortfolioButton>
        </Grid>
      </Grid>
    </form>
  )
}

ContactForm.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
