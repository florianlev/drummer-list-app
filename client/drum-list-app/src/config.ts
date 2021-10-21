const REST_API_URL = "http://localhost:4000"

export default {
  baseURI: REST_API_URL,
  api: {
    endpoints: {
      drummers: {
        all: `${REST_API_URL}/drummers`
        //id: (categoryId: string) => `${REST_API_URL}/category/${categoryId}`,
      }
    }
  },
  routes: {
    ROOT: '/',
    DASHBOARD: '/dashboard',
    VIDEOS: '/videos',
    HEADSET: '/headset/:id',
    WIFI: '/wifi'
  }
}