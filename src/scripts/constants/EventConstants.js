'use strict';

module.exports = {
    ActionTypes: {
        RECEIVE_CALENDAR_EVENTS: 'RECEIVE_CALENDAR_EVENTS',
        FETCH_CALENDAR_EVENTS: 'FETCH_CALENDAR_EVENTS',
        DISPLACE_EVENT: 'DISPLACE_EVENT',
        DISPLACED_EVENT: 'DISPLACED_EVENT',
        RESIZE_EVENT: 'RESIZE_EVENT',
        RESIZED_EVENT: 'RESIZED_EVENT',
        UPDATESOMEPROPS_EVENT: 'UPDATESOMEPROPS_EVENT',
        CREATE_EVENT: 'CREATE_EVENT',
        DELETE_EVENT: 'DELETE_EVENT',
        INJECT_EVENT: 'INJECT_EVENT', // local creation, without remote sync
        EJECT_EVENT: 'EJECT_EVENT', // local deletion, without remote sync
        CHANGE_CALENDAR: 'CHANGE_CALENDAR'
    }
};