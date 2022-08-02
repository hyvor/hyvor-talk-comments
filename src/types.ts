export type loadingState = 'loading' | 'success' | 'error';

export type InitCallResponse = {
    page: Page,
    website: Website,
    language: Language,
    user_page_state: UserPageState | null
}

export interface UserPageState {

    notifs_count: number,
    last_visit: number,
    reaction: ReactionType | null,
    votes: string[], // TODO: Change this

}

export interface Page {

    id: number,
    identifier: string,
    url: string,
    title: string,

    is_closed: boolean,
    is_premoderation_on: boolean,

    comments_count: number,

    reactions: Record<ReactionType, number>,
    ratings: {
        average: number,
        count: number
    }

}

export interface Website {

    id: number,

    text_comment_box: string | null,
    text_reply_box: string | null,
    text_no_comments: string | null,
    text_reactions: string | null,
    text_ratings: string | null,
    text_comment_count_0: string | null,
    text_comment_count_1: string | null,
    text_comment_count_multi: string | null,

    top_widget: 'none' | 'reactions' | 'ratings',
    reactions: ReactionConfig[]
    reaction_display_type: ReactionDisplayType

}

export type ReactionType = 'superb' | 'love' | 'wow' | 'sad' |  'laugh' | 'angry';
export type ReactionDisplayType = 'image' | 'text' | 'both';

export interface ReactionConfig {
    type: ReactionType,
    is_shown: boolean,
    image_url: string | null,
    text: string | null
}

/**
 * Returned from the /react endpoint
 * showing what changed
 */
export interface ReactionChange {
    increased: ReactionType | null,
    decreased: ReactionType | null
}

export interface Language {
    code: string,
    translations: Partial<TranslationsType>,
    is_rtl: boolean
}

export type TranslationsType = Record<TranslationsKeys, string>;

export type TranslationsKeys =
    'reactions_text' |
    'comments_0' |
    'comments_1' |
    'comments_multi'
;