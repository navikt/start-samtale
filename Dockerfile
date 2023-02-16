FROM ghcr.io/navikt/poao-frontend/poao-frontend:2023.02.15_15.26-4e7baad4b314

COPY dist /app/public

USER node
