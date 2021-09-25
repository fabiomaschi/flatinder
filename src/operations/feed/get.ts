import { getCustomRepository } from 'typeorm'
import { Feed } from '../../database/entities/feed'
import { User } from '../../database/entities/user'
import { FeedRepository } from '../../database/repositories/feed'

export interface GetFeedInput {
}

export interface GetFeedOutput {
  feed: Array<User>
}

export async function GetFeed (input: GetFeedInput): Promise<void> {
  
} 
