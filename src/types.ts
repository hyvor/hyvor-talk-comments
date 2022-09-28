export type loadingState = 'loading' | 'success' | 'error';

export type InitCallResponse = {
    page: Page,
    website: Website,
    language: Language,
    user_page_state: UserPageState | null,
    user: User | null,
    comments: CommentsCallResponse
}

export interface UserPageState {

    notifs_count: number,
    last_visit: number,
    reaction: ReactionType | null,
    votes: Record<number, VoteType>

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

export type SortType = 'top' | 'newest' | 'oldest';
export type VoteType = 'up' | 'down';

export interface Website {

    id: number,
    name: string,

    is_profile_pictures_on: boolean,

    default_sort: SortType,
    default_avatar: string | null,

    voting: 'both' | 'upvotes' | 'none',

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
    text: string
}

export interface Language {
    code: string,
    translations: Partial<TranslationsType>,
    is_rtl: boolean
}

export type TranslationsType = Record<TranslationsKeys, string>;

export type TranslationsKeys =
    'reactions_text' |

    'login' |
    'signup' |

    'comments_0' |
    'comments_1' |
    'comments_multi' |


    'top' |
    'newest' |
    'oldest' |

    'just_now' |
    'ago_seconds' |
    'ago_day' |
    'ago_days' |
    'ago_hour' |
    'ago_hours' |
    'ago_minute' |
    'ago_minutes' |
    'ago_year' |
    'ago_years' |

    'featured' |
    'pending' |
    'loved_by' |
    'team' |
    'author' |

    'expand_comment' |
    'expand_comments' |
    'load_more_comments' |
    'more_replies' |
    'reply'

;


export interface Comment {
    id: number,
    created_at: number,
    parent_id: number | null,
    content: string
    content_html: string,
    is_featured: boolean,
    is_loved: boolean,
    upvotes: number,
    downvotes: number,
    depth: number,
    user: User
}

export type CommentsListIndex = 'PARENT' | number;
export type CommentsListStateType = Record<CommentsListIndex, number[]>;

export interface CommentsCallResponse {
    list: CommentsListStateType,
    indexed: Record<number, Comment>,
    has_more_ids: number[]
}

export interface User {
    type: 'hyvor' | 'sso' | null,
    id?: number,
    name: string,
    username: string,
    picture_url: string | null,
    bio: string | null,
    location: string | null,
    website_url: string | null,
}