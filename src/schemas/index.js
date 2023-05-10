import * as Yup from "yup";
export const submitSchema=Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter name"),
    age:Yup.number().positive().integer().required("please enter age"),
    gender:Yup.string().oneOf(["male","female","other"]).required("Pease select gender")
})