"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialsModel = void 0;
const mongoose_1 = require("mongoose");
// Banner schema
const bannerSchema = new mongoose_1.Schema({
    title: { type: String, required: false },
    subtitle: { type: String, required: false },
    bannerImage: { type: String, required: false },
    designations: [{ type: String, required: false }],
    designationPretext: { type: String, required: false },
}, { _id: false });
// About schema
const aboutSchema = new mongoose_1.Schema({
    title: { type: String, required: false },
    content: { type: String, required: false },
}, { _id: false });
// Social schema
const socialSchema = new mongoose_1.Schema({
    facebook: { type: String, required: false },
    twitter: { type: String, required: false },
    instagram: { type: String, required: false },
    linkedin: { type: String, required: false },
    github: { type: String, required: false },
    medium: { type: String, required: false },
    youtube: { type: String, required: false },
    dribbble: { type: String, required: false },
    behance: { type: String, required: false },
    reddit: { type: String, required: false },
    stackoverflow: { type: String, required: false },
    resume: { type: String, required: false },
}, { _id: false });
// Education schema
const educationSchema = new mongoose_1.Schema({
    degree: { type: String, required: false },
    institution: { type: String, required: false },
    specialization: { type: String, required: false },
    startYear: { type: Date, required: false },
    endYear: { type: Date, required: false }, // Can also be 'present'
}, { _id: false });
// Experience schema
const experienceSchema = new mongoose_1.Schema({
    company: { type: String, required: false },
    position: { type: String, required: false },
    duration: {
        from: { type: String, required: false },
        to: { type: String, required: false },
    },
    location: { type: String, required: false },
    description: { type: String, required: false },
    achievements: [{ type: String, required: false }],
}, { _id: false });
// Credentials schema
const credentialsSchema = new mongoose_1.Schema({
    banner: { type: bannerSchema, required: false },
    about: { type: aboutSchema, required: false },
    social: { type: socialSchema, required: false },
    education: [{ type: educationSchema, required: false }],
    experience: [{ type: experienceSchema, required: false }],
}, {
    timestamps: true,
});
exports.CredentialsModel = (0, mongoose_1.model)('Credentials', credentialsSchema);
