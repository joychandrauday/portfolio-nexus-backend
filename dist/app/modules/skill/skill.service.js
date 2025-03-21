"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillService = void 0;
const skill_model_1 = require("./skill.model");
class SkillService {
    createSkill(skillData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield skill_model_1.skillModel.create(skillData);
        });
    }
    getAllSkills() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield skill_model_1.skillModel.find();
        });
    }
    getSkillById(skillId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield skill_model_1.skillModel.findById(skillId);
        });
    }
    updateSkill(skillId, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield skill_model_1.skillModel.findByIdAndUpdate(skillId, updateData, { new: true });
        });
    }
    deleteSkill(skillId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield skill_model_1.skillModel.findByIdAndDelete(skillId);
        });
    }
}
exports.SkillService = SkillService;
