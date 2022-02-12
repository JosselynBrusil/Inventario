// import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Query, Req, Res, Session } from '@nestjs/common';
// import { UsuarioService } from './usuario.service';
// import { UsuarioEntity } from './usuario.entity';
// import { UsuarioCreateDto } from './usuario.create-dto';
// import { validate } from 'class-validator';
// import { DeleteResult, Like } from 'typeorm';
// import { log } from 'util';
// import { UsuarioUpdateDto } from './usuario.update-dto';


// @Controller('usuarios-inventario')
// export class UsuarioController{
//   constructor(
//     private readonly __usuarioService: UsuarioService,
//   ) {
//   }

//   @Get('login')
//   async rutaLogin(
//     @Query('mensaje') mensaje: string,
//     @Query('error') error: string,
//     @Res() res,
//     @Session() session,
//   ): Promise<void>  {
//     console.log(session);
//     if(session.usuario !== undefined){
//       if(session.usuario.userId === 0){
//         console.log(session.usuario.userId);
//         const usuarios = await this.__usuarioService.buscar();
//         res.render(
//           'usuario/administracion-usuarios',
//           {
//             datos: {
//               mensaje,
//               usuarios,
//               error,
//             },
//           },
//         );
//       }
//       else{
//         console.log(session.usuario.userId);
//         console.log("la sesion es"+session.usuario.userId);
//         const consulta = {
//           idUsuario: session.usuario.userId,
//         };
//         console.log(consulta);
//         let arregloUsuarios;
//         try{
//            arregloUsuarios = await this.__usuarioService.buscarUno(consulta);
//            console.log("este es el usuario "+ arregloUsuarios);
//           res.render(
//             'usuario/miCuenta',{
//               datos: {usuario: arregloUsuarios,mensaje,},
//             },
//           );
//         }
//         catch (e) {
//           res.redirect(
//             '/usuarios-inventari/login?error=Error del Servidor',
//           );
//         }
//       }
//     }
//     else{
//       res.render(
//         'usuario/login',
//         {
//           datos: {
//             mensaje,
//             error,
//           },
//         },
//       );
//     }
//   }

//   @Get('registro')
//   rutaRegistro(
//     @Query('error') error: string,
//     @Res() res,
//   ) {
//     res.render(
//       'usuario/register',
//       {
//         datos: {
//           error,
//         },
//       },
//     );
//   }
//   @Get('verPedidos')
//   verPedido(
//     @Query('error') error: string,
//     @Res() res,
//   ) {
//     res.render(
//       'usuario/register',
//       {
//         datos: {
//           error,
//         },
//       },
//     );
//   }
//   @Post('login')
//   async login(
//     @Body('username') username: string,
//     @Body('password') password: string,
//     @Session() session,
//     @Res() res,
//   ): Promise<void>  {
//     console.log(username);
//       if (username === 'admin@peliculas.com' && password === '1234') {
//         session.usuario = undefined;
//         session.usuario = {
//           nombre: 'Administrador',
//           userId: 0,
//           roles: ['Administrador'],
//         };
//         res.redirect(
//           '/usuarios-inventari/login?mensaje=Bienvenido Administrador',
//         );
//       }
//       else{
//         let consultaServicio;
//         consultaServicio = [
//           {
//             correo: username,
//           }
//         ];
//         let usuario;
//         try{
//           usuario = await this.__usuarioService.buscarUno(consultaServicio);
//           if (usuario){
//             if (usuario.password === password) {
//               session.usuario = undefined;
//               session.usuario = {
//                 nombre: usuario.correo,
//                 userId: usuario.idUsuario,
//                 roles: ['Cliente'],
//               };
//               let mensaje = "Bienvenido " + usuario.nombreUsuario + " " + usuario.apellidoUsuario;
//               res.redirect(          '/usuarios-inventario/login?mensaje=Bienvenido usuario',);
//             }
//             else{
//               res.redirect(
//                 '/usuarios-inventario/login?error=Credenciales Incorrectas',
//               );
//             }
//           }
//           else{
//             res.redirect(
//               '/usuarios-inventario/login?error=Credenciales Incorrectas',
//             );
//           }
//         }
//         catch (e) {
//           res.redirect(
//             '/usuarios-inventario/login?error=Error del Servidor',
//           );
//         }
//       }
//     throw new BadRequestException('No envia credenciales');
//   }

//   @Get('logout')
//   logout(
//     @Session() session,
//     @Res() res,
//   ) {
//     session.usuario = undefined;
//     res.redirect('/catalogo');

//   }


//   @Post()
//   async crearUnUsuario(
//     @Body() usuario: UsuarioEntity,
//     @Res() res,
//   ): Promise<void> {
//     const usuarioCreateDTO = new UsuarioCreateDto();
//     usuarioCreateDTO.nombreUsuario = usuario.nombreUsuario;
//     usuarioCreateDTO.apellidoUusuario = usuario.apellidoUsuario;
//     usuarioCreateDTO.cedulaUsuario = usuario.cedulaUsuario;
//     usuarioCreateDTO.correo = usuario.correo;
//     usuario.rolUsuario = "Cliente";
//     usuarioCreateDTO.rolUsuario = usuario.rolUsuario;
//     usuarioCreateDTO.direccion = usuario.direccion;
//     usuarioCreateDTO.password = usuario.password;
//     const errores = await validate(usuarioCreateDTO);
//     if (errores.length > 0) {
//       res.redirect(
//         '/usuarios-inventario/registro?error=Error validando'
//       );
//     } else {
//       try {
//         await this.__usuarioService
//           .crearUno(
//             usuario,
//           );
//         res.redirect(
//           '/usuarios-inventario/login?mensaje=El usuario se creo correctamente',
//         );
//       } catch (error) {
//         res.redirect(
//           '/usuarios-inventario/registro?error=Error del servidor',
//         );
//       }

//     }

//   }

//   @Get('borrar-cuenta/:id')
//   async eliminarUnoPost(
//     @Param('id') id: string,
//     @Res() res,
//     @Session() session,
//   ): Promise<void> {
//     try {
//       await this.__usuarioService
//         .borrarUno(
//           +id,
//         );
//       if (session.usuario.userId === 0){
//         res.redirect(`/usuarios-inventario/login?mensaje=La cuenta ha sido eliminada exitosamente.`);
//       }
//       else{
//         session.usuario = undefined;
//         res.redirect(`/usuarios-inventario/login?mensaje=Su cuenta ha sido eliminada exitosamente.`);
//       }
//     } catch (error) {
//       console.error(error);
//       session.usuario = undefined;
//       res.redirect('/login?mensaje=Error del servidor');
//     }
//   }

//   @Post('editar-cuenta/:id')
//   async actualizarUnUsuario(
//     @Body() usuario: UsuarioEntity,
//     @Param('id') id: string,
//     @Res() res,
//   ): Promise<void> {
//     const usuarioUpdateDTO = new UsuarioUpdateDto();
//     const errores = 0;
//     if (errores > 0) {
//       res.redirect(
//         '/usuarios-inventario/login?error=Error de validación, intentelo nuevamente.',
//       );
//     } else {
//       await this.__usuarioService
//         .actualizarUno(
//           +id,
//           usuario,
//         );
//       res.redirect(
//         '/usuarios-inventario/login?mensaje=Datos actualizados exitosamente.',
//       );
//     }
//   }

//   @Get('editar-cuenta/:id')
//   async rutaEditarUsuario(
//     @Param('idUsuario') idUsuario: string,
//     @Res() res,
//   ) {
//     const consulta = {
//       id: idUsuario,
//     };
//     try {
//       const arregloUsuarios = await this.__usuarioService.buscarUno(consulta);
//       if (arregloUsuarios) {
//         res.render(
//           'usuario/editarCuenta',
//           {
//             datos: {usuario: arregloUsuarios},
//           },
//         );
//       }
//     } catch (error) {
//       console.log(error);
//       res.redirect(
//         '/usuarios-inventario/login?error=Error editando usuario, intentelo mas tarde.',
//       );
//     }

//   }


// }
