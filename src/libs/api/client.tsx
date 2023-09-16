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
    GetCalendar,
    GetCalendars,
    PatchCalendar,
    GetCalendarEvents,
    PostCalendarEvent,
    PatchCalendarEvent,
    DeleteCalendarEvent,
    PostFile,
    GetMeet,
    GetMeets,
    PostMeet,
    PatchMeet,
    DeleteMeet,
    GetMeetResponse,
    PostMeetResponse,
    PatchMeetResponse,
    DeleteMeetResponse,
    SearchCalendars,
    GetGroupMember,
    GetGroupMembers,
    GetGroupsSearch,
    PostGroupMembers,
    PatchGroupMember,
    DeleteGroupMember,
    GetUserMeNotifications,
    DeleteUserMeNotification,
} from "moyeo-object";

export class MoyeoClient extends EndpointClient {
    readonly users = {
        me: {
            get: this.endpointBuilder(GetUserMe),
            patch: this.endpointBuilder(PatchUserMe),
            delete: this.endpointBuilder(DeleteUserMe),
            notifications: {
                get: this.endpointBuilder(GetUserMeNotifications),
                delete: this.endpointBuilder(DeleteUserMeNotification),
            },
        },
    };

    readonly groups = {
        post: this.endpointBuilder(PostGroup),
        get: this.endpointBuilder(GetGroup),
        patch: this.endpointBuilder(PatchGroup),
        delete: this.endpointBuilder(DeleteGroup),
        search: this.endpointBuilder(GetGroupsSearch),
        members: {
            get: this.endpointBuilder(GetGroupMember),
            list: this.endpointBuilder(GetGroupMembers),
            post: this.endpointBuilder(PostGroupMembers),
            patch: this.endpointBuilder(PatchGroupMember),
            delete: this.endpointBuilder(DeleteGroupMember),
        },
    };

    readonly calendars = {
        get: this.endpointBuilder(GetCalendar),
        list: this.endpointBuilder(GetCalendars),
        patch: this.endpointBuilder(PatchCalendar),
        search: this.endpointBuilder(SearchCalendars),
        event: {
            list: this.endpointBuilder(GetCalendarEvents),
            post: this.endpointBuilder(PostCalendarEvent),
            patch: this.endpointBuilder(PatchCalendarEvent),
            delete: this.endpointBuilder(DeleteCalendarEvent),
        },
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

    readonly files = {
        post: this.endpointBuilder(PostFile),
    };

    readonly meets = {
        get: this.endpointBuilder(GetMeet),
        list: this.endpointBuilder(GetMeets),
        post: this.endpointBuilder(PostMeet),
        patch: this.endpointBuilder(PatchMeet),
        delete: this.endpointBuilder(DeleteMeet),
        response: {
            get: this.endpointBuilder(GetMeetResponse),
            post: this.endpointBuilder(PostMeetResponse),
            patch: this.endpointBuilder(PatchMeetResponse),
            delete: this.endpointBuilder(DeleteMeetResponse),
        },
    };
}
