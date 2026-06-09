import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8">
          Privacy <span className="text-gold-500">Policy</span>
        </h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">
            Last Updated: January 2024
          </p>

          <h2 className="text-xl font-black uppercase tracking-tighter text-white mt-10">Information We Collect</h2>
          <p>
            Center City Bailbonds collects personal information that you voluntarily provide when contacting us, including your name, phone number, email address, and details about your bail bond needs. We also collect standard web analytics data through Google Analytics to improve our website experience.
          </p>

          <h2 className="text-xl font-black uppercase tracking-tighter text-white mt-10">How We Use Your Information</h2>
          <p>
            We use the information you provide solely to process bail bond requests, respond to inquiries, and provide our services. We do not sell, rent, or share your personal information with third parties except as required by law or to fulfill our bail bond obligations.
          </p>

          <h2 className="text-xl font-black uppercase tracking-tighter text-white mt-10">Confidentiality</h2>
          <p>
            All communications and personal information shared with Center City Bailbonds are treated as strictly confidential. We understand the sensitive nature of bail bond services and take every measure to protect your privacy and dignity.
          </p>

          <h2 className="text-xl font-black uppercase tracking-tighter text-white mt-10">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction. Our online bail agreement forms are processed through DocuSign, a secure, industry-standard electronic signature platform.
          </p>

          <h2 className="text-xl font-black uppercase tracking-tighter text-white mt-10">Cookies & Analytics</h2>
          <p>
            Our website uses Google Analytics to collect anonymous usage data, helping us understand how visitors interact with our site. You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.
          </p>

          <h2 className="text-xl font-black uppercase tracking-tighter text-white mt-10">Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us at <a href="tel:2158708197" className="text-gold-500 hover:underline">(215) 870-8197</a>.
          </p>

          <h2 className="text-xl font-black uppercase tracking-tighter text-white mt-10">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact Center City Bailbonds at:<br />
            <strong className="text-white">1238 South Street, Philadelphia, PA 19147</strong><br />
            <a href="tel:2158708197" className="text-gold-500 hover:underline">(215) 870-8197</a>
          </p>

          <div className="pt-8 border-t border-white/10 mt-10">
            <Link to="/" className="text-gold-500 text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
