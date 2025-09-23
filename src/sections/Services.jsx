export default function Services() {
  const services = [
    "Career Counselling",
    "Immigration Case Management",
    "Private Career College Admissions",
    "Tamil/Sinhala to English Translation",
    "OSAP Application",
    "Social Assistance OW/ODSP/EI/Housing Application",
    "Resume Writing",
    "Rental Property Arrangement",
    "Guiding to Find Employment",
    "University/Community College OSAP Application",
    "Newcomers Settlement Services",
    "PR/Citizenship Application",
    "Passport Renewal",
  ];

  return (
    <section id="services" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-green-800">Other Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <div key={idx} className="p-4 bg-white rounded shadow">
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
