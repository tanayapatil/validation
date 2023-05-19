import * as Yup from "yup";
import "yup-phone-lite";
export const submitSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter name"),
    age: Yup.number().positive().integer().required("please enter age"),
    gender: Yup.string().oneOf(["male", "female", "other"]).required("Pease select gender"),
    mobile: Yup.string().phone("IN", true, '${path} is invalid').required("please enter number"),
    governmentIdType: Yup.string().oneOf(["adhar", "pan"]).required("Pease select governmentId"),
    governmentIdAdhar: Yup.string()
        .when(' governmentIdType', {
            is: 'adhar',
            then: () => Yup.number().test('len', ' 12 digits number require', (val) => val.toString().length == 12)
                .required('adhar number is required.'),
        }),
    governmentIdPan: Yup.string()
        .when(' governmentIdType', {
            is: 'pan',
            then: () => Yup
                .string()
                .required('Please Enter pancard number')
                .matches(
                    /[A-Z]{5}[0-9]{4}[A-Z]{1}/,
                    "Must Contain five upper case alphabets, four numbers,  one upper case alphabet "
                ),
        }),

    emergencyNo: Yup.string().phone("IN", true, '${path} is invalid').required("please enter emergency contact number"),
    email:Yup.string().email("Field should contain a valid e-mail").max(255).required("E-mail is required")








})