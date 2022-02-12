import { VacunasEntity } from 'src/vacunas/vacunas.entity';
import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('empleado')
export class EmpleadoEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'employeId',
    comment: 'Identificador de empleado',
  })
  idEmpleado: number;

  @Index({
    unique: false
  })

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
    name: 'identify',
    comment: 'Cedula de empleado',
  })
  identify: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'name',
    comment: 'Nombre del empleado',
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'lastName',
    comment: 'Apellido del empleado',
  })
  lastName: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'email',
    unique: true,
    comment: 'Correo de empleado',
  })
  email: string;

  @Column({
    type: 'date',
    nullable: true,
    name: 'birthday',
    comment: 'Fecha de nacimiento de empleado',
  })
  birthday: Date;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'address',
    comment: 'Direccion de empleado',
  })
  address: string;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'cellphone',
    comment: 'Telefono de empleado',
  })
  phone: string

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'statusV',
    comment: 'Estado vacunacion empleado',
  })
  statusV: string

  @OneToMany(
    type => VacunasEntity,
    empleado => empleado.dosis
  )
  empleado: VacunasEntity[];


}
