import fs from 'node:fs'
import path from 'node:path'

const dataPath = path.resolve(process.cwd(), 'server/data/scenario.json')

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    try {
        fs.writeFileSync(dataPath, JSON.stringify(body, null, 2))
        return { success: true }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to save scenario data',
        })
    }
})
