import VehicleInfo from "@components/VehicleInfo";
import { ChangeEvent, FormEvent } from "react";

export default function EditVehiclePage() {
	async function getDriverId() {}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<main>
			<article>
				<h1>Editar Vehiculo</h1>
				<form onSubmit={}>
					<div>
						<label htmlFor="brand">Brand</label>
						<input type="text" name="brand" id="brand" value={} onChange={} />
					</div>
					<div>
						<label htmlFor="model">Model</label>
						<input type="text" name="model" id="model" value={} onChange={} />
					</div>
					<div>
						<label htmlFor="licensePlate">LicensePlate</label>
						<input
							type="text"
							name="licensePlate"
							id="licensePlate"
							value={}
							onChange={}
						/>
					</div>
					<div>
						<label htmlFor="fabricationYear">FabricationYear</label>
						<input
							type="number"
							name="fabricationYear"
							id="fabricationYear"
							value={}
							onChange={}
						/>
					</div>
					<div>
						<label htmlFor="capacity">Capacity</label>
						<input
							type="number"
							name="capacity"
							id="capacity"
							value={}
							onChange={}
						/>
					</div>
					<button
						id="vehicleSubmit"
						className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer"
						type="submit"
					>
						Registrarse
					</button>
				</form>
			</article>
			<VehicleInfo />
		</main>
	);
}
