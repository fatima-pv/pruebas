import { RegisterFormData } from "@pages/RegisterPage";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useAuthContext } from "@contexts/AuthContext";

interface RegisterFormProps {
	formData: RegisterFormData;
	setFormData: (formData: RegisterFormData) => void;
}

export default function RegisterForm(props: RegisterFormProps) {
	const { register } = useAuthContext();
	const [error, setError] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		props.setFormData({ ...props.formData, [e.target.name]: e.target.value });
		setError(null);
		setSuccessMessage(null);
	}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		try {
			await register(props.formData);
			setSuccessMessage("Registro exitoso");
		} catch (error) {
			setError(error as string);
		}
	}

	return (
		<section className="login-section bg-secondary rounded-2xl p-10 flex flex-col items-center justify-center gap-4">
			<h1 className="title">Registrarse a Uber</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
				<section className="w-full grid grid-cols-2 gap-4">
					<div className="col-span-1 flex flex-col gap-1">
						<label htmlFor="firstName">Nombres</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							value={props.formData.firstName}
							onChange={handleChange}
							required
							className="bg-secondary rounded-sm border-black border p-1"
						/>
					</div>
					<div className="col-span-1 flex flex-col gap-1">
						<label htmlFor="lastName">Apellidos</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							value={props.formData.lastName}
							onChange={handleChange}
							className="bg-secondary rounded-sm border-black border p-1"
						/>
					</div>
				</section>
				<div className="flex flex-col gap-1">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={props.formData.email}
						onChange={handleChange}
						className="bg-secondary rounded-sm border-black border p-1"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="password">Contraseña</label>
					<input
						type="password"
						name="password"
						id="password"
						value={props.formData.password}
						onChange={handleChange}
						className="bg-secondary rounded-sm border-black border p-1"
					/>
				</div>
				<section className="w-full grid grid-cols-2 gap-4 items-center justify-center">
					<div className="flex flex-col gap-1">
						<label htmlFor="phone">Celular</label>
						<input
							type="text"
							name="phone"
							id="phone"
							value={props.formData.phone}
							onChange={handleChange}
							className="bg-secondary rounded-sm border-black border p-1"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="isDriver">¿Eres Conductor?</label>
						<div className="flex gap-2 justify-between">
							<div>
								<input
									type="radio"
									name="isDriver"
									id="driver"
									value={props.formData.isDriver ? "true" : "false"}
									checked={props.formData.isDriver}
									onChange={handleChange}
									className="w-4 h-4 accent-primary"
								/>{" "}
								<span>Sí</span>
							</div>
							<div>
								<input
									type="radio"
									name="isDriver"
									id="passenger"
									value={props.formData.isDriver ? "false" : "true"}
									checked={!props.formData.isDriver}
									onChange={handleChange}
									className="w-4 h-4 accent-primary"
								/>{" "}
								<span>No</span>
							</div>
						</div>
					</div>
				</section>
				<button
					id="registerSubmit"
					className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer"
					type="submit"
				>
					Registrarse
				</button>
				<div className="flex items-center gap-2">
					<div className="w-full h-[1px] bg-black"></div>
					<span>o</span>
					<div className="w-full h-[1px] bg-black"></div>
				</div>
				<button className="bg-white rounded-md py-2 px-4 text-[#333] flex items-center gap-2 flex-row justify-center">
					<FaGoogle />
					<span>Ingresar con Google</span>
				</button>
			</form>
		</section>
	);
}
