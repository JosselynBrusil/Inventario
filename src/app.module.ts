import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadoEntity } from './empleado/empleado.entity';
import { EmpleadoModule } from './empleado/empleado.module';
import { UsuarioEntity } from './usuario/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { VacunasEntity } from './vacunas/vacunas.entity';
import { VacunasModule } from './vacunas/vacunas.module';

@Module({
  imports: [
    EmpleadoModule,
    UsuarioModule,
    VacunasModule,
    TypeOrmModule.forRoot(
      {
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'pepito20',
        database: 'inventario',
        //dropSchema: true,
        entities: [
          EmpleadoEntity,
          UsuarioEntity,
          VacunasEntity,
        ],
        synchronize: true,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
  ) {
  }
}
