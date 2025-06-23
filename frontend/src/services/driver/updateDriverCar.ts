import Api from "../api";
import { VehicleResponse } from "@interfaces/vehicle/VehicleResponse";

export async function updateDriverCar(id: number, vehicle: VehicleResponse) {
    const api = await Api.getInstance();
    const response = await api.patch<VehicleResponse, VehicleResponse>(vehicle, {
        url: `/driver/${id}/vehicle`,
    });
    return response.data;
}