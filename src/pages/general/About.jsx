import React from "react";

export default function About() {
	return (
		<div className="about top container">
			<h1>About Us</h1>
			<div className="row aboutTop d-flex align-items-center mb-5">
				<div className="col">
					<h1>Our Vision</h1>
					<p>
					QKUK Hospital's vision for excellence and leadership is driven by its core values that include service, partnership, care and integrity. We work hard to provide maximum care and treat all patients with the same safety, dignity and respect.
					</p>
				</div>
				<div className="col">
					<img src="assets/general/discussion.png" alt="" className="img-fluid" />
				</div>
			</div>

			<div className="row">
				<div className="col d-flex align-items-center">
					<img src="assets/general/image6.png" alt="" className="img-fluid" />
				</div>
				<div className="col">
					<h2>Biography</h2>
					<p>
					Southeast Europe Equity Fund II (SEEF II), the investment fund that owns the QKUK Hospital, was established in March 2006 as a result of the joint financing of 200 million dollars of institutional investors from Europe and the USA, the US Government Investment Agency OPIC as well as EBRD.
					</p>
					
					<p> Providing a comprehensive service in an environment where innovation and continuous education are an integral part of care.</p> <p>To be the undisputed leader in providing services from the most immediate to the most innovative and complex ones.</p>
				</div>
			</div>
		</div>
	);
}
