## Build
FROM golang:latest AS build

WORKDIR /app

COPY ./go.mod ./
# COPY ./go.sum ./
# COPY ./makefile ./

# RUN make install
RUN go mod download
# RUN go mod tidy -v

COPY . ./

RUN go build -o output/server .

## Deploy
FROM gcr.io/distroless/base-debian12

WORKDIR /

COPY --from=build /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
# COPY --from=build /app/configs /configs
COPY --from=build /app/output/server /server

EXPOSE 80

ENTRYPOINT ["/server"]
