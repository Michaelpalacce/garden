FROM alpine AS builder
WORKDIR /temp
COPY . .

FROM ghcr.io/jackyzha0/quartz
COPY --from=builder /temp /usr/src/app/content
