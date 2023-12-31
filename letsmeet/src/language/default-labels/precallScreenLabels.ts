import {ClientRole} from '../../../agora-rn-uikit';
import {I18nBaseType} from '../i18nTypes';

export interface JoinRoomButtonTextInterface {
  ready: boolean;
  role?: ClientRole;
}
export interface I18nPrecallScreenLabelsInterface {
  //commented for v1 release
  // precallLabel?: I18nBaseType; //
  // selectInputDeviceLabel?: I18nBaseType; //
  // userNamePlaceholder?: I18nBaseType; //
  // fetchingNamePlaceholder?: I18nBaseType; //
  // loadingWithDots?: I18nBaseType;
  joinRoomButton?: I18nBaseType<JoinRoomButtonTextInterface>; // need to check
  waitingRoomButton?: I18nBaseType<JoinRoomButtonTextInterface>; // need to check
}

export const PrecallScreenLabels: I18nPrecallScreenLabelsInterface = {
  //commented for v1 release
  // precallLabel: 'Precall',
  // selectInputDeviceLabel: 'Select Input Device',
  // userNamePlaceholder: 'Display name*',
  // fetchingNamePlaceholder: 'Getting name...',
  // loadingWithDots: 'Loading...',
  joinRoomButton: ({ready, role}) =>
    ready
      ? !role
        ? 'JOIN ROOM'
        : `JOIN ROOM AS ${
            role === ClientRole.Broadcaster ? 'HOST' : 'AUDIENCE'
          }`
      : `Loading...`,
  waitingRoomButton: ({ready}) =>
    ready ? 'Ask To Join' : `Waiting for approval...`,
};
