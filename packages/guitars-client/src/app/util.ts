// the URL should be decided by the environment.

import { ApiClient } from "../../../guitars-common/dist"

export const createApiClient = () => {
    return new ApiClient('http://localhost:5000');
}