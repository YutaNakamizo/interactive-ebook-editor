import { v4 } from "uuid";
import { UUID } from "@/types/uuid";

export const generateId = () => v4() as UUID;
