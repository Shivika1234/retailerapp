import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    id : Yup.string().min(1).max(25).required("Please enter user id"),
    password : Yup.string().min(6).required("Please enter password")
});

export const retailerRegistrationSchema = Yup.object({
    retailer_id : Yup.string().min(1).max(25).required("Please enter user id"),
    shop_name : Yup.string().min(6).required("Please enter password"),
    password : Yup.string().min(1).max(25).required("Please enter user id"),
    ownername : Yup.string().min(1).max(25).required("Please enter user id"),
    registration_no : Yup.string().min(1).max(25).required("Please enter user id"),
    registration_doc : Yup.string().min(1).max(25).required("Please enter user id"),
    profile_photo : Yup.string().min(1).max(25).required("Please enter user id"),
    gst_no : Yup.string().min(1).max(25).required("Please enter user id"),
    pan_no : Yup.string().min(1).max(25).required("Please enter user id"),
    address : Yup.string().min(1).max(25).required("Please enter user id"),
    state : Yup.string().min(1).max(25).required("Please enter user id"),
    city : Yup.string().min(1).max(25).required("Please enter user id"),
    pincode : Yup.string().min(1).max(25).required("Please enter user id"),
    contact_no : Yup.string().min(1).max(25).required("Please enter user id"),
    email : Yup.string().min(1).max(25).required("Please enter user id")
});