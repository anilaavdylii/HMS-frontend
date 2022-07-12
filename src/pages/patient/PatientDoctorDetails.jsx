import React, { useEffect, useState } from "react";
import Feedback from "../../Components/Feedback";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function PatientDoctorDetails({ token }) {
	const [doctor, setDoctor] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [review, setReview] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const location = useLocation();
	const id = location.pathname.split("%")[1];

	// Get Single Doctor
	useEffect(() => {
		const fetchDoctor = async () => {
			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await axiosInstance.get(`/users/doctor-details/${id}`);
			setDoctor(res.data);
		};
		fetchDoctor();
	}, []);

	// Get Doctor Reviews
	useEffect(() => {
		const fetchReviews = async () => {
			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await axiosInstance.get(`/review/${id}`);
			setReviews(res.data);
		};
		fetchReviews();
	}, [success]);

	// Post Reviews
	async function handleSubmit(e) {
		e.preventDefault();
		setError("");
		setSuccess("");

		try {
			const res = await axiosInstance.post("/review", {
				doctorId: id,
				review,
			});
			res && setSuccess("Your feedback has been sent successfully!");
			console.log(res);
		} catch (err) {
			if (err.response) {
				setError("You failed to submit the feedback!");
				console.log(err.response);
			}
		}
	}

	return (
		<div className="PatientDoctorDetails container top">
			<div className="row doctorDetailsHeader d-flex align-items-center">
				<div className="col" >
					<img src={`data:image/png;base64,${doctor.profilePicture}`} alt="" className="imgHeader" />
				</div>
				{doctor.firstName ? (
					<div className="col text-center">
						<h1>Doctor Details</h1>
				<p>
				This is  <b>Dr. {doctor.firstName} {doctor.lastName}</b>
				</p>

				<p>
					<h5>Contact</h5>
				Email: <b>{doctor.email}</b><br />
				Phone number: <b>{doctor.mobileNumber}</b>
				</p>
					</div>
				) : (
					<div className="col text-center">
						<h2>Loading the data...</h2>
					</div>
				)}
			</div>

			<br /><br />

			<div className="doctorDetailsFeedback">
				<div className="row">
					<div className="col">
						<h2>Post a Feedback</h2>
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								placeholder="Give a feedback"
								className="form-control ms-0"
								required
								value={review}
								onChange={(e) => setReview(e.target.value)}
							/>
							<div className="text-center">
								<button>Send feedback</button>
								<div className="error">{error}</div>
								<div className="success">{success}</div>
							</div>
						</form>
					</div>
					<div className="col">
						<h2>Latest Feedbacks</h2>
						<Feedback reviews={reviews} />
						<div className="text-center">
							<button>More feedbacks...</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
