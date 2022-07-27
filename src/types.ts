
export type loadingState = 'loading' | 'success' | 'error';

export type InitCallResponse = {
    page: Page,
    website: Website
}

export interface Page {

    id: number,
    identifier: string,
    url: string,
    title: string,

    is_closed: boolean,
    is_premoderation_on: boolean,

    comments_count: number,

    reactions: number[],
    ratings: {
        average: number,
        count: number
    }

}

export interface Website {

    top_widget: 'none' | 'reactions' | 'ratings',

}

