// Using Response data models to ensure that we get exact response from API requests
// Also by following this we ignore any externally injected data in response
// Note: We can also add further more details to the response object

export interface LoginResponseModel {
  status: number,
  message: string,
  user_data: [any]
}

export interface RegisterResponseModel {
  status: number,
  message: string,
  user_data: [any]
}
