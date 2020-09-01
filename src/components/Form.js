import React, { Component, useState, useEffect } from 'react'
import './Form.css'
import { Button, Form, ButtonToolbar } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Main from './Main'
import Error from './Error'

class Form1 extends Component {
  constructor(props) {
    super(props)

    this.state = { loading: true }
  }

  render() {
    // const { firstName, middleName, lastName, dob, pob, mmn } = this.state;
    const validationSchema = Yup.object().shape({
      firstName: Yup.string()
        .min(3, 'Must have atleast 3 character')
        .max(255, 'Must be shorter than 255')
        .required('Must enter first name'),
      middleName: Yup.string()
        .min(3, 'Must have atleast 3 character')
        .max(255, 'Must be shorter than 255')
        .required('Must enter middle name'),
      lastName: Yup.string()
        .min(3, 'Must have atleast 3 character')
        .max(255, 'Must be shorter than 255')
        .required('Must enter last name'),
      dob: Yup.date().required('Date cannot be empty'),
      address: Yup.string()
        .min(3, 'Must have atleast 3 character')
        .max(255, 'Must be shorter than 255')
        .required('Must enter Address'),
    })
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Enter User Details</h2>

          <Formik
            initialValues={{
              firstName: '',
              middleName: '',
              lastName: '',
              dob: '',
              spouse: '',
              children: 'n/a',
              address: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              let {
                firstName,
                middleName,
                lastName,
                dob,
                spouse,
                children,
                address,
              } = values
              this.props.compareData(
                firstName,
                middleName,
                lastName,
                dob,
                children,
                address,
              )
              // resetForm()
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="firstName">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className={
                      touched.firstName && errors.firstName ? 'has-error' : null
                    }
                  />
                  <Error
                    touched={touched.firstName}
                    message={errors.firstName}
                  />
                </div>

                <div className="middleName">
                  <label htmlFor="middleName">Middle Name</label>
                  <input
                    placeholder="Middle Name"
                    name="middleName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.middleName}
                    className={
                      touched.middleName && errors.middleName
                        ? 'has-error'
                        : null
                    }
                  />
                  <Error
                    touched={touched.middleName}
                    message={errors.middleName}
                  />
                </div>

                <div className="lastName">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className={
                      touched.lastName && errors.lastName ? 'has-error' : null
                    }
                  />
                  <Error touched={touched.lastName} message={errors.lastName} />
                </div>

                <div className="dob">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    placeholder="Date of Birth"
                    type="date"
                    name="dob"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dob}
                    className={touched.dob && errors.dob ? 'has-error' : null}
                  />
                  <Error touched={touched.dob} message={errors.dob} />
                </div>

                <div className="spouse">
                  <label htmlFor="spouse">Spouse (optional)</label>
                  <input
                    placeholder="Spouse"
                    name="spouse"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.spouse}
                  />
                </div>

                <div className="children">
                  <label htmlFor="children">children</label>
                  <select
                    name="children"
                    onChange={handleChange}
                    value={values.children}
                    class="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="n/a">n/a</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <Error touched={touched.mmn} message={errors.mmn} />
                </div>

                <div className="address">
                  <label htmlFor="address">Address</label>
                  <input
                    placeholder="Address"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    className={
                      touched.address && errors.address ? 'has-error' : null
                    }
                  />
                  <Error touched={touched.address} message={errors.address} />
                </div>

                {/* <div className="fg text-center"></div> */}

                <div className="createAccount">
                  <Button
                    style={{ width: '600px', height: '70px' }}
                    variant="success"
                    type="submit"
                    // disabled={isLoading}
                    // onSubmit={!isLoading ? handleClick : null}
                  >
                    {this.state.isLoading ? 'Validatingâ€¦' : 'Click to Attest'}
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    )
  }
}

export default Main(Form1)
