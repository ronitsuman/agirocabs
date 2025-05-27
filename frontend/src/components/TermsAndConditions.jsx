import React, { useState } from 'react';

const contentData = {
  Introduction: (
    <div>
      <h2 className="text-2xl font-bold mb-4">Introduction</h2>
      <p className="mb-4">
        Welcome to AgiroCabs Host Services ("AgiroCabs Host Services") located at{' '}
        <a href="https://www.agirocabs.com" className="text-blue-600 hover:underline">
          www.agirocabs.com
        </a>{' '}
        (the "Site") and the mobile application (the "App"). The Site and App (each the "Platform") are owned and operated by Agiro Technologies Private Limited, a company incorporated under the Companies Act 1956, having its registered office at Bihta, Bihta, Patna-801103 (also referred to as "AgiroCabs", "we," "us," or "our"). All access and use of the Platform and the services thereon are governed by our general Platform terms, (the "General Terms"), privacy policy available at{' '}
        <a href="https://www.agirocabs.com/privacy-policy" className="text-blue-600 hover:underline">
          https://www.agirocabs.com/privacy-policy
        </a>{' '}
        (the "Privacy Policy"), fee policy ("Fee Policy") and service specific terms.
      </p>
      <p className="mb-4">
        These Terms of Service, including specific terms and conditions applicable to the Hosts and Guests and Addon Services (this "Agreement"/ "Host T&C") read together with the Privacy Policy, Fee Policy and other applicable policies ("Governing Policies"), collectively create the legally binding terms and conditions on which AgiroCabs offers to you or the entity you represent ("you", "User" or "your") the AgiroCabs Host Services (defined below), including your access and use of AgiroCabs Host Services.
      </p>
      <p className="mb-4">
        Please read each of Governing Policies carefully to ensure that you understand each provision and before using or registering on the website or accessing any material, information or availing services through the Platform. If you do not agree to any of its terms, please do not use the Platform or avail any services through the Platform. The Governing Policies take effect when you click an "I Agree" button or checkbox presented with these terms or, if earlier, when you use any of the services offered on the Platform (the "Effective Date"). To serve you better, our Platform is continuously evolving, and we may change or discontinue all or any part of the Platform, at any time and without notice, at our sole discretion.
      </p>
    </div>
  ),
  'Privacy Practices': (
    <div>
      <h2 className="text-2xl font-bold mb-4">Privacy Practices</h2>
      <p className="mb-4">
        We understand the importance of safeguarding your personal information and we have formulated a Privacy Policy to ensure that your personal information is sufficiently protected. We encourage you to read it to better understand how you can update and manage your information on the Platform.
      </p>
    </div>
  ),
  'Amendments / Modifications': (
    <div>
      <h2 className="text-2xl font-bold mb-4">Amendments / Modifications</h2>
      <p className="mb-4">
        AgiroCabs reserves the right to change the particulars contained in the Agreement from time to time and at any time. If AgiroCabs decides to make changes to the Agreement, it will post the new version on the website and update the date specified above or communicate the same to you by other means. Any change or modification to the Agreement will be effective immediately from the date of upload of the Agreement on the Platform. It is pertinent that you review the Agreement whenever we modify them and keep yourself updated about the latest terms of Agreement because if you continue to use the AgiroCabs Host Services after we have posted modified Agreement, you are indicating to us that you agree to be bound by the modified Agreement. If you don't agree to be bound by the modified terms of the Agreement, then you may not use the AgiroCabs Host Services anymore.
      </p>
    </div>
  ),
  'AgiroCabs Host Services': (
    <div>
      <h2 className="text-2xl font-bold mb-4">AgiroCabs Host Services</h2>
      <p className="mb-4">
        AgiroCabs Host Services is a marketplace feature of the Platform more particularly described below. That helps owners of vehicles ("Hosts"/ "Lessors") connect with users in temporary need of a vehicle on leasehold basis ("Guest") for their personal use ("AgiroCabs Host Services"). AgiroCabs does not itself lease or deal with such vehicles in any manner whatsoever and only provides a service connecting the Hosts to the Guests so they may enter into a Lease Agreement (defined below). You understand and agree that AgiroCabs is not a party to the Lease Agreement entered into between you as the Host of the vehicle or you as the Guest of the vehicle, nor is AgiroCabs a transportation service, agent, or insurer. AgiroCabs has no control over the conduct of the Users of the AgiroCabs Host Services and disclaims all liability in this regard.
      </p>
      <p className="mb-4">
        AgiroCabs Host Services aims to establish and provide a robust marketplace of reliable Hosts and Guests. Although AgiroCabs Host Services provides support for the transaction between Hosts and Guests, we do not guarantee the quality or safety of the vehicles listed on the Platform, nor can we guarantee the truth or accuracy of any listings, or whether Hosts and Guests will consummate a transaction, including the completion of any payment obligations.
      </p>
    </div>
  ),
  'Services Information': (
    <div>
      <h2 className="text-2xl font-bold mb-4">Services Information</h2>
      <p className="mb-4">
        AgiroCabs Host Services comprises of (a) the marketplace feature of the Platform{' '}
        <a href="https://www.agirocabs.com/host" className="text-blue-600 hover:underline">
          https://www.agirocabs.com/host
        </a>{' '}
        that enables Hosts and Guests satisfying the applicable eligibility criteria listed below to connect with one another for leasing of vehicle for personal use; and (b) support/facilitation services for leasing including, among others, assistance with execution of the lease agreement, payment facilitation, vehicle cleaning/sanitization, vehicle delivery, on-road assistance, prospective Guest diligence and vehicle usage/location tracking ("Add-on Services"); and (iii) web widgets, feeds, mobile device software applications, applications for third-party web sites and services, and any other mobile or online services and/or applications owned, controlled, or offered by AgiroCabs.
      </p>
      <p className="mb-4">
        AgiroCabs attempts to be as accurate as possible in the description of the AgiroCabs Host Services. However, AgiroCabs does not warrant that the AgiroCabs Host Services, information or other content of the platform is accurate, complete, reliable, current or error-free. The Platform may contain typographical errors or inaccuracies and may not be complete or current.
      </p>
      <p className="mb-4">
        AgiroCabs reserves the right to correct, change or update information, errors, inaccuracies, subjective conclusions, interpretations, views, opinions or even human error, or omissions at any time (including after an order has been submitted) without prior notice. Please note that such errors, inaccuracies, or omissions may also relate to availability and AgiroCabs Host Services. The user of the AgiroCabs Host Services shall not hold AgiroCabs liable for any loss or damage relating to the same.
      </p>
    </div>
  ),
  Eligibility: (
    <div>
      <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
      <p className="mb-4">
        The AgiroCabs Host Services are intended solely for users who are 19 years or older and satisfy user specific criteria below. Any use of the AgiroCabs Host Services by anyone that does not meet these requirements is expressly prohibited. Any misrepresentation with regards to or circumvention of the Eligibility Criteria shall render the Host liable to termination from the Platform and further legal action as the case may be.
      </p>
      <h3 className="text-xl font-semibold mb-2">Host/Vehicle Eligibility Criteria</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>The Host must have valid passport, Aadhar number and/or other form of government issued identification document.</li>
        <li>The vehicle(s) proposed to be listed must be eligible non-transport or private personal use vehicle registered solely in your name. At the time of listing the vehicle(s) being listed should also not have any pending insurance claims and/or other on-going litigations, legal claims or any other claims that may arise in tort or law.</li>
        <li>Your vehicle must have valid registration certificate issued by relevant regional transport authority under Motor Vehicles Act, 1988 ("MVA").</li>
        <li>Your vehicle must be less than 7 years old and should meet all legal requirements of the state of its registration and usage.</li>
        <li>Your vehicle must be clean, well maintained and have the basic accessories, including safety device as per our maintenance, component and safety standards/equipment specifications attached hereto as Annexure I.</li>
        <li>You must abide by our exclusivity policy, which mandated that vehicle you list on Platform must be exclusively shared on the Platform and can't appear on another car sharing/leasing platform.</li>
        <li>Your vehicle must meet our minimum insurance requirements of having Third Party Comprehensive Insurance as is mandated under Motor Vehicle Act, 1988.</li>
        <li>Your vehicle must have fewer than 80000 kilometres and have never been declared a total loss.</li>
        <li>If You have opted for fitment of In-Vehicle Devices, You must have get the same installed and ready at the time of listing the vehicle.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Guest Eligibility Criteria</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>The Guest must have a valid driving license issued by appropriate authority under Government of India.</li>
        <li>The Guest must have valid passport, Aadhar number and/or other form of government issued identification document.</li>
        <li>The Guest must be legally solvent with a minimum monthly income of not less than INR 30,000 as substantiated by bank account statement of 6 months.</li>
        <li>The Guest must have no recent vehicle accidents in the last year, major traffic violations in the last 1 year, more than 2 recent moving violations and history of non-payment of failure to pay.</li>
        <li>The Guest must have a clean criminal record, including but not limited to no felony(s), no violent crime(s), theft(s) or offence related to prohibited substance(s).</li>
      </ul>
    </div>
  ),
  // Add remaining sections here following the same pattern
  // For brevity, only a few sections are included. You can add others like 'Registering and Creating Your Account', 'Vehicle Delivery', etc.
};

const Sidebar = ({ sections, setSelectedSection }) => {
  return (
    <div className="w-64 bg-gray-100 h-screen fixed top-0 left-0 overflow-y-auto">
      <h2 className="text-xl font-bold p-4 border-b">Sections</h2>
      <ul className="p-4">
        {Object.keys(sections).map((section) => (
          <li key={section} className="mb-2">
            <button
              className="text-left text-blue-600 hover:underline w-full"
              onClick={() => setSelectedSection(section)}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Content = ({ content }) => {
  return (
    <div className="ml-64 p-8 max-w-4xl mx-auto">
      {content}
    </div>
  );
};

const TermsAndConditions = () => {
  const [selectedSection, setSelectedSection] = useState('Introduction');

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">AgiroCabs Terms and Conditions</h1>
      </header>
      <div className="flex flex-1">
        <Sidebar sections={contentData} setSelectedSection={setSelectedSection} />
        <Content content={contentData[selectedSection]} />
      </div>
    </div>
  );
};

export default TermsAndConditions;