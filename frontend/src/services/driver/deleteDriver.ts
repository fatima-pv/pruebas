import Api from "../api";

export async function deleteDriver(id: number) {
    const api = await Api.getInstance();
    return api.delete({ url: `/driver/${id}` });
}