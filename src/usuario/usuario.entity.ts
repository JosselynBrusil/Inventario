import { EmpleadoEntity } from 'src/empleado/empleado.entity';
import { Column, Entity, Index, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'userId',
    comment: 'Identificador de la tabla usuario',
  })
  idUsuario: number;

  @Index({
    unique: false
  })

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'rol',
    comment: 'Rol de usuario',
  })
  rolUsuario: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'nameUser',
    comment: 'Nombre del usuario',
  })
  nombreUsuario: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'password',
    comment: 'Contrasena usuario',
  })
  password: string;

  @OneToOne(
    type => EmpleadoEntity,
    usuario => usuario.idEmpleado
  )
  usuarios: EmpleadoEntity[];


}
