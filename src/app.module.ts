import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost', // Since Docker maps the port to your machine, it's local
  port: 5432, // Note: NOT 3306! This is the proper Postgres port
  username: 'admin', // Matches docker-compose environment variables
  password: 'admin',
  database: 'nest_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Set to false in production! True auto-syncs schemas for dev
};
@Module({
  imports: [ProfilesModule, TypeOrmModule.forRoot(typeORMConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
