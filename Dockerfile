FROM ghcr.io/navikt/pus-decorator/pus-decorator
ENV APPLICATION_NAME=start-samtale
ENV GZIP_ENABLED=true
ENV EXTRA_DECORATOR_PARAMS="&simple=true&chatbot=false"

COPY /build /app

ADD decorator.yaml /decorator.yaml
