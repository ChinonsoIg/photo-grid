import { createApi } from 'unsplash-js';

const APP_ACCESS_KEY = 'VjreqcBzdgxFD_yx9o5XSAafl50yWgBrpx5twK5cWtw';

const unsplash = createApi({
  accessKey: APP_ACCESS_KEY,
});

export default unsplash;
