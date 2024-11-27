import StudentRoutes from './StudentRoutes.js';

const routes = (app) => {
    app.use('/api/student', StudentRoutes);
}

export default routes;

