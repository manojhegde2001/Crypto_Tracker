import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be must"),
  lastName: yup.string(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
});

function Form() {
  const { register, handleSubmit, formState: { errors } ,reset} = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data:any) => {
    console.log(data);
    reset();
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-4 shadow-2xl bg-slate-300 rounded-2xl">
        <div className="text-2xl font-semibold text-center mb-4">Sign Up</div>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-4">
            <input
              type="text"
              {...register("firstName")}
              placeholder="First Name..."
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
            <p className="text-red-500">{errors?.firstName?.message}</p>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name..."
              {...register("lastName")}
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
            <p className="text-red-500">{errors?.lastName?.message}</p>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email..."
              {...register("email")}
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
            <p className="text-red-500">{errors?.email?.message}</p>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Age..."
              {...register("age")}
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
            <p className="text-red-500">{errors?.age?.message}</p>
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password..."
              {...register("password")}
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
            <p className="text-red-500">{errors?.password?.message}</p>
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password..."
              {...register("confirmPassword")}
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
            <p className="text-red-500">{errors?.confirmPassword?.message}</p>
          </div>
          <div className="text-center">
            <button
              type="submit"
              id="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
