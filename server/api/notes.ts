import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	try {
		const notes = await prisma.note.findMany()
        console.log(notes)
        return notes
	} catch (err) {
        console.log(err)
    }
})
