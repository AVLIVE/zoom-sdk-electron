const ZOOM_TYPE_OS_TYPE = {
  WIN_OS: 0,
  MAC_OS: 1
};

const ZoomSDK_LANGUAGE_ID = {
  LANGUAGE_Unknow: 0,
  LANGUAGE_English: 1,
  LANGUAGE_Chinese_Simplified: 2,
  LANGUAGE_Chinese_Traditional: 3,
  LANGUAGE_Japanese: 4,
  LANGUAGE_Spanish: 5,
  LANGUAGE_German: 6,
  LANGUAGE_French: 7,
  LANGUAGE_Italian: 8,
  LANGUAGE_Portuguese: 9,
  LANGUAGE_Russian: 10
};

const ZoomSDKError = {
  SDKERR_SUCCESS: 0, // Success Result
  SDKERR_NO_IMPL: 1, // Not support this feature now 
  SDKERR_WRONG_USEAGE: 2, // Wrong useage about this feature 
  SDKERR_INVALID_PARAMETER: 3, // Wrong parameter 
  SDKERR_MODULE_LOAD_FAILED: 4, // Load module failed 
  SDKERR_MEMORY_FAILED: 5, // No memory allocated 
  SDKERR_SERVICE_FAILED: 6, // Internal service error 
  SDKERR_UNINITIALIZE: 7, // Not initialize before use 
  SDKERR_UNAUTHENTICATION: 8, // Not Authentication before use
  SDKERR_NORECORDINGINPROCESS: 9, // No recording in process
  SDKERR_TRANSCODER_NOFOUND: 10, // can't find transcoder module
  SDKERR_VIDEO_NOTREADY: 11, // Video service not ready
  SDKERR_NO_PERMISSION: 12, // No premission to do this
  SDKERR_UNKNOWN: 13, // Unknown error 
  SDKERR_OTHER_SDK_INSTANCE_RUNNING: 14
};

const ZoomAuthResult = {
	AUTHRET_SUCCESS: 0, // Auth Success 
	AUTHRET_KEYORSECRETEMPTY: 1, // Key or Secret is empty
	AUTHRET_KEYORSECRETWRONG: 2, // Key or Secret is wrong
	AUTHRET_ACCOUNTNOTSUPPORT: 3, // Client Account does not support
	AUTHRET_ACCOUNTNOTENABLESDK: 4, // Client account does not enable SDK
	AUTHRET_UNKNOWN: 5, // Auth Unknown error
	AUTHRET_NONE: 6, // Initial status
};

const ZoomLoginStatus = {
	LOGIN_IDLE: 0, // Not login
	LOGIN_PROCESSING: 1, // Login in processing
	LOGIN_SUCCESS: 2, // Login success
	LOGIN_FAILED: 3, // Login failed
};

const ZoomMeetingStatus = {
	MEETING_STATUS_IDLE: 0, // Idle status, no meeting running
	MEETING_STATUS_CONNECTING: 1, // Connecting meeting server status
	MEETING_STATUS_WAITINGFORHOST: 2, // Waiting for host to start meeting
	MEETING_STATUS_INMEETING: 3, // Meeting is ready, in meeting status
	MEETING_STATUS_DISCONNECTING: 4, // Disconnecting meeting server status
	MEETING_STATUS_RECONNECTING: 5, // Reconnecting meeting server status
	MEETING_STATUS_FAILED: 6, // Meeting connection error
	MEETING_STATUS_ENDED: 7, // Meeting is ended
	MEETING_STATUS_UNKNOW: 8,
	MEETING_STATUS_LOCKED: 9,
	MEETING_STATUS_UNLOCKED: 10,
	MEETING_STATUS_IN_WAITING_ROOM: 11,
	MEETING_STATUS_WEBINAR_PROMOTE: 12,
	MEETING_STATUS_WEBINAR_DEPROMOTE: 13,
	MEETING_STATUS_JOIN_BREAKOUT_ROOM: 14,
	MEETING_STATUS_LEAVE_BREAKOUT_ROOM: 15,
  MEETING_STATUS_AUDIO_READY: 16,
  MEETING_STATUS_OTHER_MEETING_INPROGRESS: 17
};

const ZoomUserType = {
  ZoomUserType_APIUSER: 0,
	ZoomUserType_EMAIL_LOGIN: 1,
	ZoomUserType_FACEBOOK: 2,
	ZoomUserType_GoogleOAuth: 3,
	ZoomUserType_SSO: 4,
	ZoomUserType_Unknown: 5
};

const MeetingType = {
  MEETING_TYPE_NONE: 0,
  MEETING_TYPE_NORMAL: 1,
  MEETING_TYPE_WEBINAR: 2,
  MEETING_TYPE_BREAKOUTROOM: 3
};

const ZoomMeetingFailCode = {
	MEETING_SUCCESS: 0,
	MEETING_FAIL_NETWORK_ERR: 1,
	MEETING_FAIL_RECONNECT_ERR: 2,
	MEETING_FAIL_MMR_ERR: 3,
	MEETING_FAIL_PASSWORD_ERR: 4,
	MEETING_FAIL_SESSION_ERR: 5,
	MEETING_FAIL_MEETING_OVER: 6,
	MEETING_FAIL_MEETING_NOT_START: 7,
	MEETING_FAIL_MEETING_NOT_EXIST: 8,
	MEETING_FAIL_MEETING_USER_FULL: 9,
	MEETING_FAIL_CLIENT_INCOMPATIBLE: 10, // RESULT_ZC_INCOMPATIBLE
	MEETING_FAIL_NO_MMR: 11,
	MEETING_FAIL_CONFLOCKED: 12,
	MEETING_FAIL_MEETING_RESTRICTED: 13,
	MEETING_FAIL_MEETING_RESTRICTED_JBH: 14,
	MEETING_FAIL_CANNOT_EMIT_WEBREQUEST: 15,
	MEETING_FAIL_CANNOT_START_TOKENEXPIRE: 16,
	SESSION_VIDEO_ERR: 17,
	SESSION_AUDIO_AUTOSTARTERR: 18,
	MEETING_FAIL_REGISTERWEBINAR_FULL: 19,
	MEETING_FAIL_REGISTERWEBINAR_HOSTREGISTER: 20,
	MEETING_FAIL_REGISTERWEBINAR_PANELISTREGISTER: 21,
	MEETING_FAIL_REGISTERWEBINAR_DENIED_EMAIL: 22,
	MEETING_FAIL_ENFORCE_LOGIN: 23,
	MEETING_FAIL_WRITE_CONFIG_FILE: 50,	// Failed to write configure file
  MEETING_FAIL_FORBID_TO_JOIN_INTERNAL_MEETING: 60,
  MEETING_FAIL_REMOVEDBYHOST: 61,
  MEETING_FAIL_UNKNOWN: 100,
  MEETING_FAIL_NONE: 101
};

const MeetingEndReason = {
  EndMeetingReason_None: 0,
	EndMeetingReason_KickByHost: 1,
	EndMeetingReason_EndByHost: 2,
	EndMeetingReason_JBHTimeOut: 3,
	EndMeetingReason_NoAttendee: 4,
	EndMeetingReason_HostStartAnotherMeeting: 5,
	EndMeetingReason_FreeMeetingTimeOut: 6,
	EndMeetingReason_NetworkBroken: 7
}

const ZoomMeetingUIFloatVideoType = {
	FLOATVIDEO_List: 0,
	FLOATVIDEO_Small: 1,
	FLOATVIDEO_Large: 2,
	FLOATVIDEO_Minimize: 3
};

const ZoomMeetingButtonType = {
  ButtonType_ToolBarParticipant: 0,
  ButtonType_ToolBarShare: 1,
  ButtonType_ToolBarInvite: 2,
};

const ZoomMeetingUIViewType = {
	MEETINGUI_FIRST_MONITOR:0,
	MEETINGUI_SECOND_MONITOR:1,
};

const ZoomAnnotationToolType = {
	ANNOTOOL_NONE_DRAWING: 0, // switch to mouse 
	ANNOTOOL_PEN: 1,
	ANNOTOOL_HIGHLIGHTER: 2,
	ANNOTOOL_AUTO_LINE: 3,
	ANNOTOOL_AUTO_RECTANGLE: 4,
	ANNOTOOL_AUTO_ELLIPSE: 5,
	ANNOTOOL_AUTO_ARROW: 6,
	ANNOTOOL_AUTO_RECTANGLE_FILL: 7,
	ANNOTOOL_AUTO_ELLIPSE_FILL: 8,
	ANNOTOOL_SPOTLIGHT: 9,
	ANNOTOOL_ARROW: 10,
	ANNOTOOL_ERASER: 11 // earser
};

const ZoomAnnotationClearType = {
  ANNOCLEAR_ALL: 0,
	ANNOCLEAR_SELF: 1,
  ANNOCLEAR_OTHER: 2
};

const ZoomMeetingAudioStatus = {
  Audio_None: 0,
  Audio_Muted: 1,
  Audio_UnMuted: 2,
  Audio_Muted_ByHost: 3,
  Audio_UnMuted_ByHost: 4,
  Audio_MutedAll_ByHost: 5,
  Audio_UnMutedAll_ByHost: 6,
};

const ZoomMeetingVideoStatus = {
  Video_ON: 0,
  Video_OFF: 1,
};

const ConnectionQuality = {
	Conn_Quality_Unknow: 0,
	Conn_Quality_Very_Bad: 1,
	Conn_Quality_Bad: 2,
	Conn_Quality_Not_Good: 3,
	Conn_Quality_Normal: 4,
	Conn_Quality_Good: 5,
	Conn_Quality_Excellent: 6
};

const ZoomH323deviceType = {
	H323DeviceType_Unknown:0, // Unknown device, only for initialization.
	H323DeviceType_H323:1, // H.323 device.
	H323DeviceType_SIP:2, // SIP device.
	H323DeviceType_BOTH:3, // H.323 device and SIP device.
};

const ZoomH323CalloutStatus = {
	H323Callout_Unknown:0, // Used only for initialization.
	H323Callout_Success:1,// Call successfully.
	H323Callout_Ring:2,   // Bell during the call.
	H323Callout_Timeout:3, // Call timeout.
	H323Callout_Failed:4, // Call fails.
}

const MeetingReminderType = {
  MeetingReminderType_CanFreeTrial:0, // host
  MeetingReminderType_CanUpgradeAccount:1, //host
  MeetingReminderType_GuestReminder:2, //guest
  MeetingReminderType_UpgradeSuccess:3,
  MeetingReminderType_UpgradeFailed:4,
  MeetingReminderType_None:5
}

module.exports = {
  ZOOM_TYPE_OS_TYPE: ZOOM_TYPE_OS_TYPE,
  ZoomSDK_LANGUAGE_ID: ZoomSDK_LANGUAGE_ID,
  ZoomSDKError: ZoomSDKError,
  ZoomAuthResult: ZoomAuthResult,
  ZoomLoginStatus: ZoomLoginStatus,
  ZoomMeetingStatus: ZoomMeetingStatus,
  ZoomUserType: ZoomUserType,
  MeetingType: MeetingType,
  ZoomMeetingFailCode: ZoomMeetingFailCode,
  MeetingEndReason: MeetingEndReason,
  ZoomMeetingUIFloatVideoType: ZoomMeetingUIFloatVideoType,
  ZoomMeetingButtonType: ZoomMeetingButtonType,
  ZoomMeetingUIViewType: ZoomMeetingUIViewType,
  ZoomAnnotationToolType: ZoomAnnotationToolType,
  ZoomAnnotationClearType: ZoomAnnotationClearType,
  ZoomMeetingAudioStatus: ZoomMeetingAudioStatus,
  ZoomMeetingVideoStatus: ZoomMeetingVideoStatus,
  ConnectionQuality: ConnectionQuality,
  ZoomH323deviceType: ZoomH323deviceType,
  ZoomH323CalloutStatus: ZoomH323CalloutStatus,
  MeetingReminderType: MeetingReminderType
}
  