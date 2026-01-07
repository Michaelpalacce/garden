FROM alpine AS builder
WORKDIR /temp
COPY . .
COPY ./quartz/index.md .
RUN rm -rf quartz/ && \
  rm -rf Dockerfile

FROM ghcr.io/jackyzha0/quartz
COPY --from=builder /temp /content
