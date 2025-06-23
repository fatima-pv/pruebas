export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    isDriver: boolean;
    category: any; // Puedes reemplazar 'any' por el tipo correspondiente si tienes la interfaz Category
    vehicle?: any; // Puedes reemplazar 'any' por el tipo correspondiente si tienes la interfaz VehicleResponseDto
}
