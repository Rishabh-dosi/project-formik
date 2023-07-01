import React from "react";
import './form.css';
import { Form, Formik, useFormik } from "formik";
import bg from "./bg.jfif"
import { MenuItem, TextField } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { schema } from "./Validation.js"
import Select from '@mui/material/Select';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Height } from "@mui/icons-material";

function MyForm() {
    
    const handleSubmit =()=>{}
    const Formik = useFormik({
        initialValues: {
            email: '',
            address: '',
            gender: '',
            country: '',
            hobies: [],

        },
        onSubmit: (values ) => {
            console.log(values);
            
        },
        validationSchema: schema,
        

    })
    return (
        <div className="main">
            
            <form onSubmit={Formik.handleSubmit}>
                <h1>Registration</h1>
                <div className="inp">
                    <label htmlFor="email">Enter your Email: </label> <br />
                    <TextField type="email" variant="standard" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon fontSize="small" color="secondary" />

                            </InputAdornment>
                        )

                    }}
                        name="email"
                        value={Formik.values.email}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        placeholder="Email"
                        error={Formik.touched.email && Formik.errors.email}
                        style={{ minWidth: '500', fontSize: '1rem' }}
                        fullWidth



                    ></TextField>

                    <br />
                    {Formik.touched.email && Formik.errors.email ? <p>{Formik.errors.email}</p> : ""}
                </div>
                <div className="inp">
                    <label htmlFor="address">Enter Your Address</label> <br />
                    <TextField type="text" variant="standard" InputProps={
                        {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <HomeIcon fontSize="small" color="secondary" />

                                </InputAdornment>
                            )

                        }
                    }
                        name="address"
                        value={Formik.values.address}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        placeholder="Address"
                        fullWidth
                    ></TextField> <br />
                    {Formik.touched.address && Formik.errors.address ? <p>{Formik.errors.address}</p> : ""}
                </div>
                <div className="inp">
                    <label htmlFor="country">Country: </label>

                    <Select name="country" value={Formik.values.country} onChange={Formik.handleChange} style={{ width: '100px', height: '25px' }}>
                        <MenuItem value="India">India</MenuItem>
                        <MenuItem value="China">China</MenuItem>
                        <MenuItem value="USA">USA</MenuItem>
                    </Select>

                    <br />
                    {Formik.touched.country && Formik.errors.country ? <p>{Formik.errors.country}</p> : ""}
                </div>
                <div className="inp">
                    <label htmlFor="hobies">Hobbies: </label>
                    <Select multiple name="hobies" value={Formik.values.hobies} onChange={Formik.handleChange} style={{ width: '100px', height: '25px', marginLeft: '7px' }}>
                        <MenuItem key="1"
                            value="Music">Music</MenuItem>
                        <MenuItem key="2" value="Painting">Painting</MenuItem>
                        <MenuItem key="3" value="Traveling">Travelling</MenuItem>
                        <MenuItem key="4" value="Reading">Reading</MenuItem>
                        <MenuItem key="4" value="None">None of them mentioned</MenuItem>
                    </Select>
                    <br />
                    {Formik.touched.hobies && Formik.errors.hobies ? <p>{Formik.errors.hobies}</p> : ""}
                </div>
                
                
                <div className="inp">
                    <label htmlFor="Gender">Your Gender:</label>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="gender"
                        onChange={Formik.handleChange}
                        value={Formik.values.gender}

                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    {Formik.touched.gender && Formik.errors.gender ? <p>{Formik.errors.gender}</p> : ""}

                </div>


                <div className="btn">
                    <Button variant="contained" endIcon={<SendIcon />} type="submit">
                        Send
                    </Button>
                </div>
            </form>
            <div className="image">
                <img src={bg} alt="" />
            </div>

        </div>
    )
}
export default MyForm;