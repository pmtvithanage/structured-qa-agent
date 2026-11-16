import type { TopicSummary } from './types'

export class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export async function explainTopic(
  topic: string,
  signal?: AbortSignal,
): Promise<TopicSummary> {
  const response = await fetch('/api/explain', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic }),
    signal,
  })

  if (!response.ok) {
    let message = 'Something went wrong while generating the explanation.'
    try {
      const data: unknown = await response.json()
      if (
        data &&
        typeof data === 'object' &&
        'detail' in data &&
        typeof data.detail === 'string'
      ) {
        message = data.detail
      }
    } catch {
      // Keep the fallback message when the response is not JSON.
    }
    throw new ApiError(message, response.status)
  }

  return (await response.json()) as TopicSummary
}
