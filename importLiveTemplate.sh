# touch importLive.sh' then 'chmod +x importLive.sh'
# to avoid 1 row per file use --jsonArray parameter
# BEFORE YOU YOU CAN RUN THIS FILE: replace <<password goes here>>
# USERS
mongoimport --uri mongodb+srv://sean-admin:<<password goes here>>@cluster0.a2oshzw.mongodb.net/lunch-date --collection users --jsonArray --type json --file server/seeders/userSeedsLiveImport2_ALL.json
# mongoimport --uri mongodb+srv://sean-admin:<<password goes here>>@cluster0.a2oshzw.mongodb.net/lunch-date --collection users --type json --file server/seeders/userSeedsLiveImport2Sean.json
# mongoimport --uri mongodb+srv://sean-admin:<<password goes here>>@cluster0.a2oshzw.mongodb.net/lunch-date --collection users --type json --file server/seeders/userSeedsLiveImport2Trentan.json
# MEALS
# CLI note ./ used:
# mongoimport --uri mongodb+srv://sean-admin:<<password goes here>>@cluster0.a2oshzw.mongodb.net/lunch-date --collection meals --jsonArray --type json --file ./server/seeders/mealSeeds.json
# SCRIPT note ./ left out:
mongoimport --uri mongodb+srv://sean-admin:<<password goes here>>@cluster0.a2oshzw.mongodb.net/lunch-date --collection meals --jsonArray --type json --file server/seeders/mealSeeds.json