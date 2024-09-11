import { api } from "./ApiService";

export const getAllAreas = () => api.get("areas/");
