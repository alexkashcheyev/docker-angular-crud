
export function getServerUrl() {
    return eval(`import('process').then(
        ({ env }) => env.SERVER_URL ?? 'http://guitars-server:5000'
    )`)
}

//export const SERVER_URL = env.SERVER_URL ?? 'http://guitars-server:5000'