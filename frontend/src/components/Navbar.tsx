import { useAuthContext } from "@contexts/AuthContext";

export default function Navbar() {
	const { logout: logoutHandler, session } = useAuthContext();
	function logout() {
		logoutHandler();
	}

	if (session) {
		return (
			<div className="">
				<div className="text-2xl">Uber</div>
				<button id="logout" onClick={logout}>
					Logout
				</button>
			</div>
		);
	} else {
		return <div className="bg-black text-white text-3xl py-2 px-10">Uber</div>;
	}
}
