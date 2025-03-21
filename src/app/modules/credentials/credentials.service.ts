/* eslint-disable @typescript-eslint/no-explicit-any */
import { CredentialsModel } from './credentials.model';
import { ICredentials } from './credentials.interface';
import { ObjectId } from 'mongodb';

export class CredentialsService {
  // Create or update credentials
  async createOrUpdateCredentials(data: ICredentials): Promise<ICredentials> {
    const credentials = await CredentialsModel.findOneAndUpdate({}, data, { new: true, upsert: true });
    return credentials;
  }

  // Get all credentials
  async getCredentials(): Promise<ICredentials | null> {
    const credentials = await CredentialsModel.findOne({});
    return credentials;
  }

  // Update banner
  async updateBanner(id: string, bannerData: any): Promise<ICredentials | null> {
    const objectId = new ObjectId(id);

    const credentials = await CredentialsModel.findOneAndUpdate(
      { _id: objectId },
      { $set: { banner: bannerData } },
      { new: true }

    );

    return credentials;
  }

  // Update about
  async updateAbout(id: string, aboutData: any): Promise<ICredentials | null> {
    const objectId = new ObjectId(id);
    const credentials = await CredentialsModel.findOneAndUpdate(
      { _id: objectId },
      { $set: { about: aboutData } },
      { new: true }
    );
    return credentials;
  }

  // Update social links
  async updateSocial(id: string, socialData: any): Promise<ICredentials | null> {
    const objectId = new ObjectId(id);
    const credentials = await CredentialsModel.findOneAndUpdate(
      { _id: objectId },
      { $set: { social: socialData } },
      { new: true }
    );
    return credentials;
  }

  // Update education
  async updateEducation(id: string, educationData: any): Promise<ICredentials | null> {
    const objectId = new ObjectId(id);
    const credentials = await CredentialsModel.findOneAndUpdate(
      { _id: objectId },
      { $set: { education: educationData } },
      { new: true }
    );
    return credentials;
  }

  // Update experience
  async updateExperience(id: string, experienceData: any): Promise<ICredentials | null> {
    const objectId = new ObjectId(id);
    const credentials = await CredentialsModel.findOneAndUpdate(
      { _id: objectId },
      { $set: { experience: experienceData } },
      { new: true }
    );
    return credentials;
  }
}
