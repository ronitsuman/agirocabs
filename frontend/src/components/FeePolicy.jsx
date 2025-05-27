import React from 'react';

const FeePolicy = () => {
  const sections = [
    {
      title: "Fee Policy",
      content: [
        "Here is a list of fees/penalties for scenarios after you have created your booking/reservation:"
      ]
    },
    {
      title: "Lease Rental Fee",
      content: [
        "For each booking made through the AgiroCabs Platform, the Guest shall have to pay Lease Rental in advance which shall include:",
        "- Lease Rental is calculated on the basis of the start and the end time of the trip.",
        "- The Lease Rental fee per hour is dynamically driven and it changes based on the demand, lead time to booking start, location of the booking, vehicle chosen and the duration of the booking."
      ]
    },
    {
      title: "Refunds, Charges and Payments",
      content: [
        "All refunds will be initiated to the original payment account or mode. The refund process will begin immediately upon receiving the cancellation request. However, it may take 5-15 days for the refund to reflect in the Guest's account.",
        "Any payments owed by Guests under this Fee Policy or other applicable policies will be deducted from the security deposit, if applicable. The balance, if any, pending from the Guest, must be paid electronically by the guest within 24 hours of the booking end time, following AgiroCabs's payment instructions.",
        "Guests may incur a processing fee for declined credit or debit card payments.",
        "In the event of a payment default, AgiroCabs is entitled to charge reminder fees and default interest in accordance with legal provisions. AgiroCabs may also engage third parties to collect any outstanding amounts owed by a guest.",
        "AgiroCabs reserves the right to prohibit subsequent bookings on the platform until all outstanding fees in the Guest's account have been fully paid. Guests can check their booking history in the app to view a detailed breakdown of charges.",
        "Guests should not make any direct payments to the host or any AgiroCabs executive, except for settlements related to fuel or FASTag.",
        "Cancellation made after booking start time, no refund of lease rental paid in advance will be credited.",
        "Notwithstanding any contrary provisions, AgiroCabs reserves the right to withhold refunds for cancellations if it perceives, at its sole discretion, any credit card fraud by the user or if the cancellations are made with the intent to defraud AgiroCabs.",
        "Home Delivery and Airport Delivery Charges for Cancelled booking:",
        "- Cancellation by Guest 0-6 hours before booking start time or made after booking start time, 50% of the Delivery Fee shall be deducted and passed on to the Host. The remaining shall be refunded to the Guest.",
        "- Cancellation made between at least 6 or more hours before booking start time, 100% of the Delivery Fee shall be refunded to the Guest.",
        "- In the event of cancellation by the Host, the Guest will be entitled to a refund of 100% of the Lease Rental and the home delivery charges.",
        "(Applicable in New Delhi, Vijayawada, Nashik, Mysore, Mangalore, Siliguri, Bhopal, Lucknow, Coimbatore, Vadodara, Madurai, Guwahati, Nagpur, Goa, Pune, Mumbai, Kochi, Chandigarh) For cancellations made 24 hours before the booking start time, a flat cancellation fee of 50% of the Lease Rental paid in advance or INR 4000 (whichever is lesser) will be deducted. Remaining portion, after deduction of Platform Fee, will be refunded."
      ]
    },
    {
      title: "Reschedule before booking start time",
      content: [
        "No modifications are allowed to the scheduled booking within 0-2 hours before the booking start time."
      ]
    },
    {
      title: "Extension",
      content: [
        "Guests may extend the booking period at any time, before the end of the booking, at the normal tariff.",
        "For Home Delivery bookings, extending the booking within 2 hours of the booking's end time will result in the cancellation of Doorstep Collection, and no refunds will be provided for the Home Delivery Fee.",
        "If a booking is extended and the Host has disabled Home Delivery/Collection during the extended period, the Guest must drop off the vehicle at the designated location. In such cases, the guest will be entitled to a 50% refund of the Delivery Fee."
      ]
    },
    {
      title: "Shortening post start",
      content: [
        "Dropping the vehicle before the booking end time is allowed. However, no additional charges or refunds will be applicable for early drop-off."
      ]
    },
    {
      title: "Shortening/Rescheduling within 24 hrs of booking start or booking end",
      content: [
        "Guests cannot change the booking start time or shorten the booking end time within 2 hours prior to the booking start time. No refunds will be applicable for such modifications. However, Guests may extend the booking at any time, subject to the extension terms provided above."
      ]
    },
    {
      title: "Late Return",
      content: [
        "A late return will incur charges up to 1.5-2 times the hourly lease rental fee per hour, as communicated at the time of booking."
      ]
    },
    {
      title: "Minimum Duration",
      content: [
        "The minimum booking duration, also known as the 'minimum billing duration,' for guests shall be 48 hours."
      ]
    },
    {
      title: "Discounts",
      content: [
        "Discounts, when announced, apply only to trips lasting 4 hours or more.",
        "Discounts apply solely to the lease rental paid in advance to book the vehicle and are not applicable on blackout days.",
        "AgiroCabs reserves the right to cancel a booking if unwarranted use of a discount coupon is identified."
      ]
    },
    {
      title: "Fuel Policy",
      content: [
        "In the event that the vehicle is dropped off at the designated location with:",
        "- Lesser fuel than indicated by the fuel gauge reading at the booking start time, the guest shall pay the host refuelling charges based on the actual per-litre price.",
        "- More fuel than indicated by the fuel gauge reading at the booking start time, the guest may request a refund from the host based on the actual per-litre price.",
        "Refuelling charges/Refund = Actual cost of fuel per litre x difference in fuel level (in litres).",
        "Note: Each and every fuel related dispute needs to be resolved between the Host and the Guest independently. AgiroCabs shall not be involved in resolving any fuel related disputes."
      ]
    },
    {
      title: "Breakdown of vehicle",
      content: [
        "The cause of a breakdown will be determined based on the diagnosis report from the repair workshop.",
        "As per the terms of the Lease Agreement, the Guest shall bear full responsibility and be charged for any breakdown resulting from negligence, breach of the Lease Agreement, or Prohibited Uses.",
        "Except for the instances mentioned above, other breakdowns will be covered by the Damage Protection Plan, and the Guest's liability will be determined according to the coverage provided and the maximum liability limits stated therein.",
        "AgiroCabs is not liable for any costs incurred by the guest due to vehicle breakdowns."
      ]
    },
    {
      title: "Returning the vehicle to the wrong location",
      content: [
        "For all the events where the vehicle is not returned to the designated drop location, the Guest shall be liable to pay a flat fee of INR 10,000 towards the towing expenses."
      ]
    },
    {
      title: "No Show",
      content: [
        "Bookings will stand cancelled if the Guest still doesn't show up after 4 hours of booking start time. No refunds will be applicable."
      ]
    },
    {
      title: "Over speeding >=125 km/hr",
      content: [
        "INR 2500 (over and above any government fines that may have been levied).",
        "Guests will be blacklisted from AgiroCabs after three incidents of speeding during bookings."
      ]
    },
    {
      title: "Over speeding >=150 km/hr",
      content: [
        "Guests will be blacklisted from AgiroCabs Platform."
      ]
    },
    {
      title: "Smoking",
      content: [
        "A flat fee of INR 500 plus applicable costs for interior damage will be charged."
      ]
    },
    {
      title: "Wrong Fuelling",
      content: [
        "The Guest will be liable for the full cost of repair/damage to the vehicle + miscellaneous expenses arising out of the damages."
      ]
    },
    {
      title: "Loss of keys and documents",
      content: [
        "Document Charges (INR):",
        "- Loss of Keys: Rs10,000 or According to the car key price with replacement cost.",
        "- Registration Certificate: Rs10,000",
        "- Card/Car License or other documents: Rs10,000"
      ]
    },
    {
      title: "Vehicle Damage (Accidental)",
      content: [
        "Guests are responsible for unintentional or accidental damage, as outlined in the 'Collision and Other Incidents' terms, up to the maximum liability covered by the Damage Protection Plan chosen by the Guest.",
        "Please note: The Damage Protection Plan does not apply to vehicles booked in Goa. For damages to vehicles booked in Goa, guests must settle directly with the vehicle's host. Failure to do so may result in the host initiating legal proceedings to recover damages."
      ]
    },
    {
      title: "Vehicle Damage (Intentional or Consequential)",
      content: [
        "Guests will be liable for the full cost of repairing any intentional damage to the vehicle caused during the booking period. This includes situations where:",
        "- The guest is found to be under the influence of alcohol.",
        "- The vehicle workshop or insurance company attributes the damage to the guest or user.",
        "- A non-AgiroCabs guest is driving the vehicle during an accident.",
        "Guests are also responsible for compensating AgiroCabs for any additional damages, including loss of expected revenue due to vehicle damage.",
        "Please note: The Damage Protection Plan does not apply to vehicles booked in Goa. For damages to vehicles booked in Goa, guests must settle directly with the vehicle's host. Failure to do so may result in the host initiating legal proceedings to recover damages."
      ]
    },
    {
      title: "Collision or other incidents",
      content: [
        "If a Guest is involved in an unintentional or non-consequential incident or accident (including collisions or misuse of the vehicle), the guest will be liable for damages up to the maximum limits agreed upon when selecting the Damage Protection Package at the time of booking. This package varies based on lease rental, duration of usage, distance covered, and vehicle type. Guests may choose between:",
        "- Standard Package: Lower premium with higher damage payable.",
        "- Peace of Mind Package: Higher premium with lower damage payable.",
        "The Guest is responsible for all costs related to towing, impounding, and damage repair resulting from incidents caused by prohibited or negligent use of the vehicle, in violation of the Lease Agreement or AgiroCabs Policies, and applicable traffic laws.",
        "Please note: the Damage Protection Plan does not apply to vehicles booked in Goa. Guests must directly settle any damages with the vehicle's host in Goa. Failure to do so may result in the host initiating legal proceedings to recover damages."
      ]
    },
    {
      title: "Cleaning required (interiors)",
      content: [
        "If the guest returns the car in a dirty condition, the following cleaning fees will apply:",
        "- For removable dirt (e.g., foot mats): INR 500",
        "- For interior washing or dry cleaning (e.g., seat covers, door panels, pet hair): INR 1500"
      ]
    },
    {
      title: "FASTag/Tolls",
      content: [
        "Guests are responsible for recharging and paying all toll amounts incurred during the booking period. If the guest has chosen a vehicle with an active FASTag, they should obtain all FASTag details from the host using the in-app chat option.",
        "It's important to note that any settlements related to FASTag debits and credits are solely the responsibility of the guest and the host. AgiroCabs will not provide refunds in such cases."
      ]
    },
    {
      title: "Home / Airport Vehicle Pick-up and Drop Delivery Fee",
      content: [
        "Home delivery, collection, or airport delivery services are available upon payment of a Delivery Fee, subject to host availability and ongoing offers.",
        "- If the Host refuses both doorstep delivery and collection, the Delivery Fee collected by AgiroCabs at the time of booking will be fully refunded to the guest.",
        "- If the Host refuses either doorstep delivery or collection, the guest will receive a 50% refund of the Delivery Fee.",
        "The vehicle will be delivered by the Host to the specified location selected during booking creation within 0-5 minutes prior to the booking start time. Pickup will occur within 30 minutes from the booking end time. Guests may end the trip before the booking end time, but no refunds will be provided for the Delivery Fee in such cases of early completion."
      ]
    },
    {
      title: "Convenience Fee/Platform Fee",
      content: [
        "1. Guests are charged a nominal fee for using the AgiroCabs Platform. This fee is in addition to the Damage Protection Fee payable at the time of booking a vehicle.",
        "2. The Convenience Fee is not subject to refund in case of cancellation of a trip."
      ]
    },
    {
      title: "Important Reminders",
      content: [
        "- All rates mentioned above are inclusive of applicable GST.",
        "- Handover of the vehicle, extensions, and modifications are subject to vehicle availability.",
        "- Guests violating the law or applicable AgiroCabs policies, such as over-speeding or driving under the influence, are liable for damages, fines, and legal consequences.",
        "- KYC (Know Your Customer) verification of the guest's profile on this platform must be completed before the start of the booking. This includes providing a valid Driving License, National ID/Passport, and a live selfie.",
        "- AgiroCabs will not assume responsibility for any property left in the vehicle after the booking has ended."
      ]
    }
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">AgiroCabs Fee Policy</h1>
        {sections.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{section.title}</h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-4 text-gray-600 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeePolicy;