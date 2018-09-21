# INIT DATABASE
./node_modules/.bin/sequelize db:create
#TABLE
#INIT DATABASE TABLE
# users
node_modules/.bin/sequelize model:generate --underscored --name users --attributes geonaute_id:integer,first_name:string,lastname:string,email:string,age:integer,country:string,language:string,weight:integer,size:integer,image_url:string,token:string
# decathlon_members_table
node_modules/.bin/sequelize model:generate --underscored --name decathlon_members --attributes fullname:string,email:string,sport:string,job_title:string,image_url:string
# feedbacks_table
node_modules/.bin/sequelize model:generate --underscored --name feedbacks --attributes gear_id:uuid,content:text,date:date
# feedbacks_answers_table
node_modules/.bin/sequelize model:generate --underscored --name feedbacks_answer --attributes feedback_id:uuid,content:text,decathlon_members_id:uuid,parent_id:uuid
# activities_table
node_modules/.bin/sequelize model:generate --underscored --name activities --attributes name:string,sport:string,user_id:uuid,start_date:date,end_date:date,duration:integer,elevation:integer,latitude:float,longitude:float,comment:text,thumbnail:string,tag:string,weather:string,temperature:integer,humidity:integer
# gears_table
node_modules/.bin/sequelize model:generate --underscored --name gears --attributes product_id:uuid,lifetime_progress:integer,purchase_date:date,usable:boolean,user_id:uuid
# products_table
node_modules/.bin/sequelize model:generate --underscored --name products --attributes decathlon_id:integer,title:string,image_path:string,decathlon_members_id:uuid,lifetime_max:integer,product_owner_message:text
# activity_products_table
node_modules/.bin/sequelize model:generate --underscored --name activity_products --attributes activity_id:uuid,product_id:uuid
# data_summaries_table
node_modules/.bin/sequelize model:generate --underscored --name data_summaries --attributes activity_id:uuid,distance:integer,duration:integer
# advices_table
node_modules/.bin/sequelize model:generate --underscored --name advices --attributes product_id:uuid,content:text,pictures:string
#CREATE DATABASE
./node_modules/.bin/sequelize db:migrate

#SEED
#INIT SEED
node_modules/.bin/sequelize seed:generate --name activities
