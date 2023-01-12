import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { UserEntity } from '../entity/UserEntity'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'authdb',
  entities: [ UserEntity ],
  synchronize: true
}