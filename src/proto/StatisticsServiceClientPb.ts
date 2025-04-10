/**
 * @fileoverview gRPC-Web generated client stub for zk.master
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as statistics_pb from './statistics_pb';


export class BrevisExplorerClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetAppInfos = new grpcWeb.MethodDescriptor(
    '/zk.master.BrevisExplorer/GetAppInfos',
    grpcWeb.MethodType.UNARY,
    statistics_pb.GetAppInfosRequest,
    statistics_pb.GetAppInfosResponse,
    (request: statistics_pb.GetAppInfosRequest) => {
      return request.serializeBinary();
    },
    statistics_pb.GetAppInfosResponse.deserializeBinary
  );

  getAppInfos(
    request: statistics_pb.GetAppInfosRequest,
    metadata: grpcWeb.Metadata | null): Promise<statistics_pb.GetAppInfosResponse>;

  getAppInfos(
    request: statistics_pb.GetAppInfosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: statistics_pb.GetAppInfosResponse) => void): grpcWeb.ClientReadableStream<statistics_pb.GetAppInfosResponse>;

  getAppInfos(
    request: statistics_pb.GetAppInfosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: statistics_pb.GetAppInfosResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.master.BrevisExplorer/GetAppInfos',
        request,
        metadata || {},
        this.methodInfoGetAppInfos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.master.BrevisExplorer/GetAppInfos',
    request,
    metadata || {},
    this.methodInfoGetAppInfos);
  }

  methodInfoGetProofsNumByAppName = new grpcWeb.MethodDescriptor(
    '/zk.master.BrevisExplorer/GetProofsNumByAppName',
    grpcWeb.MethodType.UNARY,
    statistics_pb.GetAppDataRequest,
    statistics_pb.GetAppDataResponse,
    (request: statistics_pb.GetAppDataRequest) => {
      return request.serializeBinary();
    },
    statistics_pb.GetAppDataResponse.deserializeBinary
  );

  getProofsNumByAppName(
    request: statistics_pb.GetAppDataRequest,
    metadata: grpcWeb.Metadata | null): Promise<statistics_pb.GetAppDataResponse>;

  getProofsNumByAppName(
    request: statistics_pb.GetAppDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: statistics_pb.GetAppDataResponse) => void): grpcWeb.ClientReadableStream<statistics_pb.GetAppDataResponse>;

  getProofsNumByAppName(
    request: statistics_pb.GetAppDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: statistics_pb.GetAppDataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.master.BrevisExplorer/GetProofsNumByAppName',
        request,
        metadata || {},
        this.methodInfoGetProofsNumByAppName,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.master.BrevisExplorer/GetProofsNumByAppName',
    request,
    metadata || {},
    this.methodInfoGetProofsNumByAppName);
  }

  methodInfoGetAppRequestNumByAppName = new grpcWeb.MethodDescriptor(
    '/zk.master.BrevisExplorer/GetAppRequestNumByAppName',
    grpcWeb.MethodType.UNARY,
    statistics_pb.GetAppDataRequest,
    statistics_pb.GetAppDataResponse,
    (request: statistics_pb.GetAppDataRequest) => {
      return request.serializeBinary();
    },
    statistics_pb.GetAppDataResponse.deserializeBinary
  );

  getAppRequestNumByAppName(
    request: statistics_pb.GetAppDataRequest,
    metadata: grpcWeb.Metadata | null): Promise<statistics_pb.GetAppDataResponse>;

  getAppRequestNumByAppName(
    request: statistics_pb.GetAppDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: statistics_pb.GetAppDataResponse) => void): grpcWeb.ClientReadableStream<statistics_pb.GetAppDataResponse>;

  getAppRequestNumByAppName(
    request: statistics_pb.GetAppDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: statistics_pb.GetAppDataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.master.BrevisExplorer/GetAppRequestNumByAppName',
        request,
        metadata || {},
        this.methodInfoGetAppRequestNumByAppName,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.master.BrevisExplorer/GetAppRequestNumByAppName',
    request,
    metadata || {},
    this.methodInfoGetAppRequestNumByAppName);
  }

}

