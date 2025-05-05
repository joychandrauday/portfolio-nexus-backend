import { Request, Response } from 'express';
import { CredentialsService } from './credentials.service';
import sendResponse from '../Utilities/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { sendEmail } from '../Utilities/sendEmailFunc';

const credentialsService = new CredentialsService();

export class CredentialsController {
  // Create or update credentials
  async createOrUpdateCredentials(req: Request, res: Response): Promise<void> {
    try {
      const credentials = await credentialsService.createOrUpdateCredentials(req.body);
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Credentials added successfully',
        data: credentials,
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

  // Get all credentials
  async getCredentials(req: Request, res: Response): Promise<void> {
    try {
      const credentials = await credentialsService.getCredentials();
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Credentials retrieve successfully',
        data: credentials,
      });
    } catch (error) {
      let errorMessage = 'Failed to retrieve credentials'

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

  // Update banner
  async updateBanner(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const credentials = await credentialsService.updateBanner(id, req.body);
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Banner Updated successfully',
        data: credentials,
      });
    } catch (error) {
      let errorMessage = 'Failed to Update Banner'

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

  // Update about
  async updateAbout(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const credentials = await credentialsService.updateAbout(id, req.body);
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'about updated successfully',
        data: credentials,
      });
    } catch (error) {
      let errorMessage = 'Failed to  update about'

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

  // Update social
  async updateSocial(req: Request, res: Response): Promise<void> {

    try {
      const id = req.params.id
      const credentials = await credentialsService.updateSocial(id, req.body);
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Social updated successfully',
        data: credentials,
      });
    } catch (error) {
      let errorMessage = 'Failed to  update Social'

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

  // Update education
  async updateEducation(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const credentials = await credentialsService.updateEducation(id, req.body);
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Education updated successfully',
        data: credentials,
      });
    } catch (error) {
      let errorMessage = 'Failed to  update Education'

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

  // Update experience
  async updateExperience(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const credentials = await credentialsService.updateExperience(id, req.body);
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Experience updated successfully',
        data: credentials?.experience,
      });
    } catch (error) {
      let errorMessage = 'Failed to  update Experience'

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
  // send message controlelrs
  async sendMessage(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.body);
      const { sender, message, name } = req.body
      // Send email to the receiver
      const emailSubject = `You have a new message from ${name}!`;
      const emailBody = `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                color: #333;
                margin: 0;
                padding: 0;
              }
              .email-container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                border: 1px solid #ddd;
                border-radius: 8px;
              }
              .header {
                background-color: #FB8600;
                color: #fff;
                padding: 10px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                padding: 20px;
                font-size: 16px;
              }
              .footer {
                text-align: center;
                font-size: 14px;
                color: #666;
                margin-top: 20px;
              }
              .footer a {
                color: #2a9d8f;
                text-decoration: none;
              }
                .message{
                  font-style: italic;
                  font-weight: bold;
                  }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="header">
                <h2>Joy Chandra Uday</h2>
              </div>
              <div class="content">
                <p>${message}</p>
                <p class='message'>sent by: ${name}| ${sender}</p>
              </div>

            </div>
          </body>
        </html>
      `;
      await sendEmail('joychandraud@gmail.com', emailSubject, emailBody); sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'message sent successfully!',
        data: {},
      });
    } catch (error) {
      let errorMessage = 'Failed to  update Experience'

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
