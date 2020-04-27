class MovieService {

  constructor (api) {
    this.api = api;
  }

  getRoles = async ({tokens}) => {
    const { uid, client, access_token } = tokens;
    const res = await this.api({
      method: 'GET',
      endpoint: 'v1/roles',
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    return res.data;
  }

}

export default MovieService
