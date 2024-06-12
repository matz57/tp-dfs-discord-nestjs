import { Body, Controller, Post } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';

@Controller()
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

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

    console.log(utilisateur);

    return '{"jwt": "le futur jwt"}';
  }
}
