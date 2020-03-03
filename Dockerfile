FROM navikt/pus-decorator

ENV APPLICATION_NAME=start-samtale
ENV GZIP_ENABLED=true
COPY /build /app

ADD decorator.yaml /decorator.yaml
