import { model, Schema } from 'mongoose';
import { ISkill } from './skill.interface';

const skillSchema = new Schema<ISkill>(
  {
    title: { type: String, required: true, unique: true, trim: true },
    description: { type: String },
    image: { type: String },
    type: { type: String }
  },
  {
    timestamps: true,
  }
);

export const skillModel = model<ISkill>('Skill', skillSchema);
