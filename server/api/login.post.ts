export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()

    // Simple hardcoded password for now, or env variable
    // In a real app, use proper auth
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'aria123'

    if (body.password === ADMIN_PASSWORD) {
        return { token: 'admin-token-secret' }
    } else {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
        })
    }
})
