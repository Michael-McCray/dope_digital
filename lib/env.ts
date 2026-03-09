const serverEnv = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
} as const

/**
 * Returns the value of a required server-side env var.
 * Throws at call time (request time) if not set, surfacing the issue immediately.
 */
export function requireEnv(key: keyof typeof serverEnv): string {
  const value = serverEnv[key]
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${key}. ` +
        `Please add it to your .env.local file or deployment environment.`
    )
  }
  return value
}

export function isEnvConfigured(key: keyof typeof serverEnv): boolean {
  return !!serverEnv[key]
}
