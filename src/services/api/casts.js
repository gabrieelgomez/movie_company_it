class MovieService {

  constructor (api) {
    this.api = api;
  }

  create = async ({payload, tokens, successCallback = () => {}, errorCallback = () => {}}) => {
    const { uid, client, access_token } = tokens;
    const res = await this.api({
      method: 'POST',
      endpoint: 'v1/casts/create',
      payload,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback,
      errorCallback
    })
    return res;
  }

  delete = async ({id, tokens, successCallback = () => {}, errorCallback = () => {}}) => {
    const { uid, client, access_token } = tokens;
    await this.api({
      method: 'DELETE',
      endpoint: `v1/casts/${id}/destroy`,
      headers: {
        'access-token': access_token,
        client, uid
      },
      errorCallback
    }).then((response) => {
        successCallback(response)
    })
  }

}

export default MovieService
