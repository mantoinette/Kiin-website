import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen px-6 md:px-20 py-16">
      
      {/* Page Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          Contact KIIN Innovation
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Have questions, need support, or want to explore our services? 
          Fill out the form below or reach out via social media — we’re here to help!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">

        {/* Contact Form */}
        <div className="flex-1">
          <div className="bg-gray-900 p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Send Us a Message</h2>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="p-3 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="p-3 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                className="p-3 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
              />
              <button
                type="submit"
                className="bg-cyan-400 text-gray-950 font-semibold py-3 rounded-lg hover:bg-cyan-500 transition mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info & Social */}
        <div className="flex-1 flex flex-col justify-between">
          
          {/* Contact Info Card */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Need Support?</h2>
            <p className="text-gray-300 mb-4">
              Have a question about our services or need assistance? Reach out to our team and we’ll get back to you as quickly as possible.
            </p>
            <p className="text-gray-300 mb-2"><strong>Email:</strong> support@kiininnovation.com</p>
            <p className="text-gray-300 mb-2"><strong>Phone:</strong> +250 781 546 706</p>
            <p className="text-gray-300"><strong>Address:</strong> Kigali, Rwanda</p>
          </div>

          {/* Social Media Card */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Follow Us</h2>
            <p className="text-gray-300 mb-4">Connect with us on social media to stay updated:</p>
            <div className="flex gap-4 text-gray-100 text-xl">
              <a href="#" className="hover:text-cyan-400 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-cyan-400 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-cyan-400 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-cyan-400 transition"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;