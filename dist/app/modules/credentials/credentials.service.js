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
exports.CredentialsService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const credentials_model_1 = require("./credentials.model");
const mongodb_1 = require("mongodb");
class CredentialsService {
    // Create or update credentials
    createOrUpdateCredentials(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const credentials = yield credentials_model_1.CredentialsModel.findOneAndUpdate({}, data, { new: true, upsert: true });
            return credentials;
        });
    }
    // Get all credentials
    getCredentials() {
        return __awaiter(this, void 0, void 0, function* () {
            const credentials = yield credentials_model_1.CredentialsModel.findOne({});
            return credentials;
        });
    }
    // Update banner
    updateBanner(id, bannerData) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectId = new mongodb_1.ObjectId(id);
            const credentials = yield credentials_model_1.CredentialsModel.findOneAndUpdate({ _id: objectId }, { $set: { banner: bannerData } }, { new: true });
            return credentials;
        });
    }
    // Update about
    updateAbout(id, aboutData) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectId = new mongodb_1.ObjectId(id);
            const credentials = yield credentials_model_1.CredentialsModel.findOneAndUpdate({ _id: objectId }, { $set: { about: aboutData } }, { new: true });
            return credentials;
        });
    }
    // Update social links
    updateSocial(id, socialData) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectId = new mongodb_1.ObjectId(id);
            const credentials = yield credentials_model_1.CredentialsModel.findOneAndUpdate({ _id: objectId }, { $set: { social: socialData } }, { new: true });
            return credentials;
        });
    }
    // Update education
    updateEducation(id, educationData) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectId = new mongodb_1.ObjectId(id);
            const credentials = yield credentials_model_1.CredentialsModel.findOneAndUpdate({ _id: objectId }, { $set: { education: educationData } }, { new: true });
            return credentials;
        });
    }
    // Update experience
    updateExperience(id, experienceData) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectId = new mongodb_1.ObjectId(id);
            const credentials = yield credentials_model_1.CredentialsModel.findOneAndUpdate({ _id: objectId }, { $set: { experience: experienceData } }, { new: true });
            return credentials;
        });
    }
}
exports.CredentialsService = CredentialsService;
