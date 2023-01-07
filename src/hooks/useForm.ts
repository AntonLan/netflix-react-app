import {useState} from "react";

export function useForm() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const changeHandler = (event: any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }


    return {form, changeHandler}
}