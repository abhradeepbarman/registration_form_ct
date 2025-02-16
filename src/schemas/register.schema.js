import * as Yup from "yup";

const registerSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
    age: Yup.number()
        .min(10, "Age must be at least 10")
        .required("Age is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    course: Yup.string()
        .required("Course is required")
        .equals([
            "computer-science",
            "information-technology",
            "electronics",
            "mechanical-engineering",
            "civil-engineering",
        ]),
});

export default registerSchema;
