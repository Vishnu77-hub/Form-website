import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MyForm = () => {
  // Initialize the useForm hook
  const { register
    , handleSubmit, formState: { errors }, reset } = useForm({
    mode: "onChange" // Validate on change (real-time validation)
  });

  // Form submission handler
  const onSubmit = (data) => {
    // Display form data in alert
    const hiddenData = { ...data, password: "********" }; // Hide password
    alert(JSON.stringify(hiddenData, null, 2));
    reset(); // Reset the form after submission
  };

  const [password, setPassword] = useState("");

  // Function to check password conditions
  const validatePassword = (value) => {
    setPassword(value);
    return true; // We validate dynamically below, so no need to return false here
  };

  const passwordErrors = {
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    specialChar: /[@$!%*?&]/.test(password),
    minLength: password.length >= 8,
  };

    const isPasswordValid = password.length > 0 &&
    passwordErrors.uppercase &&
    passwordErrors.lowercase &&
    passwordErrors.number &&
    passwordErrors.specialChar &&
    passwordErrors.minLength;

  return (
    <div className="container">
      <h1 className="text-center my-4">Sign Up Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container shadow p-4 rounded">

        {/* Name Input with Validation */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            {...register("name", {
              required: "Name is required",
              pattern: { value: /^[A-Z][a-zA-Z]*$/, message: "First letter should be capital and only letters are allowed" },
              minLength: { value: 3, message: "Name must be at least 3 characters" },
              maxLength: { value: 50, message: "Name cannot exceed 50 characters" }
            })}
            placeholder="Enter your name"
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        {/* Email Input with Validation */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[a-zA-Z0-9]+@gmail\.com$/, message: "Only G-mail is allowed or Invalid email address" }
            })}
            placeholder="Enter your email"
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        {/* Password Input with Validation */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className={`form-control ${password.length > 0 && !isPasswordValid ? 'is-invalid' : ''}`}
            {...register("password", {
              required: "Password is required",
              validate: validatePassword, // Triggers real-time validation
            })}
            placeholder="Enter your Strong Password"
          />
         {/* Show validation messages only when password is NOT empty and invalid */}
         {password.length > 0 && !isPasswordValid && (
            <div>
              <p>Password must contain:</p>
              <ul>
                <li style={{ color: passwordErrors.uppercase ? "green" : "red" }}>
                  • At least one uppercase letter
                </li>
                <li style={{ color: passwordErrors.lowercase ? "green" : "red" }}>
                  • At least one lowercase letter
                </li>
                <li style={{ color: passwordErrors.number ? "green" : "red" }}>
                  • At least one number
                </li>
                <li style={{ color: passwordErrors.specialChar ? "green" : "red" }}>
                  • At least one special character (@$!%*?&)
                </li>
                <li style={{ color: passwordErrors.minLength ? "green" : "red" }}>
                  • Minimum 8 characters
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Phone Number Input with Validation */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            {...register("phone", {
              required: "Phone number is required",
              pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" }
            })}
            placeholder="Enter your phone number"
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
        </div>

        {/* Age Input with Validation */}
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            id="age"
            className={`form-control ${errors.age ? 'is-invalid' : ''}`}
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "Age must be at least 18" },
              max: { value: 100, message: "Age must be less than 100" }
            })}
            placeholder="Enter your age"
          />
          {errors.age && <div className="invalid-feedback">{errors.age.message}</div>}
        </div>

        {/* Address Input with Validation */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            id="address"
            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
            {...register("address", { required: "Address is required" })}
            placeholder="Enter your address"
          />
          {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
        </div>

        {/* Gender Selection */}
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select
            id="gender"
            className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
            {...register("gender", { required: "Gender is required" })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <div className="invalid-feedback">{errors.gender.message}</div>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100 mb-3">Submit</button>

        {/* Reset Button */}
        <button type="button" onClick={() => reset()} className="btn btn-secondary w-100">Reset</button>
      </form>
    </div>
  );
};

export default MyForm;
