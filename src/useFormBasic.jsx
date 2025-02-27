import React from "react";
// import { useForm } from "react-hook-form";

// export default function UseFormBasic() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log("Form Submitted:", data);

//   console.log("Watching Input:", watch("example")); // Watch input value

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label htmlFor="example">Example</label>
//       <input id="example" defaultValue="test" {...register("example")} />

//       <label htmlFor="exampleRequired">Required Field</label>
//       <input id="exampleRequired" {...register("exampleRequired", { required: true })} />
//       {errors.exampleRequired && <span style={{ color: "red" }}>This field is required</span>}

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// .......................................................................

// import { useForm } from "react-hook-form"


// export default function UseFormBasic() {
    //   const { register, handleSubmit } = useForm()
    //   const onSubmit = (data) => console.log(data)


//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   )
// }
// .......................................................................

// import { useForm } from "react-hook-form"


// export default function UseFormBasic() {
//   const { register, handleSubmit } = useForm()
//   const onSubmit = (data) => console.log(data)


//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true, maxLength: 20, minLength:4 })} />
//       <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
//       <input type="number" {...register("age", { min: 18, max: 99 })} />
//       <input type="submit" />
//     </form>
//   )
// }
// .......................................................................

// import { useForm } from "react-hook-form"


// // The following component is an example of your existing Input Component
// const Input = ({ label, register, required }) => (
//   <>
//     <label>{label}</label>
//     <input {...register(label, { required })} />
//   </>
// )


// // you can use React.forwardRef to pass the ref too
// const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
//   <>
//     <label>{label}</label>
//     <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
//       <option value="20">20</option>
//       <option value="30">30</option>
//     </select>
//   </>
// ))


// const UseFormBasic = () => {
//   const { register, handleSubmit } = useForm()


//   const onSubmit = (data) => {
//     alert(JSON.stringify(data))
//   }


//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input label="First Name" register={register} required />
//       <Select label="Age" {...register("Age")} />
//       <input type="submit" />
//     </form>
//   )
// }
// export default UseFormBasic;

// .......................................................................

import Select from "react-select"
import { useForm, Controller } from "react-hook-form"
import { Input } from "@mui/material"; 


const UseFormBasic = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  })
  const onSubmit = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <Controller
        name="select"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
      />
      <input type="submit" />
    </form>
  )
}
export default UseFormBasic;