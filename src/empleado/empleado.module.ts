import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { VacunasEntity } from 'src/vacunas/vacunas.entity';
import { EmpleadoEntity } from './empleado.entity';

@Module({
  imports: [
    TypeOrmModule
      .forFeature([
          EmpleadoEntity,
          UsuarioEntity,
          VacunasEntity,
        ],
        'default'
      ),
  ],
  controllers: [
    
  ],
  providers: [
    ,
  ],
  exports: [
    ,
  ]
})
export class EmpleadoModule{
}
