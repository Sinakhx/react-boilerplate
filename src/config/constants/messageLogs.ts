/*********************************************
 ************* HTTP status codes *************
 *********************************************/
export const MSG_200_SUCCESS = 'request was successful'
export const MSG_400_BAD_REQUEST = 'bad request'
export const MSG_401_UNAUTHORIZED =
    'you are not authorized to access this resource'
export const MSG_403_FORBIDDEN = 'you are not forbidden to access this resource'
export const MSG_404_NOT_FOUND = 'resource not found'
export const MSG_500_SERVER_ERROR =
    'server error, please try again later or contact the administrator'
export const MSG_XXX_ERROR_RETRY = 'error, please try again'

/*********************************************
 ************ Form-input warnings ************
 *********************************************/
export const REQUIRED_INPUT = 'This field is required'
export const INACTIVE = 'This field is inactive'
export const ENTER_BASED_ON_PATTERN = 'Enter based on pattern'
export const CharsAreLessThan = (num: number) =>
    `This field must be more than ${num} characters`
export const CharsAreMoreThan = (num: number) =>
    `This field must be less than ${num} characters`
