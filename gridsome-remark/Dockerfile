FROM registry.integral-systems.ch/integral-systems/node-builder:12 as intermediate

COPY . /data/app
RUN yarn global add @quasar/cli
RUN yarn install --production=false
RUN npm run build

FROM registry.integral-systems.ch/integral-systems/nginx:stable
LABEL "Gradlon" <gradlon@integral-design.ch>

COPY --from=intermediate /data/app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
COPY ./default.conf /etc/nginx/conf.d/default.conf