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
exports.projectController = void 0;
const project_service_1 = require("./project.service");
const sendResponse_1 = __importDefault(require("../Utilities/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield project_service_1.projectService.getProjects();
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.OK,
            success: true,
            message: 'Projects retrieved successfully',
            data: projects,
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
const getSingleProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield project_service_1.projectService.getSingleProject(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(project);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching project" });
    }
});
const editProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProject = yield project_service_1.projectService.editProject(req.params.id, req.body);
        if (!updatedProject) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(updatedProject);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating project" });
    }
});
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProject = yield project_service_1.projectService.deleteProject(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.OK,
            success: true,
            message: 'Project deleted successfully',
            data: {}
        });
    }
    catch (error) {
        let errorMessage = 'Failed to delete Project';
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
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProject = yield project_service_1.projectService.addProject(req.body);
        res.status(201).json(newProject);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating project" });
    }
});
exports.projectController = {
    getProjects,
    getSingleProject,
    editProject,
    deleteProject,
    createProject,
};
