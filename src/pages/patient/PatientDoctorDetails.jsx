import React, { useEffect, useState } from "react";
import Feedback from "../../components/Feedback";
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

	
	return (
		<div className="PatientDoctorDetails container top">
			<div className="row doctorDetailsHeader d-flex align-items-center">
				<div className="col">
					<img src="assets/patient/doctor-details.png" alt="" className="imgHeader" />
				</div>
				{doctor.firstName ? (
					<div className="col text-center">
						<h2>Hello, I'm</h2>
						<h1>
							{doctor.firstName} {doctor.lastName}
						</h1>
						<h3>{doctor.email}</h3>
					</div>
				) : (
					<div className="col text-center">
						<h2>Loading the data...</h2>
					</div>
				)}
			</div>

			<div className="doctorDetailsDesc">
				<h1>Doctor Details</h1>
				<p>
					"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
					quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
					laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
					cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
					autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
					recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
					doloribus asperiores repellat."
				</p>
			</div>

			
		</div>
	);
}
