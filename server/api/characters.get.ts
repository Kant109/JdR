import fs from 'node:fs'
import path from 'node:path'

const dataPath = path.resolve(process.cwd(), 'server/data/characters.json')

export default defineEventHandler(async (event) => {
    try {
        const data = fs.readFileSync(dataPath, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to read character data',
        })
    }
})
