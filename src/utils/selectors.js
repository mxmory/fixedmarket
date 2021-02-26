import { createSelector } from 'reselect';

export const _getMyTeam = createSelector(
    (state) => state.userTeams,
    (state) => state.userInfo,
    (teams, user) => teams.find((team) => team.owner === user.id)
);

export const _getTeams = createSelector(
    (state) => state.userTeams,
    (teams) => teams
);

export const _getUser = createSelector(
    (state) => state.userInfo,
    (user) => user
);

export const _getTeamById = createSelector(
    _getTeams,
    (_, teamId) => +teamId,
    (teams, teamId) => teams.find((team) => team.id === teamId)
);

export const _getCurrentTeam = createSelector(
    (state) => state.appMeta.currentTeam,
    (team) => team
);

export const _getProjects = createSelector(
    (state) => state.userProjects,
    (projects) => projects
);

export const _getProjectById = createSelector(
    _getProjects,
    (_, projectId) => +projectId,
    (projects, projectId) =>
        projects.find((project) => project.id === projectId)
);

export const _getTeamProjects = createSelector(
    _getProjects,
    (_, teamId) => +teamId,
    (projects, teamId) => projects.filter((project) => project.team === teamId)
);

export const _getProjectHistory = createSelector(
    (state) => state.history,
    (_, projectId) => +projectId,
    (history, projectId) =>
        history.filter((event) => event.project_id === projectId)
);

export const _getProjectComponents = createSelector(
    (state) => state.components,
    (_, projectId) => +projectId,
    (components, projectId) => components[projectId] || []
);

export const _getAttachments = createSelector(
    (state) => state.attachments,
    (attachments) => attachments
);

export const _getLang = (state) => state.appMeta.lang;
export const _getCurrenActivity = (state) => state.appMeta.currentActivity;
export const _getInitData = (state) => state.appMeta.initData;
