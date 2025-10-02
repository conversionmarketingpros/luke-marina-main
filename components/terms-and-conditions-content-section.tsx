export function TermsAndConditionsContentSection() {
  return (
   <section className="py-8 bg-white font-sans">
     <div className="w-full px-4 md:px-6 lg:px-4 xl:px-4 text-gray-900 leading-relaxed">
       
       {/* Heading */}
       <div className="mb-10 mx-auto">
         <h1
           className="text-4xl sm:text-[120px] md:text-[140px] lg:text-[165px] font-normal font-['Plus Jakarta Sans'] uppercase tracking-[-0.1em] text-left leading-trim text-edge-cap"
           style={{ color: '#709392' }}
         >
           TERMS AND CONDITIONS
         </h1>
        <p className="font-['Figtree'] font-normal text-[24px] leading-[151%] tracking-[-0.1em] leading-trim text-edge-cap text-gray-800">
          Welcome to Luke's Marina Services — where exceptional marine service meets superior craftsmanship.
        </p>
        <p className="font-['Figtree'] font-normal text-[24px] leading-[151%] tracking-[-0.1em] leading-trim text-edge-cap text-gray-800">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <p className="font-['Figtree'] font-normal text-[18px] leading-[151%] tracking-[-0.1em] leading-trim text-edge-cap text-gray-800 mt-4">
          By using our website, engaging with our services, or contacting us, you agree to the terms outlined below.
        </p>
       </div>

       {/* About Luke's Marina Services */}
       <div className="mb-8">
        <h2 className="font-['Plus Jakarta Sans'] font-normal text-gray-900 tracking-normal text-[24px] sm:text-[30px] md:text-[36px] leading-[38px] mb-6">
          About Luke's Marina Services
        </h2>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] mb-4">
          Luke's Marina Services is a premium marine service provider specializing in boat detailing, shrink wrapping, and dock maintenance and repair services. We serve boat owners and maritime enthusiasts in the Lake Coeur d'Alene area and throughout Idaho.
        </p>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px]">
           <strong>Business Address:</strong> 2600 A E Seltice #415, Post Falls, Idaho, 83854<br/>
           <strong>Phone:</strong> 208-415-2743<br/>
           <strong>Email:</strong> lukesmarinaservices@gmail.com<br/>
           <strong>Website:</strong> www.lukemarinaservices.com
         </p>
       </div>

       {/* Our Services */}
       <div className="mb-8">
        <h2 className="font-['Plus Jakarta Sans'] font-normal text-gray-900 tracking-normal text-[24px] sm:text-[30px] md:text-[36px] leading-[38px] mb-6">
          Our Services
        </h2>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] mb-4">
          We provide the following marine services:
        </p>
        <ul className="list-disc list-inside font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] space-y-2 ml-4">
           <li><strong>Boat Detailing:</strong> Premium interior and exterior boat cleaning, polishing, waxing, gel coat restoration, and maintenance services</li>
           <li><strong>Shrink Wrapping:</strong> Professional boat winterization and protective wrapping for storage and transport</li>
           <li><strong>Dock Repair & Maintenance:</strong> Structural repairs, hardware replacement, preventative maintenance, and safety inspections</li>
         </ul>
       </div>

       {/* SMS Communications & A2P Compliance */}
       <div className="mb-8">
        <h2 className="font-['Plus Jakarta Sans'] font-normal text-gray-900 tracking-normal text-[24px] sm:text-[30px] md:text-[36px] leading-[38px] mb-6">
          SMS Communications and Consent
        </h2>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] mb-4">
          By providing your phone number through our contact forms or services, you may opt-in to receive SMS text messages from Luke's Marina Services. These messages may include:
        </p>
        <ul className="list-disc list-inside font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] space-y-2 ml-4">
           <li>Service appointment confirmations and reminders</li>
           <li>Service updates and completion notifications</li>
           <li>Emergency or urgent service communications</li>
           <li>Promotional offers and seasonal service reminders (only if you opt-in)</li>
         </ul>
        <p className="font-['Plus Jakarta Sans'] font-semibold text-gray-900 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] mb-4 mt-6">
          Important SMS Terms:
        </p>
        <ul className="list-disc list-inside font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] space-y-2 ml-4">
           <li>Consent to receive SMS messages is <strong>optional</strong> and not required for service</li>
           <li>Message frequency varies based on your service needs</li>
           <li>Standard message and data rates may apply from your carrier</li>
           <li>Reply <strong>STOP</strong> to any message to opt-out at any time</li>
           <li>Reply <strong>HELP</strong> for assistance or contact us at 208-415-2743</li>
           <li>We are not responsible for carrier charges or delivery delays</li>
         </ul>
       </div>

       {/* Service Terms */}
       <div className="mb-8">
        <h2 className="font-['Plus Jakarta Sans'] font-normal text-gray-900 tracking-normal text-[24px] sm:text-[30px] md:text-[36px] leading-[38px] mb-6">
          Service Terms and Conditions
        </h2>
        <p className="font-['Plus Jakarta Sans'] font-semibold text-gray-900 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] mb-2">
          Scheduling and Cancellation:
        </p>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] mb-4">
          Services must be scheduled in advance. We recommend booking 2-3 weeks ahead during peak seasons (spring and fall). Cancellations must be made at least 48 hours before scheduled service to avoid fees.
        </p>
        <p className="font-['Plus Jakarta Sans'] font-semibold text-gray-900 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] mb-2">
          Access and Safety:
        </p>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] mb-4">
          Customers must provide safe and reasonable access to boats and docks. We reserve the right to refuse service if conditions are unsafe or access is inadequate.
        </p>
        <p className="font-['Plus Jakarta Sans'] font-semibold text-gray-900 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] mb-2">
          Payment Terms:
        </p>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px]">
          Payment is due upon completion of services unless other arrangements have been made. We accept cash, check, and major credit cards.
        </p>
       </div>

       {/* Warranties and Liability */}
       <div className="mb-8">
        <h2 className="font-['Plus Jakarta Sans'] font-normal text-gray-900 tracking-normal text-[24px] sm:text-[30px] md:text-[36px] leading-[38px] mb-6">
          Warranties and Limitation of Liability
        </h2>
        <p className="font-['Plus Jakarta Sans'] font-semibold text-gray-900 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] mb-2">
          Service Warranties:
        </p>
        <ul className="list-disc list-inside font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] space-y-2 ml-4 mb-4">
           <li>Detailing services: 30-day satisfaction guarantee</li>
           <li>Shrink wrap installations: Warranted for entire season against defects</li>
           <li>Repair work: 1-year warranty on parts and labor</li>
         </ul>
        <p className="font-['Plus Jakarta Sans'] font-semibold text-gray-900 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] mb-2">
          Limitation of Liability:
        </p>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px]">
          Our liability is limited to the cost of services provided. We are not liable for indirect, incidental, or consequential damages. Customers are responsible for securing valuable items and personal belongings before service begins.
        </p>
       </div>

       {/* Use of Website */}
       <div className="mb-8">
        <h2 className="font-['Plus Jakarta Sans'] font-normal text-gray-900 tracking-normal text-[24px] sm:text-[30px] md:text-[36px] leading-[38px] mb-6">
          Use of Website and Services
        </h2>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] mb-4">
          You may use our website and services for lawful purposes only. You agree not to:
        </p>
        <ul className="list-disc list-inside font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] space-y-2 ml-4">
           <li>Provide false or misleading information</li>
           <li>Use our services for any illegal activities</li>
           <li>Interfere with or disrupt our website or services</li>
           <li>Attempt to gain unauthorized access to our systems</li>
         </ul>
       </div>

       {/* Privacy and Data Protection */}
       <div className="mb-8">
        <h2 className="font-['Plus Jakarta Sans'] font-normal text-gray-900 tracking-normal text-[24px] sm:text-[30px] md:text-[36px] leading-[38px] mb-6">
          Privacy and Data Protection
        </h2>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px]">
          Your privacy is important to us. Please review our Privacy Policy, which governs how we collect, use, and protect your personal information. By using our services, you consent to the collection and use of information as described in our Privacy Policy.
        </p>
       </div>

       {/* Changes to Terms */}
       <div className="mb-8">
        <h2 className="font-['Plus Jakarta Sans'] font-normal text-gray-900 tracking-normal text-[24px] sm:text-[30px] md:text-[36px] leading-[38px] mb-6">
          Changes to Terms
        </h2>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px]">
          We may update these Terms and Conditions from time to time. We will notify you of any material changes by posting the new Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
        </p>
       </div>

       {/* Governing Law */}
       <div className="mb-8">
        <h2 className="font-['Plus Jakarta Sans'] font-normal text-gray-900 tracking-normal text-[24px] sm:text-[30px] md:text-[36px] leading-[38px] mb-6">
          Governing Law
        </h2>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px]">
          These Terms and Conditions are governed by the laws of the State of Idaho, United States. Any disputes arising from these Terms will be resolved in the courts of Idaho.
        </p>
       </div>

       {/* Contact Information */}
       <div className="mb-8">
        <h2 className="font-['Plus Jakarta Sans'] font-normal text-gray-900 tracking-normal text-[24px] sm:text-[30px] md:text-[36px] leading-[38px] mb-6">
          Contact Us
        </h2>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px] mb-4">
          If you have any questions about these Terms and Conditions, please contact us:
        </p>
        <p className="font-['Plus Jakarta Sans'] font-normal text-gray-800 tracking-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[38px]">
          <strong>Luke's Marina Services</strong><br/>
          2600 A E Seltice #415<br/>
          Post Falls, Idaho 83854<br/>
          Phone: 208-415-2743<br/>
          Email: lukesmarinaservices@gmail.com
        </p>
       </div>

     </div>
   </section>
 );
}