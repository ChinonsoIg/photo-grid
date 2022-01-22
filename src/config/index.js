import { createApi } from 'unsplash-js';

const APP_ACCESS_KEY = process.env.VUE_APP_ACCESSKEY;

const unsplash = createApi({
  accessKey: APP_ACCESS_KEY,
});

export default unsplash;
