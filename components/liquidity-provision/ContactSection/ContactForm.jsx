'use client'
import * as React from "react";
import FormInput from "./FormInput";
import { Dropdown, Menu } from 'antd';

const formFields = [
  { label: "Full name", type: "text", required: true },
  { label: "Business E-mail", type: "email", required: true },
  { label: "Phone Number", type: "tel", required: false },
];

const menu = (
  <Menu
    items={[
      {
        label: 'Liquidity Provision',
        key: 'Liquidity Provision',
      },
      {
        label: 'High-Frequency Trading',
        key: 'High-Frequency Trading',
      },
    ]}
  />
);

function ContactForm() {


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex z-0 flex-col self-stretch mt-8 w-full text-base tracking-tight text-slate-500 max-md:max-w-full">
      {formFields.map((field) => (
        <FormInput
          key={field.label}
          label={field.label}
          type={field.type}
          required={field.required}
        />
      ))}
      
      <Dropdown overlay={menu} trigger={['click']}>
      <div className="flex flex-wrap gap-2.5 items-center p-2.5 w-full border-b border-indigo-300 max-md:max-w-full cursor-pointer">
        <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
          Choose a service
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ac741283b4a88e84635b3b48c5758e7f5b484bba28aba1f9eaecacb2079bc3e?placeholderIfAbsent=true&apiKey=5f3d3068f7634759bee728f966e36875"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
      </div>
    </Dropdown>
      
      <button 
        type="submit"
        className="btn-contact-us w-fit mt-[24px]"
      >
        Send
      </button>
      
      <div className="mt-6 text-[#3B404F]">
        By submitting this form you agree to our{" "}
        <a href="/privacy" className="font-medium text-[#2684FF]">Privacy Policy</a>.
      </div>
    </form>
  );
}

export default ContactForm;