import { GetAppDataRequest, GetAppDataResponse, GetAppInfosRequest, GetAppInfosResponse } from "../proto/statistics_pb";
import { BrevisExplorerClient } from "../proto/StatisticsServiceClientPb"


const client = new BrevisExplorerClient(
    // `${process.env.REACT_APP_GRPC_SERVER_URL}`,
    "http://44.226.158.196:11091",
    null,
    null
);

export const getAppInfos = (
    reqParams: GetAppInfosRequest
  ): Promise<GetAppInfosResponse> => {
    return client.getAppInfos(reqParams, {
      "Access-Control-Allow-Origin": "*",
    });
  };