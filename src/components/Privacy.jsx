import React from 'react'

function Privacy() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 px-8 py-28">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal
          information when you use our Weather App.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Information We Collect</h2>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>
            <span className="font-semibold">Location Data:</span> To provide accurate weather forecasts, we may collect
            your location information if you grant us permission.
          </li>
          <li>
            <span className="font-semibold">Usage Data:</span> We collect data on how you interact with our app to
            improve user experience.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">How We Use Your Information</h2>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Provide accurate weather forecasts based on your location.</li>
          <li>Improve app functionality and user experience.</li>
          <li>Send occasional updates or notifications related to the app.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">How We Protect Your Information</h2>
        <p className="mt-4 text-gray-700">
          We implement industry-standard security measures to protect your information from unauthorized access or
          disclosure. However, no data transmission or storage system is completely secure, and we cannot guarantee the
          absolute security of your information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Third-Party Services</h2>
        <p className="mt-4 text-gray-700">
          We may use third-party services, such as weather APIs or analytics tools, that process your data to enhance
          our services. These services adhere to their own privacy policies.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Your Choices</h2>
        <p className="mt-4 text-gray-700">
          You can control the information you share with us by adjusting your device settings or declining location
          permissions. Please note that some features of the app may not function correctly without access to your
          location.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Changes to This Privacy Policy</h2>
        <p className="mt-4 text-gray-700">
          We may update this Privacy Policy from time to time. We encourage you to review this page periodically for
          any changes. Your continued use of the app constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Contact Us</h2>
        <p className="mt-4 text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a
            href="mailto:support@weatherapp.com"
            className="text-blue-500 underline"
          >
            support@weatherapp.com
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default Privacy