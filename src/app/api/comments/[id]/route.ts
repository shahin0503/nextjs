import { redirect } from "next/navigation";
import { comments } from "../data";

export function GET(request: Request, { params }: { params: { id: number } }) {
    if (params.id > comments.length) {
        redirect("/api/comments")
    }
    const comment = comments.find((comm) => comm.id == params.id)
    return Response.json(comment)
}

export async function PATCH(request: Request, { params }: { params: { id: number } }) {
    const body = await request.json()
    const { text } = body
    const index = comments.findIndex((comment) => comment.id == params.id)
    comments[index].text = text;
    return Response.json(comments[index])
}

export async function DELETE(request: Request, { params }: { params: { id: number } }) {
    const index = comments.findIndex((comment) => comment.id == params.id)
    const deletedComment = comments[index]
    comments.splice(index, 1)
    return Response.json(deletedComment)
}