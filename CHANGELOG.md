# CHANGELOG

## 2019-09-04 @ [v4.4.55968.0904](https://github.com/zoom/zoom-sdk-electron/releases/tag/v4.4.55968.0904)

## Added
*  Add pre-meeting features that include schedule/edit/delete a meeting, get a list of current meetings or set corresponding callbacks. All new interfaces are available in `ZoomNodePremeetingWrap`:
* `ZoomNodePremeetingWrap::ScheduleMeetingWithWndParams(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodePremeetingWrap::ScheduleMeeting(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodePremeetingWrap::EditMeetingWithWndParams(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodePremeetingWrap::EditMeeting(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodePremeetingWrap::ListMeeting(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodePremeetingWrap::DeleteMeeting(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodePremeetingWrap::SetOnScheduleOrEditMeetingCB(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodePremeetingWrap::SetOnListMeetingCB(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodePremeetingWrap::SetOnDeleteMeetingCB(const v8::FunctionCallbackInfo<v8::Value>& args);`
*  Add callbacks for scheduling/editing/listing/deleting meeting
* `ZNativeSDKPreMeetingWrapSink::onScheduleOrEditMeeting(ZNPremeetingAPIResult result, unsigned long long meetingUniqueID);`
* `ZNativeSDKPreMeetingWrapSink::onListMeeting(ZNPremeetingAPIResult result, unsigned long long meetingUniqueID);`
* `ZNativeSDKPreMeetingWrapSink::onDeleteMeeting(ZNPremeetingAPIResult result, unsigned long long meetingUniqueID);`
*  Add direct share feature to allow sharing your screen/app/white_board directly after login with meetingNumber/paringCode. All new interfaces are available in `ZoomNodeDirectShareHelperWrap:`
* `ZoomNodeDirectShareHelperWrap::CanStartDirectShare(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodeDirectShareHelperWrap::IsDirectShareInProgress(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodeDirectShareHelperWrap::StartDirectShare(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodeDirectShareHelperWrap::StopDirectShare(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodeDirectShareHelperWrap::SetDirectShareStatusUpdateCB(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodeDirectShareHelperWrap::TryWithMeetingNumber(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodeDirectShareHelperWrap::TryWithPairingCode(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodeDirectShareHelperWrap::Cancel(const v8::FunctionCallbackInfo<v8::Value>& args);`
*  Add a new callback for the status of direct sharing changes
* `ZNativeSDKDirectShareHelperWrapSink::OnDirectShareStatusUpdate(ZNDirectShareStatus status);`
*  Add 2 new interfaces for getting participants list and specific user's information
* `ZoomNodeMeetingParticipantsCtrlWrap::GetParticipantsList(const v8::FunctionCallbackInfo<v8::Value>& args);`
* `ZoomNodeMeetingParticipantsCtrlWrap::GetUserInfoByUserID(const v8::FunctionCallbackInfo<v8::Value>& args);`
*  Add new callbacks for identifying the active speaker.
* `ZNativeSDKMeetingAudioWrapSink::onUserActiveAudioChange(ZNList<unsigned int > lstActiveAudio);`
* `ZNativeSDKMeetingVideoWrapSink::onActiveSpeakerVideoUserChanged(unsigned int userId);`
* `ZNativeSDKMeetingVideoWrapSink::virtual void onActiveVideoUserChanged(unsigned int userId);`

## Changed & Fixed
*  Optimized the way of setting callback functions. Most of the callbacks are now set by using "Set###CB" interfaces, such as `ZoomNodeAuthWrap::SetOnAuthReturnCB`. Some of the interfaces, such as `ZoomNodeAuthWrap::Auth`, need not pass a callback function as a parameter
*  Modified the types of `userId` and `meetingNumber` from String to Number.

## 2019-07-15 @ [v4.4.55130.0712](https://github.com/zoom/zoom-sdk-electron/releases/tag/v4.4.55130.0712)

We have merged and unified the `windows-electron-sdk` and the `mac-electron-sdk` into one single SDK.

The new Electron SDK has a brand new structure, consist of the `node-interface` and the `node-core`:

* **Node-interface**: contains all the implementations by V8 engine
* **Node-core**: contains all the uniform interfaces for both Windows and Mac

Due to the open source nature of this SDK, you will be able to configure and compile the new Zoom Electron SDK with any versions of Electron.

**Added**

* Added newly developed interfaces by referring to the previous Windows Electron SDK
* Added newly developed interfaces by referring to the previous Mac Electron SDK
* Can support any version of Electron
