import { Handler, Router } from 'express';
import { SkillController } from './skill.controller';

const router = Router();
const skillController = new SkillController();

router.post('/', skillController.createSkill);
router.get('/', skillController.getAllSkills);
router.get('/:id', skillController.getSkillById as unknown as Handler);
router.patch('/:id', skillController.updateSkill as unknown as Handler);
router.delete('/:id', skillController.deleteSkill as unknown as Handler);


export const skillRoutes = router
