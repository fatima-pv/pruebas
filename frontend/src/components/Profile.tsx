import { DriverResponse } from "@interfaces/driver/DriverResponse";
import { PassengerPatchRequest } from "@interfaces/passenger/PassengerPatchRequest";
import { PassengerSelfResponse } from "@interfaces/passenger/PassengerSelfResponse";
import { getDriver } from "@services/driver/getDriver";
import { getPassenger } from "@services/passenger/getPassenger";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { getRoleBasedOnToken } from "src/utils/getRoleBasedOnToken";

export interface ProfileHandle {
	actualizar: (patchProfile: PassengerPatchRequest) => void;
}

interface ProfileProps {
	previsualization?: {
		setPreview: (value: PassengerPatchRequest) => void;
		setUserId: (value: number) => void;
	}
}

export const Profile = forwardRef<ProfileHandle, ProfileProps>((props: ProfileProps, ref) => {
	const [profileInfo, setProfileInfo] = useState<
		DriverResponse | PassengerSelfResponse
	>();
	const [title, setTitle] = useState<string>("Pasajero");

	useEffect(() => {
		fetchProfileInfo();
	}, []);

	useImperativeHandle(ref, () => ({
		actualizar: (patchProfile: PassengerPatchRequest) => {
			const updated = {
				...profileInfo,
				firstName: patchProfile.firstName,
				lastName: patchProfile.lastName,
				phoneNumber: patchProfile.phoneNumber,
			}
			setProfileInfo(updated as PassengerSelfResponse);
			console.log("Profile updated:", updated);
		},
	}));

	async function fetchProfileInfo() {
		if (getRoleBasedOnToken() === "ROLE_DRIVER") {
			const response = await getDriver();
			setProfileInfo(response.data);
			if (props.previsualization) {
				props.previsualization.setPreview(response.data);
				props.previsualization.setUserId(response.data.id);
			}
			setTitle("Conductor");
			console.log("Driver Profile Info", response.data);
		} else if (getRoleBasedOnToken() === "ROLE_PASSENGER") {
			const response = await getPassenger();
			setProfileInfo(response.data);
			if (props.previsualization) {
				props.previsualization.setPreview(response.data);
				props.previsualization.setUserId(response.data.id);
			}
			console.log("Passenger Profile Info", response.data);
		} else {
			console.error("Error: No role found");
		}
	}

	return (
		<article className="justify-center items-center w-full px-10">
			<h1 className="title mb-3">{props.previsualization ? "Previsualización" : title}</h1>
			<section className="flex flex-row items-center justify-center">
				<div className="w-2/5">
					<FaUserCircle className="w-full text-9xl" />
				</div>
				<ul className="w-3/5 ml-6 list-disc items-center">
					<li id="profileNames">
						{profileInfo?.firstName} {profileInfo?.lastName}
					</li>
					<li id="profileEmail">
						{profileInfo?.email}
					</li>
					<li id="profilePhone">
						{profileInfo?.phoneNumber}
					</li>
					<li id="profileTrips">
						<b>N° viajes:</b> {profileInfo?.trips}
					</li>
				</ul>
			</section>
		</article>
	);
});
