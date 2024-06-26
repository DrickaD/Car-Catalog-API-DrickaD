class HttpStatusCode{
    //2xx
    HTTP_200_OK = 200;
    HTTP_201_CREATED = 201;
    HTTP_202_ACCEPTED = 202;
    HTTP_204_NO_CONTENT = 204;
    //...


    //4xx
    HTTP_400_BAND_REQUEST = 400;
    HTTP_401_UNAUTHORIZED = 401;
    HTTP_403_FORBIDEN = 403;
    HTTP_404_NOT_FOUND = 404;
    HTTP_409_CONFLIT = 409;
    //...


    //5xx
    HTTP_500_BAND_INTERNAL_SERVER_ERROR = 500;
    //...
};

export const status = new HttpStatusCode();