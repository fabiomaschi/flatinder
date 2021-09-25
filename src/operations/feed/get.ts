import { User } from '../../database/entities/user'

export interface GetFeedInput {
}

export interface GetFeedOutput {
  feed: Array<User>
}

export async function GetFeed (input: GetFeedInput): Promise<void> {
  console.log(input)
} 
