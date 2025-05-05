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
exports.CredentialsController = void 0;
const credentials_service_1 = require("./credentials.service");
const sendResponse_1 = __importDefault(require("../Utilities/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const sendEmailFunc_1 = require("../Utilities/sendEmailFunc");
const credentialsService = new credentials_service_1.CredentialsService();
class CredentialsController {
    // Create or update credentials
    createOrUpdateCredentials(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const credentials = yield credentialsService.createOrUpdateCredentials(req.body);
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.OK,
                    success: true,
                    message: 'Credentials added successfully',
                    data: credentials,
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
    // Get all credentials
    getCredentials(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const credentials = yield credentialsService.getCredentials();
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.OK,
                    success: true,
                    message: 'Credentials retrieve successfully',
                    data: credentials,
                });
            }
            catch (error) {
                let errorMessage = 'Failed to retrieve credentials';
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
    // Update banner
    updateBanner(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const credentials = yield credentialsService.updateBanner(id, req.body);
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.OK,
                    success: true,
                    message: 'Banner Updated successfully',
                    data: credentials,
                });
            }
            catch (error) {
                let errorMessage = 'Failed to Update Banner';
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
    // Update about
    updateAbout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const credentials = yield credentialsService.updateAbout(id, req.body);
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.OK,
                    success: true,
                    message: 'about updated successfully',
                    data: credentials,
                });
            }
            catch (error) {
                let errorMessage = 'Failed to  update about';
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
    // Update social
    updateSocial(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const credentials = yield credentialsService.updateSocial(id, req.body);
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.OK,
                    success: true,
                    message: 'Social updated successfully',
                    data: credentials,
                });
            }
            catch (error) {
                let errorMessage = 'Failed to  update Social';
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
    // Update education
    updateEducation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const credentials = yield credentialsService.updateEducation(id, req.body);
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.OK,
                    success: true,
                    message: 'Education updated successfully',
                    data: credentials,
                });
            }
            catch (error) {
                let errorMessage = 'Failed to  update Education';
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
    // Update experience
    updateExperience(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const credentials = yield credentialsService.updateExperience(id, req.body);
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.OK,
                    success: true,
                    message: 'Experience updated successfully',
                    data: credentials === null || credentials === void 0 ? void 0 : credentials.experience,
                });
            }
            catch (error) {
                let errorMessage = 'Failed to  update Experience';
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
    // send message controlelrs
    sendMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const { sender, message, name } = req.body;
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
                yield (0, sendEmailFunc_1.sendEmail)('joychandraud@gmail.com', emailSubject, emailBody);
                (0, sendResponse_1.default)(res, {
                    statusCode: http_status_codes_1.StatusCodes.OK,
                    success: true,
                    message: 'message sent successfully!',
                    data: {},
                });
            }
            catch (error) {
                let errorMessage = 'Failed to  update Experience';
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
exports.CredentialsController = CredentialsController;
