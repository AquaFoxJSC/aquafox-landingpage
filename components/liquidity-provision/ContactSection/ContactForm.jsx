"use client";
import * as React from "react";
import { Form, Input, Button, Dropdown, Menu, message } from "antd";
import { arrowDown } from "@/constant/svg";
import { send } from "emailjs-com";

const USER_ID = "user_SxsqgAlOEcO0pqtfE06cV"; // userID
const TEMPLATE_ID = "template_ez0ert8"; // templateID
const SERVICE_ID = "service_lneq30g"; // serviceID

const formFields = [
  { label: "Full name", name: "fullName", type: "text", required: true },
  { label: "Business E-mail", name: "email", type: "email", required: true },
  { label: "Phone Number", name: "phone", type: "tel", required: false },
];

const menu = (onChange) => (
  <Menu
    items={[
      { label: "Liquidity Provision", key: "Liquidity Provision" },
      { label: "High-Frequency Trading", key: "High-Frequency Trading" },
    ]}
    onClick={(e) => onChange(e.key)} // Pass the selected key to the onChange function
  />
);

function ContactForm() {
  const [selectedService, setSelectedService] = React.useState("");
  const [form] = Form.useForm(); // Initialize form instance

  const handleSubmit = async (values) => {
    try {
      const messageContent = `Full name: ${values.fullName}\n
      Email: ${values.email}\n
      Phone: ${values.phone || ""}\n
      Service: ${values.service}\n`;
      await send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          message: messageContent,
        },
        USER_ID
      );
      message.success("Send Request successfully");
      form.resetFields()
      setSelectedService('')
    } catch (err) {
      console.log(err);
      message.success("Send Request failed");
    }
  };

  const handleServiceChange = (selectedKey) => {
    setSelectedService(selectedKey); // Update the selected service

    form.setFieldsValue({
      service: selectedKey,
    });
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      className="flex z-0 flex-col self-stretch mt-8 w-full text-base tracking-tight text-slate-500 max-md:max-w-full"
    >
      {formFields.map((field) => (
        <Form.Item
          key={field.label}
          label={field.label}
          name={field.name}
          rules={[
            {
              required: field.required,
              message: `${field.label} is required!`,
            },
          ]}
          labelCol={{ span: 0 }} // Hide the label
          wrapperCol={{ span: 24 }} // Ensure the input takes up full width
        >
          <Input
            type={field.type}
            placeholder={field.label}
            aria-label={field.label}
            className="border-0 rounded-none gap-2.5 self-stretch p-2.5 w-full border-b border-indigo-300 max-md:max-w-full bg-transparent"
          />
        </Form.Item>
      ))}

      <Form.Item
        label="Services"
        name="service"
        labelCol={{ span: 0 }}
        rules={[{ required: true, message: `Please select service` }]}
      >
        <Dropdown overlay={menu(handleServiceChange)} trigger={["click"]}>
          <div className="flex flex-wrap gap-2.5 items-center p-2.5 w-full border-b border-indigo-300 max-md:max-w-full cursor-pointer">
            <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
              {selectedService || "Select Service"}
            </div>
            {arrowDown}
          </div>
        </Dropdown>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="btn-contact-us w-fit mt-[24px]"
        >
          Send
        </Button>
      </Form.Item>

      <div className="mt-6 text-[#3B404F]">
        By submitting this form you agree to our{" "}
        <a href="/privacy" className="font-medium text-[#2684FF]">
          Privacy Policy
        </a>
        .
      </div>
    </Form>
  );
}

export default ContactForm;
