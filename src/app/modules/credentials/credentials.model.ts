import { model, Schema } from 'mongoose';
import { ICredentials, IBanner, IAbout, ISocial, IEducation, IExperience } from './credentials.interface';

// Banner schema
const bannerSchema = new Schema<IBanner>({
  title: { type: String, required: false },
  subtitle: { type: String, required: false },
  bannerImage: { type: String, required: false },
  designations: [{ type: String, required: false }],
  designationPretext: { type: String, required: false },
}, { _id: false });

// About schema
const aboutSchema = new Schema<IAbout>({
  title: { type: String, required: false },
  content: { type: String, required: false },
}, { _id: false });

// Social schema
const socialSchema = new Schema<ISocial>({
  facebook: { type: String, required: false },
  twitter: { type: String, required: false },
  instagram: { type: String, required: false },
  linkedin: { type: String, required: false },
  github: { type: String, required: false },
  medium: { type: String, required: false },
  youtube: { type: String, required: false },
  dribbble: { type: String, required: false },
  behance: { type: String, required: false },
  reddit: { type: String, required: false },
  stackoverflow: { type: String, required: false },
  resume: { type: String, required: false },
}, { _id: false });

// Education schema
const educationSchema = new Schema<IEducation>({
  degree: { type: String, required: false },
  institution: { type: String, required: false },
  specialization: { type: String, required: false },
  startYear: { type: Date, required: false },
  endYear: { type: Date, required: false }, // Can also be 'present'
}, { _id: false });

// Experience schema
const experienceSchema = new Schema<IExperience>({
  company: { type: String, required: false },
  position: { type: String, required: false },
  duration: {
    from: { type: String, required: false },
    to: { type: String, required: false },
  },
  location: { type: String, required: false },
  description: { type: String, required: false },
  achievements: [{ type: String, required: false }],
}, { _id: false });

// Credentials schema
const credentialsSchema = new Schema<ICredentials>({
  banner: { type: bannerSchema, required: false },
  about: { type: aboutSchema, required: false },
  social: { type: socialSchema, required: false },
  education: [{ type: educationSchema, required: false }],
  experience: [{ type: experienceSchema, required: false }],
}, {
  timestamps: true,
});

export const CredentialsModel = model<ICredentials>('Credentials', credentialsSchema);
