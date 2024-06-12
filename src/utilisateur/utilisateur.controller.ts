import { Body, Controller, Post } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class UtilisateurController {
  constructor(
    private readonly utilisateurService: UtilisateurService,
    private readonly jwtService: JwtService,
  ) {}

  // @Get()
  // findAll() {
  //   return this.utilisateurService.findAll();
  // }

  @Post('inscription')
  async inscription(@Body() createUtilisateurDto: any) {
    //TODO : vérifier les donnée (regles mot de passe, email unique ...)

    return this.utilisateurService.create(createUtilisateurDto);
  }

  @Post('login')
  async create(@Body() utilisateurDto: any) {
    const utilisateur =
      await this.utilisateurService.getByEmailAndClearPassword(
        utilisateurDto.email,
        utilisateurDto.password,
      );

    const payload = {
      sub: utilisateur.email,
    };

    return await this.jwtService.signAsync(payload);
  }
}
