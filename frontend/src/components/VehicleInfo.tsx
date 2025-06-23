import { useEffect, useState } from "react";
import { FaTaxi } from "react-icons/fa6";

export default function VehicleInfo() {
	const [profileInfo, setProfileInfo] = useState<>({});

	async function fetchVehicleInfo() {}

	useEffect(() => {}, []);

	return (
		<article>
			<h1 className="">Vehiculo</h1>
			<section className="">
				<div className="">
					<FaTaxi className="" />
				</div>
				{profileInfo.vehicle ? (
					<ul className="">
						<li id="vehicleModel">
							{} {}
						</li>
						<li id="driverCategory">
							<b>Categoría: </b>
							{}
						</li>
						<li id="licenseNumber">
							<b>Placa: </b>
							{}
						</li>
						<li id="yearOfFabrication">
							<b>Año de fabricación: </b>
							{}
						</li>
						<li id="capacityNumber">
							<b>Capacidad: </b>
							{}
						</li>
					</ul>
				) : (
					<p>Loading vehicle information...</p>
				)}
			</section>
		</article>
	);
}
