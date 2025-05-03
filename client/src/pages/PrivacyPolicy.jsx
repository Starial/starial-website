import { privacyPolicy } from "../PrivacyPolicy";

const contents = [
  "Website Visitors",
  "Personally-Identifying Information",
  "Security",
  "Advertisements",
  "Links To External Sites",
  "Starial uses Google AdWords for remarketing",
  "Protection of Certain Personally-Identifying Information",
  "Aggregated Statistics",
  "Affiliate Disclosure",
  "E-commerce",
  "Privacy Policy Changes",
  "Contact Information & Credit",
];

export default function PrivacyPolicy() {
  return (
    <section className="privacy-policies">
      <h2>Privacy Policy</h2>
      <h4>Last Updated - 18-06-2024</h4>
      <div className="privacy-policy">
        <div className="privacy">
          <h3>Your privacy is important to us</h3>
          <div>
            <p>Starial is located at: </p>
            <p>Starial Private Limited Plot No.93, JDA</p>
            <p>
              Scheme No. 5, Deendayal Chowk, Vijaynagar, Jabalpur - 482002
              Jabalpur,
            </p>
            <p>Jabalpur 482002 Madhya Pradesh , India</p>
            {/* <p>9131413886</p> */}
            It is Starial’s policy to respect your privacy regarding any
            information we may collect while operating our website. This Privacy
            Policy applies to www.starial.in/ (hereinafter, “us”, “we”, or
            “www.starial.in/”). We respect your privacy and are committed to
            protecting personally identifiable information you may provide us
            through the Website. We have adopted this privacy policy (“Privacy
            Policy”) to explain what information may be collected on our
            Website, how we use this information, and under what circumstances
            we may disclose the information to third parties. This Privacy
            Policy applies only to information we collect through the Website
            and does not apply to our collection of information from other
            sources. This Privacy Policy, together with the Terms of service
            posted on our Website, set forth the general rules and policies
            governing your use of our Website. Depending on your activities when
            visiting our Website, you may be required to agree to additional
            terms of service.
          </div>
        </div>
        <div className="contents">
          <h3>Contents</h3>
          <ul>
            {contents.map((con, index) => {
              return (
                <li key={index}>
                  {index + 1}. {con}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="policies">
          {privacyPolicy.map((policy, index) => {
            return (
              <div className="privacy">
                <h3>
                  {index + 1}. {policy.title}
                </h3>
                <p>{policy.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
