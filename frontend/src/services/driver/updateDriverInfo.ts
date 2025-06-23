import Api from "../api";
import { DriverPatchRequest } from "@interfaces/driver/DriverPatchRequest";
import { DriverResponse } from "@interfaces/driver/DriverResponse";

export async function updateDriverInfo(
    id: number,
    driverPatchRequest: DriverPatchRequest,
): Promise<DriverResponse> {
    const api = await Api.getInstance();
    const response = await api.patch<DriverPatchRequest, DriverResponse>(driverPatchRequest, {
        url: `/driver/${id}`,
    });
    return response.data;
}