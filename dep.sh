# this does the setup from scratch
# # dep.sh: script for this project: 3 steps: 'touch dep.sh' then 'chmod +x dep.sh' then write your commands
# run me: ./dep.sh
npm install
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
npm run seed
npm run develop