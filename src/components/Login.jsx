import React from "react";
import { Form, Input, Button, message } from "antd";

const Login = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Form Values:", values);

        // Send data to API
        fetch("https://project-x-backend-puce.vercel.app/api/users/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to log in. Please try again.");
                }
                return response.json();
            })
            .then((data) => {
                if (data.verified === false) {
                    message.error("Please verify your email before logging in.");
                } else {
                    message.success("Login successful!");
                    console.log("Success:", data);
                    // Handle successful login (e.g., navigate to dashboard)
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                message.error(error.message || "An unexpected error occurred.");
            });
    };

    return (
        <div style={{ width: 450, margin: "50px auto", padding: "30px 50px", background: "#fff" }}>
            <h2>Project X</h2>
            <Form
                form={form}
                name="loginForm"
                layout="vertical"
                onFinish={onFinish}
                initialValues={{
                    email: "",
                    password: "",
                }}
            >
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
                    <Button type="primary" htmlType="submit" block>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
