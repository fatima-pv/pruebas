import { LoginRequest } from "@interfaces/auth/LoginRequest";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useAuthContext } from "@contexts/AuthContext";

export default function LoginForm() {
	const { login } = useAuthContext();
	const [formData, setFormData] = useState<LoginRequest>({
		email: "",
		password: "",
	});
	const [error, setError] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setError(null);
		setSuccessMessage(null);
	}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			await login(formData);
			setSuccessMessage("Login successful");
		} catch (error) {
			setError(error as string);
		}
	}

	return (
		<section className="login-section bg-secondary rounded-2xl p-10 flex flex-col items-center justify-center gap-4">
			<h1 className="title">Ingresar a Uber</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
				<div className="flex flex-col gap-1">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full bg-transparent border-black border p-1"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={formData.password}
						onChange={handleChange}
						className="w-full bg-transparent border-black border p-1"
					/>
				</div>
				<button id="loginSubmit" className="bg-primary rounded-full py-2 px-4 text-white" type="submit">
					Iniciar Sesión
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
			{error && <div style={{ color: "red" }}>{error}</div>}
			{successMessage && <div style={{ color: "blue" }}>{successMessage}</div>}
		</section>
	);
}
