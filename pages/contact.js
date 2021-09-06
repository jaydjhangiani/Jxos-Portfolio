import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from 'styled-components'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import Textfield from "../components/Form/Textfield";
import Select from "../components/Form/Select";
import FormButton from "../components/Form/FormButton";
import FormContainer from "../components/Form/FormContainer";
import FormWrapper from "../components/Form/FormWrapper";
import purposeData from "../assets/data/purposeData.json";
import countryCode from "../assets/data/countryCode.json";
import occupationData from "../assets/data/occupationData.json";
import Logo from '../assets/img/JXOS.jpg'
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const useStyles = makeStyles((theme) => ({
    formWrapper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(5),
    },
    fieldWrapper: {
      marginBottom: "20px",
    },
  }));
  
  
  const INITIAL_FORM_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phone: "",
    occupation: "",
    purpose: "",
    company: "",
    message: "",
  };
  
  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required("Required."),
    lastName: Yup.string().required("Required."),
    email: Yup.string().email("Invalid Email.").required("Required."),
    countryCode: Yup.string().required("Required."),
    phone: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone Number Is Not Valid."
      )
      .typeError("Please enter a valid phone number.")
      .required("Required."),
    occupation: Yup.string().required("Required."),
    purpose: Yup.string().required("Required."),
    company: Yup.string(),
    message: Yup.string(),
  });

const contact = () => {
    const classes = useStyles();
    const router = useRouter()

    const contactHandler = (values) => {
        console.log(values);
    }
    
    return (
        <div>
            <Head>
                <title>Contact Us</title>
                <link rel="icon" href="/jxos.jpg" />
            </Head>

            <header className="sticky top-0 z-50 grid grid-cols-2 bg-white shadow-md p-5 md:px-10 ">

                <div className="relative flex items-center h-10 md:h-15 cursor-pointer my-auto">
                    <Image
                        onClick={() =>router.push('/') }
                        src={Logo}
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left"
                    />
                </div>
            </header>

            <main main className="max-w-7xl mx-auto px-2 sm:px-2" >
                <section className="pt-10">
                    <FormContainer reduceMargin={true}>
                        <FormWrapper>
                        <Grid container>
                            <Grid item xs={12}>
                            <Container maxWidth="md">
                                <div className={classes.formWrapper}>
                                    <Formik
                                        initialValues={{ ...INITIAL_FORM_STATE }}
                                        validationSchema={FORM_VALIDATION}
                                        onSubmit={contactHandler}
                                    >
                                        <Form>
                                        <Grid container spacing={2}>
                                            <Grid
                                            item
                                            xs={6}
                                            >
                                            <Textfield
                                                name="firstName"
                                                label="First Name"
                                                required={true}
                                            />
                                            </Grid>
                                            <Grid
                                            item
                                            xs={ 6}
                                            >
                                            <Textfield
                                                name="lastName"
                                                label="Last Name"
                                                required={true}
                                            />
                                            </Grid>
                                            <Grid item xs={12}>
                                            <Textfield
                                                name="email"
                                                label="Email"
                                                required={true}
                                            />
                                            </Grid>
                                            <Grid
                                            item
                                            xs={5}
                                            >
                                            <Select
                                                name="countryCode"
                                                label="Code"
                                                required={true}
                                                options={countryCode}
                                            />
                                            </Grid>
                                            <Grid
                                            item
                                            xs={7}
                                            >
                                            <Textfield
                                                name="phone"
                                                label="Phone"
                                                required={true}
                                            />
                                            </Grid>
                                            <Grid
                                            item
                                            xs={6}
                                            >
                                            <Select
                                                name="occupation"
                                                label="Occupation"
                                                options={occupationData}
                                                required={true}
                                            />
                                            </Grid>
                                            <Grid
                                            item
                                            xs={6}
                                            >
                                            <Textfield name="company" label="Company Name" />
                                            </Grid>
                                            <Grid item xs={12}>
                                            <Select
                                                name="purpose"
                                                label="Purpose"
                                                required={true}
                                                options={purposeData}
                                            />
                                            </Grid>
                                            <Grid item xs={12}>
                                            <Textfield
                                                name="message"
                                                label="Write to us!"
                                                multiline={true}
                                                rows={3}
                                            />
                                            </Grid>
                                        </Grid>
                                          <FormButton type="submit">Submit</FormButton>
                                        </Form>
                                    </Formik>
                                </div>
                            </Container>
                             </Grid>
                        </Grid>
                        </FormWrapper>
                    </FormContainer>
                </section>
            </main>
        </div>
    )
}

export default contact
