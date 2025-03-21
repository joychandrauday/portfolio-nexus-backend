import { ISkill } from "./skill.interface";
import { skillModel } from "./skill.model";


export class SkillService {
  async createSkill(skillData: ISkill) {
    return await skillModel.create(skillData);
  }

  async getAllSkills() {
    return await skillModel.find();
  }

  async getSkillById(skillId: string) {
    return await skillModel.findById(skillId);
  }

  async updateSkill(skillId: string, updateData: Partial<ISkill>) {
    return await skillModel.findByIdAndUpdate(skillId, updateData, { new: true });
  }

  async deleteSkill(skillId: string) {
    return await skillModel.findByIdAndDelete(skillId);
  }
}
