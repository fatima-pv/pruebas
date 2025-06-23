import { useLocation, useNavigate } from "react-router-dom";

interface ButtonProps {
	message: string;
	to: string;
}

export default function Button(props: ButtonProps) {
	const location = useLocation();
	const navigate = useNavigate();
	const buttonStyle = location.pathname === props.to ? "bg-[#7955B4] text-white font-bold" : "bg-[#D9D9D9] text-black";

	function handleClick() {
		navigate(props.to);
	}

	return (
		<button className={`${buttonStyle} rounded-full px-4 py-2 text-center w-36`} onClick={handleClick}>
			{props.message}
		</button>
	);
}
