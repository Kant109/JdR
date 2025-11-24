import path from 'node:path'
import fs from 'node:fs'
import { randomUUID } from 'node:crypto'

export default defineEventHandler(async (event) => {
    try {
        const files = await readMultipartFormData(event)

        if (!files || files.length === 0) {
            throw createError({
                statusCode: 400,
                statusMessage: 'No file uploaded (files array is empty)',
            })
        }

        const file = files[0]
        if (!file.filename) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Invalid file (no filename)',
            })
        }

        // Ensure uploads directory exists
        const uploadDir = path.resolve(process.cwd(), 'public/uploads')
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true })
        }

        // Generate unique filename
        const ext = path.extname(file.filename)
        const filename = `${randomUUID()}${ext}`
        const filePath = path.join(uploadDir, filename)

        // Save file
        fs.writeFileSync(filePath, file.data)

        // Return public URL
        return {
            url: `/uploads/${filename}`
        }
    } catch (error: any) {
        console.error('Upload error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
