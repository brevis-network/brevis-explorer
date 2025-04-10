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

