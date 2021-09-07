import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import firebase from 'firebase';
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
import { db } from '../firebase'
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

    const useMediaQuery = () => {
        const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
        const media = window.matchMedia(`(max-width: 768px)`)
        media.addEventListener('change', e => updateTarget(e))
    
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
          setTargetReached(true)
        }
    
        return () => media.removeEventListener('change', e => updateTarget(e))
      }, []) 
    return targetReached;
  };



const contact = () => {
    const classes = useStyles();
    const router = useRouter()
    const bp = useMediaQuery()

    const contactHandler = async (values) => {
        console.log(values);

      
          const contactData = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: `+${values.countryCode}${values.phone}`,
            occupation: values.occupation,
            companyName: values.company,
            purpose: values.purpose,
            message: values.message,
          };

          try{

            db.collection('contacts').add({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: `+${values.countryCode}${values.phone}`,
            occupation: values.occupation,
            companyName: values.company,
            purpose: values.purpose,
            message: values.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                
            })

            try{
                const data = await fetch(`http://localhost:3000/api/contact`, {
			    body:  JSON.stringify({ contactData }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
		    })
		        const res = await data.json()
		        console.log(res)
            

            const emailData = {
                from_name: `${values.firstName} ${values.lastName}`,
                phoneNumber: `+${values.countryCode}${values.phone}`,
                occupation: values.occupation,
                purpose: values.purpose,
                message: values.message,
              };
        
              console.log(emailData);
              emailjs
                .send(
                  process.env.NEXT_PUBLIC_SERVICE_ID,
                  process.env.NEXT_PUBLIC_TEMPLATE_ID,
                  emailData,
                  process.env.NEXT_PUBLIC_USER_ID
                )
                .then(
                  (result) => {
                    console.log(result.text);
                  },
                  (error) => {
                    console.log(error.text);
                  }
                );
            }
            catch(error){
                console.log(error)
                toast.error(error.response.data.error);
                

            }
            
                toast.success("Thanks for getting in touch!");
          }catch(error){
            console.log(error);
            toast.error(error.response.data.error);
            
          }
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
                                            xs={bp ? 12 : 6}
                                            >
                                            <Textfield
                                                name="firstName"
                                                label="First Name"
                                                required={true}
                                            />
                                            </Grid>
                                            <Grid
                                            item
                                            xs={bp ? 12 : 6}
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
                                            xs={bp ? 12 : 6}
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
                                            xs={bp ? 12 : 6}
                                            >
                                            <Textfield
                                                name="phone"
                                                label="Phone"
                                                required={true}
                                            />
                                            </Grid>
                                            <Grid
                                            item
                                            xs={bp ? 12 : 6}
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
                                            xs={bp ? 12 : 6}
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
