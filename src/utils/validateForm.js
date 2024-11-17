import { mixed, object, string } from "yup";

let userSchema = object({
    fullname: string().required("El campo nombre es requerido"),
    phone: mixed().required("El campo telefono es requerido"),
    email: string().required("El email debe llevar @"),
    confirmemail: string().required("Este campo tiene que ser igual a email")
})

const validateForm = async(dataForm) => {
    try{
        await userSchema.validate(dataForm)
        return { status : "success"}

    } catch (error) {
        return { status : "error", message: error.message}

    }

}

export default validateForm