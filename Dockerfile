FROM ghcr.io/jackyzha0/quartz

WORKDIR /usr/src/app
COPY . ./content
COPY ./quartz .
RUN rm -rf ./content/quartz
