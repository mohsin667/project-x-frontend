import React from "react";
import { Form, Input, Button } from "antd";

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
    
    // Send data to API
    fetch("https://project-x-backend-puce.vercel.app/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success here (e.g., show a success message, navigate to login page, etc.)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error here (e.g., show an error message)
      });
  };

  return (
    <div style={{ width: 450, margin: "50px auto", padding: "30px 50px", background: "#fff" }}>
      <h2>Project X</h2>
      <Form
        form={form}
        name="registerForm"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
      >
        {/* Name Field */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        {/* Email Field */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
