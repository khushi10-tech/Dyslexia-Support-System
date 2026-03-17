import { useState } from "react";
import axios from "axios";

export default function Signup() {

  const avatars = ["😊","🦁","🐼","🦊","🐯","🐸","🦄","🐨","🐷","🐶","🐱","🦉"];

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
    agree: false
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

  };

  const selectAvatar = (avatar) => {
    setFormData({ ...formData, avatar });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!formData.agree) {
      alert("Please accept terms and conditions");
      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.username,
          email: formData.email,
          password: formData.password,
          avatar: formData.avatar
        }
      );

      alert(response.data.message);

      console.log("User Registered:", response.data);

    } catch (error) {

  console.error("Signup error:", error);

  if (error.response && error.response.data.message) {
    alert(error.response.data.message);
  } else {
    alert("Server error");
  }

}

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500 p-6">

      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-lg p-10">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-700">
            Join LearnSmart! 🎉
          </h1>
          <p className="text-gray-500 mt-2">
            Start your learning adventure today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="font-semibold">Choose a Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
              className="w-full border p-3 rounded-xl mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              onChange={handleChange}
              className="w-full border p-3 rounded-xl mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">Create Password</label>

            <div className="flex">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                onChange={handleChange}
                className="w-full border p-3 rounded-l-xl mt-2"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="bg-gray-200 px-4 mt-2 rounded-r-xl"
              >
                👁
              </button>
            </div>

          </div>

          <div>
            <label className="font-semibold">Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleChange}
              className="w-full border p-3 rounded-xl mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">Pick Your Avatar</label>

            <div className="grid grid-cols-6 gap-4 mt-4">
              {avatars.map((avatar, index) => (

                <button
                  key={index}
                  type="button"
                  onClick={() => selectAvatar(avatar)}
                  className={`text-3xl p-4 rounded-xl border
                  ${formData.avatar === avatar ? "bg-purple-200" : "bg-gray-100"}`}
                >
                  {avatar}
                </button>

              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agree"
              onChange={handleChange}
            />
            <span className="text-sm">
              I agree to the Terms and Conditions
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-semibold"
          >
            Create My Account →
          </button>

        </form>

      </div>
    </div>
  );
}