import { useFormik } from "formik";
import registerSchema from "./schemas/register.schema";

function App() {
    const {
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
        handleSubmit,
        isSubmitting,
    } = useFormik({
        initialValues: {
            name: "",
            age: "",
            email: "",
            course: "",
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className="w-screen min-h-screen flex justify-center items-center bg-slate-800 text-white">
            <div className="border border-gray-400 py-5 px-10 rounded-xl">
                <h1 className="text-2xl text-center font-semibold underline">
                    Student Registration Form
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="mt-4 flex flex-col gap-y-2"
                >
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="name" className="font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="px-3 py-2 border border-gray-400 rounded-lg text-black"
                        />
                        {errors.name && touched.name && (
                            <p className="text-sm text-red-400">
                                {errors.name}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="age" className="font-semibold">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            min={10}
                            placeholder="Enter your age"
                            value={values.age}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="px-3 py-2 border border-gray-400 rounded-lg text-black"
                        />
                        {errors.age && touched.age && (
                            <p className="text-sm text-red-400">{errors.age}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="email" className="font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="px-3 py-2 border border-gray-400 rounded-lg text-black"
                        />
                        {errors.email && touched.email && (
                            <p className="text-sm text-red-400">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="course" className="font-semibold">
                            Course
                        </label>
                        <select
                            name="course"
                            id="course"
                            value={values.course}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="px-3 py-2 border border-gray-400 rounded-lg text-black"
                        >
                            <option value="" disabled>
                                Select your course
                            </option>
                            <option value="computer-science">
                                Computer Science
                            </option>
                            <option value="information-technology">
                                Information Technology
                            </option>
                            <option value="electronics">Electronics</option>
                            <option value="mechanical-engineering">
                                Mechanical Engineering
                            </option>
                            <option value="civil-engineering">
                                Civil Engineering
                            </option>
                        </select>
                        {errors.course && touched.course && (
                            <p className="text-sm text-red-400">
                                {errors.course}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="my-4 bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded-lg font-bold"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
