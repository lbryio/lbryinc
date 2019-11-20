const resource = 'app-strings';
const token = '1/9492ad42eff9cc8c2d5a141f8df3647570d7a641';

export function doTransifexUpload(contents, project, success, fail) {
  const url = `https://www.transifex.com/api/2/project/${project}/resources/`;
  const deleteUrl = `https://www.transifex.com/api/2/project/${project}/resource/${resource}/`;
  const headers = {
    Authorization: `Basic ${Buffer.from(`api:${token}`).toString('base64')}`,
    'Content-Type': 'application/json',
  };

  const req = {
    accept_translations: true,
    i18n_type: 'KEYVALUEJSON',
    name: resource,
    slug: resource,
    content: contents,
  };

  // always call delete first in order to replace the previous set of strings
  fetch(deleteUrl, { method: 'DELETE', headers }).then(() => {
    fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(req),
    })
      .then(response => {
        if (response.status !== 200 && response.status !== 201) {
          throw new Error('failed to upload to transifex');
        }

        return response.text();
      })
      .then(text => {
        let json;
        try {
          // transifex api returns Python dicts for some reason.
          // Any way to get the api to return valid JSON?
          json = JSON.parse(text);
        } catch (e) {
          // ignore
        }

        if (success) {
          success(json || text);
        }
      })
      .catch(err => {
        if (fail) {
          fail(err.message ? err.message : 'Could not upload strings resource to Transifex');
        }
      });
  });
}
