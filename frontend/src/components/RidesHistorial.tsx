import { useEffect, useState } from "react";
import RideItem from "./RideItem";

export default function RidesHistorial() {
	const [rides, setRides] = useState<>([]);

	async function fetchRides() {}

	useEffect(() => {}, []);

	return (
		<article className="home-section">
			<h1 className="title mb-3">Historial de viajes</h1>
			<section id="ridesHistorial">
				{rides.map((ride, index) => (
					<RideItem
						key={index}
						id={index.toString()}
						data={{
							originName: ride.originName,
							departureDate: ride.departureDate,
							destinationName: ride.destinationName,
							price: ride.price,
						}}
					/>
				))}
			</section>
		</article>
	);
}
