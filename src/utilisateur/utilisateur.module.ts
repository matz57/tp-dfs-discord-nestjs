import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Utilisateur, UtilisateurSchema } from './utilisateur.schema';
import { UtilisateurController } from './utilisateur.controller';
import { UtilisateurService } from './utilisateur.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Utilisateur.name, schema: UtilisateurSchema },
    ]),
    JwtModule.register({
      secret: 'azerty',
    }),
  ],
  providers: [UtilisateurService],
  controllers: [UtilisateurController],
})
export class UtilisateurModule {}
