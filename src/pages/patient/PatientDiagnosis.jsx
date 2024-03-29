import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config";

export default function PatientDiagnosis({ token }) {
	const [diagnosis, setDiagnosis] = useState("");

	token &&
		useEffect(() => {
			const fetchDiagnosis = async () => {
				axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
				const res = await axiosInstance.get("/diagnose");
				setDiagnosis(res.data);
			};
			fetchDiagnosis();
		}, []);

	return (
		<div className="patientDiagnosis container top">
			<h2>My Diagnosis</h2>
				<div className="patientDiagnose d-flex justify-content-around">
				{diagnosis ? diagnosis.map((d, i) => <div className="patientDiagnose-div"><br /><p key={i}> <b>Diagnose: <br /> <br /> </b>{d.diagnose} <br /><br /></p></div>) : <h5 className="text-center">Loading the data...</h5>}
				</div>
				
		</div>
	);
}
