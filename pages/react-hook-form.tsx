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
  place: yup.string().required(),
  switch: yup.boolean().required("Switch is Required"),
  image: yup.mixed().required(),
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
          
          <div className="mb-4">
  <label htmlFor="place" className="block text-gray-700 font-semibold">Select a Place</label>
  <select
    id="place"
    {...register("place")}
    className="w-full px-3 py-2 border rounded-md outline-none text-gray-700"
  >
    <option value="Banglore">Banglore</option>
    <option value="Chennai">Chennai</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Delhi">Delhi</option>
    <option value="Kolkata">Kolkata</option>
  </select>
  <p className="text-red-500">{errors?.place?.message}</p>
</div>


<div className="mb-4">
  <label htmlFor="switch" className="block text-gray-700 font-semibold">Switch</label>
  <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" id="switch" {...register("switch")} />
    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Available</span>
  </label>
  <p className="text-red-500">{errors?.switch?.message}</p>
</div>

<div className="mb-4">
  <label htmlFor="image" className="block text-gray-700 font-semibold">Select Image</label>
  <div className="flex items-center space-x-2">
    <input type="file" id="image" accept="image/*" {...register("image")} className="border rounded-md p-2" />
  </div>
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
