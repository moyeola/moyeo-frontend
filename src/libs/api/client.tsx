import { EndpointClient } from "endpoint-client";
import {
    DeleteGroup,
    DeleteUserMe,
    GetAuthToken,
    GetGroup,
    GetUserMe,
    PatchGroup,
    PatchUserMe,
    PostAuthGoogle,
    PostDevAccessToken,
    PostDevAuth,
    PostGroup,
} from "moyeo-object";

export class MoyeoClient extends EndpointClient {
    readonly users = {
        me: {
            get: this.endpointBuilder(GetUserMe),
            patch: this.endpointBuilder(PatchUserMe),
            delete: this.endpointBuilder(DeleteUserMe),
        },
    };

    readonly groups = {
        post: this.endpointBuilder(PostGroup),
        get: this.endpointBuilder(GetGroup),
        patch: this.endpointBuilder(PatchGroup),
        delete: this.endpointBuilder(DeleteGroup),
    };

    readonly auth = {
        google: {
            post: this.endpointBuilder(PostAuthGoogle),
        },
        token: {
            get: this.endpointBuilder(GetAuthToken),
        },
    };

    readonly dev = {
        accessToken: {
            post: this.endpointBuilder(PostDevAccessToken),
        },
        auth: {
            post: this.endpointBuilder(PostDevAuth),
        },
    };
}
