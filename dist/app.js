"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const globalErrorHandler_1 = require("./app/modules/Error/globalErrorHandler");
const user_routes_1 = require("./app/modules/User/user.routes");
const auth_routes_1 = require("./app/modules/Auth/auth.routes");
const blog_routes_1 = require("./app/modules/Blog/blog.routes");
const project_routes_1 = require("./app/modules/Project/project.routes");
const category_routes_1 = require("./app/modules/Category/category.routes");
const skill_routes_1 = require("./app/modules/skill/skill.routes");
const credentials_routes_1 = require("./app/modules/credentials/credentials.routes");
const http_status_codes_1 = require("http-status-codes");
const os_1 = __importDefault(require("os"));
const app = (0, express_1.default)();
// Allowed origins
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://dashboard-nexus-blue.vercel.app',
    'https://joychandrauday-nexus.vercel.app',
    'https://student-stationary-frontend.vercel.app',
];
// CORS middleware
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'), false);
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
// Handle preflight OPTIONS requests
app.options('*', (0, cors_1.default)());
// Body parser middleware
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
// Root route for testing
app.get('/', (req, res) => {
    const currentDateTime = new Date().toISOString();
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const serverHostname = os_1.default.hostname();
    const serverPlatform = os_1.default.platform();
    const serverUptime = os_1.default.uptime();
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: 'Welcome to Portfolio Server of Joy Chandra Uday',
        version: '1.0.0',
        clientDetails: {
            ipAddress: clientIp,
            accessedAt: currentDateTime,
        },
        serverDetails: {
            hostname: serverHostname,
            platform: serverPlatform,
            uptime: `${Math.floor(serverUptime / 60 / 60)} hours ${Math.floor((serverUptime / 60) % 60)} minutes`,
        },
        developerContact: {
            email: 'joychandraud@gmail.com',
            website: 'https://joychandrauday-nexus.vercel.app',
        },
    });
});
// API routes
app.use('/api/auth', auth_routes_1.authRoutes);
app.use('/api/users', user_routes_1.userRoutes);
app.use('/api/blogs', blog_routes_1.blogRoutes);
app.use('/api/admin', user_routes_1.userRoutes);
app.use('/api/projects', project_routes_1.projectRoutes);
app.use('/api/category', category_routes_1.categoryRoutes);
app.use('/api/skill', skill_routes_1.skillRoutes);
app.use('/api/credentials', credentials_routes_1.credentialsRoutes);
// Global error handler
app.use((err, req, res, next) => {
    (0, globalErrorHandler_1.errorHandler)(err, req, res, next);
});
exports.default = app;
