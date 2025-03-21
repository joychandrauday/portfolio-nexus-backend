import { Router } from 'express';
import { CredentialsController } from './credentials.controller';

const router = Router();
const credentialsController = new CredentialsController();

// Route to get all credentials
router.get('/', credentialsController.getCredentials.bind(credentialsController));

// Route to create or update credentials
router.post('/', credentialsController.createOrUpdateCredentials.bind(credentialsController));

// Route to update banner
router.put('/banner/:id', credentialsController.updateBanner.bind(credentialsController));

// Route to update about
router.put('/about/:id', credentialsController.updateAbout.bind(credentialsController));

// Route to update social links
router.put('/social/:id', credentialsController.updateSocial.bind(credentialsController));

// Route to update education
router.put('/education/:id', credentialsController.updateEducation.bind(credentialsController));

// Route to update experience
router.put('/experience/:id', credentialsController.updateExperience.bind(credentialsController));
router.post('/message', credentialsController.sendMessage.bind(credentialsController));


export const credentialsRoutes = router
