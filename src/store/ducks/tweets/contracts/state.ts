export enum LoadingState  {
    LOADED ='LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}


export interface Tweet {
    _id: string,
    text: string
    user: {
        userName: string
        fullName: string
        avatarUrl: string
    }
}

export interface TweetStateType  {
    items: Tweet[]
    loadingState: LoadingState
}