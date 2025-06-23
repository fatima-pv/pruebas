import { RegisterRequest } from "@interfaces/auth/RegisterRequest";
import { VehicleResponse } from "@interfaces/vehicle/VehicleResponse";
import { RegisterFormData } from "@pages/RegisterPage";
import { ChangeEvent, FormEvent, useState } from "react";

interface RegisterVehicleProps {
	formData: RegisterFormData;
	setFormData: (formData: RegisterFormData) => void;
}

export default function RegisterVehicle(props: RegisterVehicleProps) {
	const [category, setCategory] = useState<"X" | "XL" | "BLACK">("X");
	function handleChange(e: ChangeEvent<HTMLInputElement>) {}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const updatedFormData: RegisterRequest = {};

		try {
		} catch (error) {}
	}

	return (
		<section className="login-section bg-secondary p-4 rounded-2xl">
			<h1 className="text-2xl font-bold">Registra tu vehículo</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="category">Category</label>
					<select
						name="category"
						id="category"
						value={category}
						onChange={(e) => {
							if (
								e.target.value === "X" ||
								e.target.value === "XL" ||
								e.target.value === "BLACK"
							) {
								setCategory(e.target.value as "X" | "XL" | "BLACK");
							}
						}}
						required
					>
						<option value="X"></option>
						<option value="XL"></option>
						<option value="BLACK"></option>
					</select>
				</div>
				<div>
					<label htmlFor="brand"></label>
					<input type="text" name="brand" id="brand" value={props.formData.brand} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="model"></label>
					<input type="text" name="model" id="model" value={props.formData.model} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="licensePlate"></label>
					<input
						type="text"
						name="licensePlate"
						id="licensePlate"
						value={props.formData.licensePlate}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="fabricationYear"></label>
					<input
						type="number"
						name="fabricationYear"
						id="fabricationYear"
						value={props.formData.fabricationYear}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="capacity"></label>
					<input
						type="number"
						name="capacity"
						id="capacity"
						value={props.formData.capacity}
						onChange={handleChange}
					/>
				</div>
				<button
					id="registerVehicleSubmit"
					className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer"
					type="submit"
				>
					Registrar vehículo
				</button>
			</form>
		</section>
	);
}
