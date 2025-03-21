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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillController = void 0;
const skill_service_1 = require("./skill.service");
const sendResponse_1 = __importDefault(require("../Utilities/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const skillService = new skill_service_1.SkillService();
class SkillController {
    createSkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const skill = yield skillService.createSkill(req.body);
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.OK,
                    success: true,
                    message: 'Skill added successfully',
                    data: skill,
                });
            }
            catch (error) {
                let errorMessage = 'Failed to retrieve listings';
                if (error instanceof Error) {
                    errorMessage = error.message;
                }
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
                    success: false,
                    message: errorMessage,
                    data: {}
                });
            }
        });
    }
    getAllSkills(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const skills = yield skillService.getAllSkills();
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.OK,
                    success: true,
                    message: 'Skills retrieved successfully',
                    data: skills,
                });
            }
            catch (error) {
                let errorMessage = 'Failed to retrieve listings';
                if (error instanceof Error) {
                    errorMessage = error.message;
                }
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
                    success: false,
                    message: errorMessage,
                    data: {}
                });
            }
        });
    }
    getSkillById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const skill = yield skillService.getSkillById(req.params.id);
                if (!skill) {
                    return res.status(404).json({ message: 'Skill not found' });
                }
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.OK,
                    success: true,
                    message: 'Skill retrieved successfully',
                    data: skill,
                });
            }
            catch (error) {
                let errorMessage = 'Failed to retrieve Skill';
                if (error instanceof Error) {
                    errorMessage = error.message;
                }
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
                    success: false,
                    message: errorMessage,
                    data: {}
                });
            }
        });
    }
    updateSkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedSkill = yield skillService.updateSkill(req.params.id, req.body);
                if (!updatedSkill) {
                    return res.status(404).json({ message: 'Skill not found' });
                }
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.OK,
                    success: true,
                    message: 'Skill Updated successfully',
                    data: updatedSkill,
                });
            }
            catch (error) {
                let errorMessage = 'Failed to Edit Skill';
                if (error instanceof Error) {
                    errorMessage = error.message;
                }
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
                    success: false,
                    message: errorMessage,
                    data: {}
                });
            }
        });
    }
    deleteSkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedSkill = yield skillService.deleteSkill(req.params.id);
                if (!deletedSkill) {
                    return res.status(404).json({ message: 'Skill not found' });
                }
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.OK,
                    success: true,
                    message: 'Skill Deleted successfully',
                    data: {},
                });
            }
            catch (error) {
                let errorMessage = 'Failed to Delete Skill';
                if (error instanceof Error) {
                    errorMessage = error.message;
                }
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
                    success: false,
                    message: errorMessage,
                    data: {}
                });
            }
        });
    }
}
exports.SkillController = SkillController;
