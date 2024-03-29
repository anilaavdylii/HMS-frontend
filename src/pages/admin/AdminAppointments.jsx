import React, {useEffect, useState} from "react";
import Sidebar from "../../Components/Sidebar";
import {axiosInstance} from "../../config";

export default function AdminAppointments({token}) {
	const [appointments, setAppointments] = useState([]);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	// Get All Appointments
	token &&
		useEffect(() => {
			const fetchAppointments = async () => {
				axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
				const res = await axiosInstance.get("/slots/appointment/all");
				setAppointments(res.data);
			};
			fetchAppointments();
		}, [success]);

	// Approve Appointment
	async function handleApprove(e, id) {
		e.preventDefault();
		setError("");
		setSuccess("");

		try {
			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await axiosInstance.put(`/slots/appointment/approve/${id}`, {});
			res && setSuccess("The appointment has been approved!");
			console.log(res);
		} catch (err) {
			if (err.response) {
				setError("You failed to approve the appointment!");
				console.log(err.response);
			}
		}
	}

	// Decline Appointment
	async function handleDecline(e, id) {
		e.preventDefault();
		setError("");
		setSuccess("");

		try {
			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await axiosInstance.put(`/slots/appointment/decline/${id}`, {});
			res && setSuccess("The appointment has been declined!");
			console.log(res);
		} catch (err) {
			if (err.response) {
				setError("You failed to decline the appointment!");
				console.log(err.response);
			}
		}
	}

	return (
		<div className="adminSchedules top container-fluid">
			<div className="row">
				<div className="col-2 ps-0">
					<Sidebar />
				</div>
				<div className="col">
					<h1>All Appointments</h1>
					<table className="table mt-5">
						<thead>
							<tr className="table-secondary">
								<th scope="col">Date</th>
								<th scope="col">Visit Time</th>
								<th scope="col">Description</th>
								<th scope="col">Status</th>
								<th scope="col" className="text-center">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{appointments.length !== 0 ? (
								appointments.map(appointment => (
									<tr key={appointment.id}>
										<td>{appointment.date}</td>
										<td>{appointment.slot.timeSlot}</td>
										<td>{appointment.description}</td>
										<td>{appointment.status}</td>
										{appointment.status === "PENDING_APPROVAL" ? (
											<td className="text-center">
												<i className="bi bi-check-lg icon-green" onClick={e => handleApprove(e, appointment.id)} />{" "}
												<span className="icon-red" onClick={e => handleDecline(e, appointment.id)}>
													x
												</span>
											</td>
										) : (
											<td className="text-center">-</td>
										)}
									</tr>
								))
							) : (
								<tr>
									<td colSpan={5} className="fw-bold text-center">
										Loading the data...
									</td>
								</tr>
							)}
						</tbody>
					</table>
					<div className="error">{error}</div>
					<div className="success">{success}</div>
				</div>
			</div>
		</div>
	);
}
