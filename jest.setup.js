import '@testing-library/jest-dom/extend-expect'

const { fetch, Request, Response, Headers } = globalThis
Object.assign(global, { fetch, Request, Response, Headers })
