import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {

    const allUsers = await prisma.user.findMany()
    return Response.json(allUsers)

}

export async function POST(request: Request) {
    const body = await request.json()
    const { email, name, title, content } = body
    const allUsers = await prisma.user.create({
        data: {
            name: name,
            email: email,
            posts: {
                create: { title: title, content: content },
            },
        }
    })
    return Response.json(allUsers)

}