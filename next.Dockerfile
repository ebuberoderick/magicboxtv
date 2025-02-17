
# Use the latest official Node.js image as a base
FROM node:latest

# Set the working directory
WORKDIR /code/assets
ENTRYPOINT ["/code/assets/entrypoint.sh"]
CMD ["start"]
# CMD ["dev", "--", "--host"]


ENV APP_UID="app"
ENV APP_RUN_DIR="/var/run/${APP_UID}/"



COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./yarn.lock    ./yarn.lock


RUN yarn install --silent && \
    yarn cache clean --all && \
    chown node:node -Rf .

RUN chown -R node /code/assets/node_modules

USER node

# # Copy the application files
COPY                --chown=node:node ./     ./


COPY . /code/assets/

# Expose the port the development server runs on
EXPOSE 3000