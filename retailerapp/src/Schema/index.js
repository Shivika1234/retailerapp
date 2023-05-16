import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    id : Yup.string().min(1).max(25).required("Please enter user id"),
    password : Yup.string().min(6).required("Please enter password")
});