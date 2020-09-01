FROM navikt/pus-decorator

ENV APPLICATION_NAME=start-samtale
ENV GZIP_ENABLED=true
ENV EXTRA_DECORATOR_PARAMS="&simple=true"

COPY /build /app

ADD decorator.yaml /decorator.yaml
