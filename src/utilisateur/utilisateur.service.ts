// src/cats/cats.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Utilisateur, UtilisateurDocument } from './utilisateur.schema';

@Injectable()
export class UtilisateurService {
  constructor(
    @InjectModel(Utilisateur.name)
    private utilisateurModel: Model<UtilisateurDocument>,
  ) {}

  async create(createdUtilisateurDto: any): Promise<Utilisateur> {
    const createdUtilisateur = new this.utilisateurModel(createdUtilisateurDto);
    return createdUtilisateur.save();
  }

  async findAll(): Promise<Utilisateur[]> {
    return this.utilisateurModel.find().exec();
  }
}
