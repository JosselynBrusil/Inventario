import { EmpleadoEntity } from 'src/empleado/empleado.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vacunas')
export class VacunasEntity {
 
  @Column({
    type: 'varchar',
    nullable: false,
    name: 'type',
    comment: 'Tipo de vacuna',
  })
  type: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'dateVac',
    comment: 'Fecha de vacunacion',
  })
  date: Date;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'dosis',
    comment: 'Dosis de vacunacion',
  })
  dosis: string;

  @ManyToOne(
    type => EmpleadoEntity,
      vacuna => vacuna.idEmpleado
  )
  vacuna: EmpleadoEntity;


}
