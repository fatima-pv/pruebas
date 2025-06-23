import Profile from "@components/Profile";
import { ChangeEvent, FormEvent } from "react";
import { getRoleBasedOnToken } from "src/utils/getRoleBasedOnToken";

export default function EditProfilePage() {
	function handleChange(e: ChangeEvent<HTMLInputElement>) {}

	async function fetchDeleteUser() {
		if (getRoleBasedOnToken() === "ROLE_DRIVER") {
			try {
			} catch (error) {}
		} else if (getRoleBasedOnToken() === "ROLE_PASSENGER") {
			try {
			} catch (error) {}
		} else {
			console.error("Error: No role found");
		}
	}

	async function fetchUpdateUser() {
		if (getRoleBasedOnToken() === "ROLE_DRIVER") {
			try {
			} catch (error) {
				console.error("Error:", error);
			}
		} else if (getRoleBasedOnToken() === "ROLE_PASSENGER") {
			try {
			} catch (error) {
				console.error("Error:", error);
			}
		} else {
			console.error("Error: No role found");
		}
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		fetchUpdateUser();
		navigate("/dashboard");
	}

	return (
		<main>
			<article>
				<h1>Editar Perfil</h1>
				<form onSubmit={}>
					<div>
						<label htmlFor="firstName">Nombres</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							value={formData.firstName}
							onChange={}
							required
						/>
					</div>
					<div>
						<label htmlFor="lastName">Apellidos</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							value={formData.lastName}
							onChange={}
						/>
					</div>
					<div>
						<label htmlFor="phoneNumber">Celular</label>
						<input
							type="number"
							name="phoneNumber"
							id="phoneNumber"
							value={formData.phoneNumber}
							onChange={}
						/>
					</div>
					<button
						id="updateSubmit"
						className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer"
						type="submit"
					>
						Actualizar
					</button>
				</form>
			</article>

			<Profile setUserId={setUserId} />

			<button id="deleteUser" onClick={}>
				Eliminar cuenta
			</button>
		</main>
	);
}
