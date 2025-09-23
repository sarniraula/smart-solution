export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-green-800">Reach Us At</h2>
        <p className="text-gray-700">Whatsapp | Facebook | Instagram</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-green-800">Contact</h3>
            <p className="text-gray-700">
              Shan Kumar, <br />
              Career Counsellor, <br />
              Smart Solutions, <br />
              2855 Markham Road, Suite 305—01, <br />
              Scarborough, ON M1X 0C3 <br />
              (647) 881-7148 <br />
              EMAIL: no1smartsolution@gmail.com
            </p>
            <a className="text-blue-600 underline" href="https://maps.app.goo.gl/YXP6bUVhH3oDmd5p6" target="_blank" rel="noopener noreferrer">
              View on Map
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-800">Hours of Operation</h3>
            <p className="text-gray-700">
              MONDAY: 11AM - 6PM <br />
              TUESDAY: FLEXIBLE <br />
              WEDNESDAY: 11AM - 6PM <br />
              THURSDAY: 11AM - 6PM <br />
              FRIDAY: FLEXIBLE <br />
              SATURDAY: FLEXIBLE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
