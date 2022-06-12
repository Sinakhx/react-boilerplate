export interface UserDto {
    id: number
    firstName?: string
    lastName?: string
    /** Format: int64 */
    nationalId?: number
    phoneNumber?: string
    /** Format: date-time (ISO) */
    birthDay?: string
}
