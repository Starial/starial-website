import React from "react";
import { termsConditions } from "../TermsConditions";
import { Link } from "react-router-dom";

export default function Policies() {
  return (
    <section className="terms-conditions">
      <div className="terms">
        {termsConditions.map((terms, index) => {
          return (
            <div className="term">
              <h3>
                {index + 1}. {terms.title}
              </h3>
              {terms.caution && <p className="caution">{terms.caution}</p>}
              <p>{terms.desc}</p>
            </div>
          );
        })}
        <div className="term">
          <h3>23. Contact Us</h3>
          <p>
            Please send your feedback, comments, requests for technical support
            by email:
            <br />
            <br />
            <Link to="mailto:starialofficial@gmail.com">
              starialofficial@gmail.com
            </Link>
            .
            <br />
            <br />
            These Terms of Service were created for
            <span> </span>
            <Link to="https://www.starial.shop/">
              https://www.starial.shop/
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
