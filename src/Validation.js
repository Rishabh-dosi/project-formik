import * as Yup from "yup";

export const schema = Yup.object({
    email: Yup.string().required("email is required").email("email is not valid"),
    address: Yup.string().required("Address is required field").min(10 , "address should be mentioned in more than 10 letters"),
    gender: Yup.string().required("gender is required"),
    country: Yup.string().required("please mention your country"),

    
})
