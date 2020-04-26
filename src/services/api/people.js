class PeopleService {

  constructor (api) {
    this.api = api;
  }

  create = async ({payload, tokens, successCallback = () => {}, errorCallback = () => {}}) => {
    const { uid, client, access_token } = tokens;
    await this.api({
      method: 'POST',
      endpoint: 'v1/people/create',
      payload,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback,
      errorCallback
    })
  }

  update = async ({payload, tokens, successCallback = () => {}, errorCallback = () => {}}) => {
    const { uid, client, access_token } = tokens;
    await this.api({
      method: 'PUT',
      endpoint: `v1/people/${payload.person.id}/update`,
      payload,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback,
      errorCallback
    })
  }

  delete = async ({id, tokens, successCallback = () => {}, errorCallback = () => {}}) => {
    const { uid, client, access_token } = tokens;
    await this.api({
      method: 'DELETE',
      endpoint: `v1/people/${id}/destroy`,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback,
      errorCallback
    })
  }

  getOne = async ({tokens, id}) => {
    const { uid, client, access_token } = tokens;
    const res = await this.api({
      method: 'GET',
      endpoint: `v1/people/${id}`,
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    return res;
  }

  getPeople = async ({tokens}) => {
    const { uid, client, access_token } = tokens;
    const res = await this.api({
      method: 'GET',
      endpoint: 'v1/people',
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    let data = [];

    if (res.data) {
      data = res.data.data.map((item) => {
        const attrs = item.attributes;

        return {
          id: item.id,
          ...attrs
        }
      });
    }

    return data;
  }
}

export default PeopleService
