FROM alpine AS builder
WORKDIR /temp
COPY . .
COPY ./quartz/index.md .
RUN rm -rf quartz/ && \
  rm -rf Dockerfile

FROM scratch
COPY --from=builder /temp /content
