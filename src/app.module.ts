import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { ItemModule } from "./items/item.module";
import { Item } from "./items/item.model";
import { LoansModule } from './loans/loans.module';
import { Loan } from "./loans/loans.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from "./posts/posts.model";

@Module({
    controllers:[],
    providers:[],
    imports:[
      ConfigModule.forRoot({
        envFilePath:`.${process.env.NODE_ENV}.env`
      }),
      SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB, 
      models: [User, Item, Loan, Role, UserRoles],
      autoLoadModels: true
    }),
      UsersModule,
      ItemModule,
      LoansModule,
      RolesModule,
      AuthModule,
      PostsModule,
    ]
})
export class AppModule {}