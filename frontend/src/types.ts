export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface TopicSummary {
  title: string
  summary: string
  key_points: string[]
  difficulty: Difficulty
  example: string
}
