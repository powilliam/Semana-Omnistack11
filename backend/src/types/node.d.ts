declare namespace NodeJS {
  export interface ProcessEnv {
    host: string
    port: number
    username: string
    password: string
    database: string
  }
}
