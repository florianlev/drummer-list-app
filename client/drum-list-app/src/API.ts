import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  //try {
    const drummers: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/drummers"
    )
    console.log(drummers)
    return drummers
  /*} catch (error) {
    throw new Error(error)
  }*/
}