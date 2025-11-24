import fs from 'node:fs'
import path from 'node:path'

const dataPath = path.resolve(process.cwd(), 'server/data/characters.json')

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // Basic validation
    if (!Array.isArray(body)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid data format',
        })
    }

    try {
        fs.writeFileSync(dataPath, JSON.stringify(body, null, 2))
        return { success: true }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to save character data',
        })
    }
})
