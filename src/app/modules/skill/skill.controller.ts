import { Request, Response } from 'express';
import { SkillService } from './skill.service';
import sendResponse from '../Utilities/sendResponse';
import { StatusCodes } from 'http-status-codes';

const skillService = new SkillService();

export class SkillController {
  async createSkill(req: Request, res: Response) {
    try {
      const skill = await skillService.createSkill(req.body);
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Skill added successfully',
        data: skill,
      });
    } catch (error) {
      let errorMessage = 'Failed to retrieve listings'

      if (error instanceof Error) {
        errorMessage = error.message;
      }
      sendResponse(res, {
        statusCode: StatusCodes.BAD_REQUEST,
        success: false,
        message: errorMessage,
        data: {}
      });
    }
  }
  async getAllSkills(req: Request, res: Response) {
    try {
      const skills = await skillService.getAllSkills();
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Skills retrieved successfully',
        data: skills,
      });
    } catch (error) {
      let errorMessage = 'Failed to retrieve listings'

      if (error instanceof Error) {
        errorMessage = error.message;
      }
      sendResponse(res, {
        statusCode: StatusCodes.BAD_REQUEST,
        success: false,
        message: errorMessage,
        data: {}
      });
    }
  }
  async getSkillById(req: Request, res: Response) {
    try {
      const skill = await skillService.getSkillById(req.params.id);
      if (!skill) {
        return res.status(404).json({ message: 'Skill not found' });
      }
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Skill retrieved successfully',
        data: skill,
      });
    } catch (error) {
      let errorMessage = 'Failed to retrieve Skill'

      if (error instanceof Error) {
        errorMessage = error.message;
      }
      sendResponse(res, {
        statusCode: StatusCodes.BAD_REQUEST,
        success: false,
        message: errorMessage,
        data: {}
      });
    }
  }

  async updateSkill(req: Request, res: Response) {
    try {
      const updatedSkill = await skillService.updateSkill(req.params.id, req.body);
      if (!updatedSkill) {
        return res.status(404).json({ message: 'Skill not found' });
      }
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Skill Updated successfully',
        data: updatedSkill,
      });
    } catch (error) {
      let errorMessage = 'Failed to Edit Skill'

      if (error instanceof Error) {
        errorMessage = error.message;
      }
      sendResponse(res, {
        statusCode: StatusCodes.BAD_REQUEST,
        success: false,
        message: errorMessage,
        data: {}
      });
    }
  }

  async deleteSkill(req: Request, res: Response) {
    try {
      const deletedSkill = await skillService.deleteSkill(req.params.id);
      if (!deletedSkill) {
        return res.status(404).json({ message: 'Skill not found' });
      }
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Skill Deleted successfully',
        data: {},
      });
    } catch (error) {
      let errorMessage = 'Failed to Delete Skill'

      if (error instanceof Error) {
        errorMessage = error.message;
      }
      sendResponse(res, {
        statusCode: StatusCodes.BAD_REQUEST,
        success: false,
        message: errorMessage,
        data: {}
      });
    }
  }
}
