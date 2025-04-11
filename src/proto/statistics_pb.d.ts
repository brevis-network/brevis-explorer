import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';


export class GetAppInfosRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppInfosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppInfosRequest): GetAppInfosRequest.AsObject;
  static serializeBinaryToWriter(message: GetAppInfosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppInfosRequest;
  static deserializeBinaryFromReader(message: GetAppInfosRequest, reader: jspb.BinaryReader): GetAppInfosRequest;
}

export namespace GetAppInfosRequest {
  export type AsObject = {
  }
}

export class GetAppInfosResponse extends jspb.Message {
  getErr(): common_pb.ErrorMsg | undefined;
  setErr(value?: common_pb.ErrorMsg): GetAppInfosResponse;
  hasErr(): boolean;
  clearErr(): GetAppInfosResponse;

  getAppsList(): Array<AppInfo>;
  setAppsList(value: Array<AppInfo>): GetAppInfosResponse;
  clearAppsList(): GetAppInfosResponse;
  addApps(value?: AppInfo, index?: number): AppInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppInfosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppInfosResponse): GetAppInfosResponse.AsObject;
  static serializeBinaryToWriter(message: GetAppInfosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppInfosResponse;
  static deserializeBinaryFromReader(message: GetAppInfosResponse, reader: jspb.BinaryReader): GetAppInfosResponse;
}

export namespace GetAppInfosResponse {
  export type AsObject = {
    err?: common_pb.ErrorMsg.AsObject,
    appsList: Array<AppInfo.AsObject>,
  }
}

export class AppInfo extends jspb.Message {
  getName(): string;
  setName(value: string): AppInfo;

  getIconUrl(): string;
  setIconUrl(value: string): AppInfo;

  getVkhashesList(): Array<string>;
  setVkhashesList(value: Array<string>): AppInfo;
  clearVkhashesList(): AppInfo;
  addVkhashes(value: string, index?: number): AppInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AppInfo): AppInfo.AsObject;
  static serializeBinaryToWriter(message: AppInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppInfo;
  static deserializeBinaryFromReader(message: AppInfo, reader: jspb.BinaryReader): AppInfo;
}

export namespace AppInfo {
  export type AsObject = {
    name: string,
    iconUrl: string,
    vkhashesList: Array<string>,
  }
}

export class GetAppDataRequest extends jspb.Message {
  getAppNamesList(): Array<string>;
  setAppNamesList(value: Array<string>): GetAppDataRequest;
  clearAppNamesList(): GetAppDataRequest;
  addAppNames(value: string, index?: number): GetAppDataRequest;

  getStartTime(): number;
  setStartTime(value: number): GetAppDataRequest;

  getEndTime(): number;
  setEndTime(value: number): GetAppDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppDataRequest): GetAppDataRequest.AsObject;
  static serializeBinaryToWriter(message: GetAppDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppDataRequest;
  static deserializeBinaryFromReader(message: GetAppDataRequest, reader: jspb.BinaryReader): GetAppDataRequest;
}

export namespace GetAppDataRequest {
  export type AsObject = {
    appNamesList: Array<string>,
    startTime: number,
    endTime: number,
  }
}

export class GetAppDataResponse extends jspb.Message {
  getErr(): common_pb.ErrorMsg | undefined;
  setErr(value?: common_pb.ErrorMsg): GetAppDataResponse;
  hasErr(): boolean;
  clearErr(): GetAppDataResponse;

  getDailyStatisticList(): Array<DailyStatistic>;
  setDailyStatisticList(value: Array<DailyStatistic>): GetAppDataResponse;
  clearDailyStatisticList(): GetAppDataResponse;
  addDailyStatistic(value?: DailyStatistic, index?: number): DailyStatistic;

  getType(): string;
  setType(value: string): GetAppDataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppDataResponse): GetAppDataResponse.AsObject;
  static serializeBinaryToWriter(message: GetAppDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppDataResponse;
  static deserializeBinaryFromReader(message: GetAppDataResponse, reader: jspb.BinaryReader): GetAppDataResponse;
}

export namespace GetAppDataResponse {
  export type AsObject = {
    err?: common_pb.ErrorMsg.AsObject,
    dailyStatisticList: Array<DailyStatistic.AsObject>,
    type: string,
  }
}

export class DailyStatistic extends jspb.Message {
  getNum(): number;
  setNum(value: number): DailyStatistic;

  getDate(): string;
  setDate(value: string): DailyStatistic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DailyStatistic.AsObject;
  static toObject(includeInstance: boolean, msg: DailyStatistic): DailyStatistic.AsObject;
  static serializeBinaryToWriter(message: DailyStatistic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DailyStatistic;
  static deserializeBinaryFromReader(message: DailyStatistic, reader: jspb.BinaryReader): DailyStatistic;
}

export namespace DailyStatistic {
  export type AsObject = {
    num: number,
    date: string,
  }
}

export class GetAppRequestNumByAppNameResponse extends jspb.Message {
  getErr(): common_pb.ErrorMsg | undefined;
  setErr(value?: common_pb.ErrorMsg): GetAppRequestNumByAppNameResponse;
  hasErr(): boolean;
  clearErr(): GetAppRequestNumByAppNameResponse;

  getAppRequestsNumList(): Array<GetAppDataResponse>;
  setAppRequestsNumList(value: Array<GetAppDataResponse>): GetAppRequestNumByAppNameResponse;
  clearAppRequestsNumList(): GetAppRequestNumByAppNameResponse;
  addAppRequestsNum(value?: GetAppDataResponse, index?: number): GetAppDataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppRequestNumByAppNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppRequestNumByAppNameResponse): GetAppRequestNumByAppNameResponse.AsObject;
  static serializeBinaryToWriter(message: GetAppRequestNumByAppNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppRequestNumByAppNameResponse;
  static deserializeBinaryFromReader(message: GetAppRequestNumByAppNameResponse, reader: jspb.BinaryReader): GetAppRequestNumByAppNameResponse;
}

export namespace GetAppRequestNumByAppNameResponse {
  export type AsObject = {
    err?: common_pb.ErrorMsg.AsObject,
    appRequestsNumList: Array<GetAppDataResponse.AsObject>,
  }
}

export class UserAddress extends jspb.Message {
  getAppVkHash(): string;
  setAppVkHash(value: string): UserAddress;

  getAddress(): string;
  setAddress(value: string): UserAddress;

  getEoa(): boolean;
  setEoa(value: boolean): UserAddress;

  getProofTime(): number;
  setProofTime(value: number): UserAddress;

  getEoaCase(): UserAddress.EoaCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAddress.AsObject;
  static toObject(includeInstance: boolean, msg: UserAddress): UserAddress.AsObject;
  static serializeBinaryToWriter(message: UserAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAddress;
  static deserializeBinaryFromReader(message: UserAddress, reader: jspb.BinaryReader): UserAddress;
}

export namespace UserAddress {
  export type AsObject = {
    appVkHash: string,
    address: string,
    eoa: boolean,
    proofTime: number,
  }

  export enum EoaCase { 
    _EOA_NOT_SET = 0,
    EOA = 3,
  }
}

export class AddProofUserRequest extends jspb.Message {
  getUserAddressesList(): Array<UserAddress>;
  setUserAddressesList(value: Array<UserAddress>): AddProofUserRequest;
  clearUserAddressesList(): AddProofUserRequest;
  addUserAddresses(value?: UserAddress, index?: number): UserAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddProofUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddProofUserRequest): AddProofUserRequest.AsObject;
  static serializeBinaryToWriter(message: AddProofUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddProofUserRequest;
  static deserializeBinaryFromReader(message: AddProofUserRequest, reader: jspb.BinaryReader): AddProofUserRequest;
}

export namespace AddProofUserRequest {
  export type AsObject = {
    userAddressesList: Array<UserAddress.AsObject>,
  }
}

export class AddProofUserResponse extends jspb.Message {
  getErr(): common_pb.ErrorMsg | undefined;
  setErr(value?: common_pb.ErrorMsg): AddProofUserResponse;
  hasErr(): boolean;
  clearErr(): AddProofUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddProofUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddProofUserResponse): AddProofUserResponse.AsObject;
  static serializeBinaryToWriter(message: AddProofUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddProofUserResponse;
  static deserializeBinaryFromReader(message: AddProofUserResponse, reader: jspb.BinaryReader): AddProofUserResponse;
}

export namespace AddProofUserResponse {
  export type AsObject = {
    err?: common_pb.ErrorMsg.AsObject,
  }
}

export class GetUniqAddressRequest extends jspb.Message {
  getAppNamesList(): Array<string>;
  setAppNamesList(value: Array<string>): GetUniqAddressRequest;
  clearAppNamesList(): GetUniqAddressRequest;
  addAppNames(value: string, index?: number): GetUniqAddressRequest;

  getStartTime(): number;
  setStartTime(value: number): GetUniqAddressRequest;

  getEndTime(): number;
  setEndTime(value: number): GetUniqAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUniqAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUniqAddressRequest): GetUniqAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetUniqAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUniqAddressRequest;
  static deserializeBinaryFromReader(message: GetUniqAddressRequest, reader: jspb.BinaryReader): GetUniqAddressRequest;
}

export namespace GetUniqAddressRequest {
  export type AsObject = {
    appNamesList: Array<string>,
    startTime: number,
    endTime: number,
  }
}

export class GetUniqAddressResponse extends jspb.Message {
  getErr(): common_pb.ErrorMsg | undefined;
  setErr(value?: common_pb.ErrorMsg): GetUniqAddressResponse;
  hasErr(): boolean;
  clearErr(): GetUniqAddressResponse;

  getDailyStatisticList(): Array<DailyStatistic>;
  setDailyStatisticList(value: Array<DailyStatistic>): GetUniqAddressResponse;
  clearDailyStatisticList(): GetUniqAddressResponse;
  addDailyStatistic(value?: DailyStatistic, index?: number): DailyStatistic;

  getType(): string;
  setType(value: string): GetUniqAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUniqAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUniqAddressResponse): GetUniqAddressResponse.AsObject;
  static serializeBinaryToWriter(message: GetUniqAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUniqAddressResponse;
  static deserializeBinaryFromReader(message: GetUniqAddressResponse, reader: jspb.BinaryReader): GetUniqAddressResponse;
}

export namespace GetUniqAddressResponse {
  export type AsObject = {
    err?: common_pb.ErrorMsg.AsObject,
    dailyStatisticList: Array<DailyStatistic.AsObject>,
    type: string,
  }
}

