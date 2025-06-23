export interface DriverResponse {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    category: any; // Reemplaza 'any' por el tipo correspondiente si tienes la interfaz Category
    trips: number;
    avgRating: number;
    vehicle: any; // Reemplaza 'any' por el tipo correspondiente si tienes la interfaz VehicleResponseDto
}
