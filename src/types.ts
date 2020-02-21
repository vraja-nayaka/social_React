export type PhotosType = {
    small: string | null
    large: string | null
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type PostType = {
    id: number
    author: string
    message: string
    likesCount: number
}

export type UserType = {
    id: string
    name: string
    status: string
    photos: PhotosType
    followed: boolean
  }
