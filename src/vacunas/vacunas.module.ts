import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoEntity } from 'src/empleado/empleado.entity';
import { VacunasEntity } from 'src/vacunas/vacunas.entity';

@Module({
  imports: [
    TypeOrmModule
      .forFeature([
          EmpleadoEntity,
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
export class VacunasModule{
}
