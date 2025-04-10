import * as jspb from 'google-protobuf'



export class ErrorMsg extends jspb.Message {
  getCode(): number;
  setCode(value: number): ErrorMsg;

  getMsg(): string;
  setMsg(value: string): ErrorMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorMsg): ErrorMsg.AsObject;
  static serializeBinaryToWriter(message: ErrorMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorMsg;
  static deserializeBinaryFromReader(message: ErrorMsg, reader: jspb.BinaryReader): ErrorMsg;
}

export namespace ErrorMsg {
  export type AsObject = {
    code: number,
    msg: string,
  }
}

export class HealthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthRequest): HealthRequest.AsObject;
  static serializeBinaryToWriter(message: HealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthRequest;
  static deserializeBinaryFromReader(message: HealthRequest, reader: jspb.BinaryReader): HealthRequest;
}

export namespace HealthRequest {
  export type AsObject = {
  }
}

export class HealthResponse extends jspb.Message {
  getErr(): ErrorMsg | undefined;
  setErr(value?: ErrorMsg): HealthResponse;
  hasErr(): boolean;
  clearErr(): HealthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthResponse): HealthResponse.AsObject;
  static serializeBinaryToWriter(message: HealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthResponse;
  static deserializeBinaryFromReader(message: HealthResponse, reader: jspb.BinaryReader): HealthResponse;
}

export namespace HealthResponse {
  export type AsObject = {
    err?: ErrorMsg.AsObject,
  }
}

export enum SubProofType { 
  SUB_PROOF_TYPE_UNKNOWN = 0,
  SUB_PROOF_TYPE_RECEIPTS = 1,
  SUB_PROOF_TYPE_STORAGES = 2,
  SUB_PROOF_TYPE_TRANSACTIONS = 3,
  SUB_PROOF_TYPE_MIDDLE = 4,
  SUB_PROOF_TYPE_VM_RECEIPTS = 11,
  SUB_PROOF_TYPE_VM_STORAGES = 12,
  SUB_PROOF_TYPE_VM_TRANSACTIONS = 13,
  SUB_PROOF_TYPE_VM_MIDDLE = 14,
}
