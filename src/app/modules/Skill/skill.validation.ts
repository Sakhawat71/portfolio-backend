
import { z } from 'zod';

const createSkill = z.object({
    name: z.string()
        .min(1, "Name must be at least 2 characters")
        .max(50, "Name can't exceed 50 characters"),
    type: z.string()
        .min(1, "Type must be at least 2 characters")
        .max(30, "Type can't exceed 30 characters"),
});


// For updates (makes fields optional)
const updateSkill = createSkill.partial();

export {
    createSkill,
    updateSkill,
};