import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
    const name = process.env.SUPER_ADMIN_NAME!;
    const email = process.env.SUPER_ADMIN_EMAIL!;
    const password = process.env.SUPER_ADMIN_PASSWORD!;

    if (!email || !password || !name) {
        throw new Error("Missing SUPER_ADMIN_* environment variables");
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
        console.log("Super admin already exists.");
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role: 'SUPER_ADMIN',
        },
    });

    console.log("✅ Super admin seeded successfully.");
}

main()
    .catch(e => {
        console.error("❌ Error seeding super admin:", e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
