import type { IBase } from './root.types'

export interface ITaskResponse extends IBase {
    name: string
    priority: string
    isCompleted: boolean
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>