enum LoadingState  {
    LOADED ='LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}


export type TweetType = {
    text: string
    user: {
        username: string
        fullname: string
        avatarUrl: string
    }
}

export type TweetStateType = {
    item: TweetType[]
    loadingState: LoadingState
}