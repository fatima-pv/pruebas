import Api from "@services/api";
import { useAuthContext } from "@contexts/AuthContext";
export async function deletePassenger(id: number) {
    const { session } = useAuthContext();
    try {
        const api = await Api.getInstance();
        const response = await api.delete({
            url: `/passengers/${id}`,
            headers: {
                Authorization: `Bearer ${session}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
