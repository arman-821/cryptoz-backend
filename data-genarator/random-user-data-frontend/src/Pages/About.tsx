import React from 'react'

export default function About() {
  return (
    <div className="font-sans bg-white px-4 py-12  min-h-[100vh]">
      <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="text-left">
          <h2 className="text-gray-800 text-3xl font-bold mb-6">About</h2>
          <p className="mb-4 text-sm text-gray-500">Welcome to our Random User Data Generator, a reliable and straightforward tool designed to produce realistic, fake user data for your testing and development needs. Our service offers an easy way to create mock user profiles without the hassle of collecting real personal information.

Whether you are a software developer, tester, or designer, having access to random user data can greatly enhance the efficiency of your projects. By using our tool, you can populate your databases, test your applications, and simulate real-world scenarios with randomly generated user data.

Our generator is designed with simplicity in mind. With just a few clicks, you can generate user profiles that include a variety of details such as names, email addresses, phone numbers, and more. Each piece of data is randomly created to ensure uniqueness and authenticity, helping you to achieve more accurate test results.

We prioritize ease of use and speed, making sure that you can quickly generate the data you need without unnecessary steps. There's no need for customization; our tool provides a straightforward approach to creating user data, making it an essential resource for any development toolkit.

Thank you for choosing our Random User Data Generator. We are committed to providing you with a seamless experience as you work on your projects. If you have any feedback or suggestions, please feel free to reach out to us.</p>
        </div>
        <div>
          <img src="https://readymadeui.com/management-img.webp" alt="Placeholder Image" className="rounded-lg object-contain w-full h-full" />
        </div>
      </div>
    </div>

  )
}
