import * as yup from "yup"

export const commentSchema = yup.object({
    fullname: yup.string().required("نام الزامی است"),
    title: yup.string().required("عنوان الزامی است"),
    content: yup.string().required("موضوع الزامی است")
})
